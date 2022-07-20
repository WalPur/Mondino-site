import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Typography, Box } from '@mui/material';

import axios from 'axios';

import { Title, SubTitle, Text } from "../global-styles";

function Registration () {
    const navigate = useNavigate();
    const params = useParams();
    const pageId = params.id;
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios
            .get('https://mondinotracker.com/api/article/' + pageId + '/')
            .then(response => {
                const request = response.data[0]
                setData(request)
                console.log(data)
            }).catch((error) => {
                console.log('error', error)
            })
    }, []);
    return(
        <div
            className='container'
        >
            <Helmet>
                <title>Mondino Tracker - Справочный центр</title>
            </Helmet>
            <Box>
                <Title>
                    <img 
                        src="/images/arrowback.png" 
                        onClick={()=>navigate(-1)}
                        style={{
                            width: '70px',
                            height: 'auto',
                            marginRight: 44,                   
                            cursor: 'pointer', 
                        }} 
                    />     
                    {data.title}
                </Title>
                {data.blocks?.map(( item, index ) => (
                    <Box key={index}>
                        <SubTitle
                            sx={{
                                mt: '28px',
                                mb: '28px',
                            }}
                        >
                            {item.title}
                        </SubTitle>
                        {item.lines.map(( texts, index ) => (
                            <Text key={index}
                                sx={{fontWeight: 300,
                                    fontSize: 20,
                                    lineHeight: "23px",
                                    color: "#000",
                                    mb: '10px',
                                    }}>
                                {texts.text}
                            </Text>
                        ))}
                         <img 
                            style={{ 
                                margin: "0 auto",
                            }} 
                            src={item.image != null ? "https://mondinotracker.com" + item.image : ""}
                        />
                    </Box>
                ))}
            </Box>
        </div>
    );
}

export default Registration;