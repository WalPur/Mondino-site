import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Typography, Box } from '@mui/material';

import axios from 'axios';

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
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Helmet>
                <title>Mondino Tracker - Справочный центр</title>
            </Helmet>
            {/* <Box
                sx={{
                    width: '60%'
                }}
            >
                {data[pageId-1].map(( item, index ) => (
                    <Box key={index}>
                        <Typography
                            sx={{
                                mt: '28px',
                                mb: '28px',
                                fontWeight: 700,
                                fontSize: "24px",
                                lineHeight: '28px',
                            }}
                        >
                            {item.title}
                        </Typography>
                        {item.texts.map(( texts, index ) => (
                            <Typography key={index}
                                sx={{fontWeight: 300,
                                    fontSize: 20,
                                    lineHeight: "23px",
                                    color: "#000",
                                    mb: '10px',
                                    }}>
                                {texts}
                            </Typography>
                        ))}
                         <img 
                            style={{ 
                                margin: "0 auto",
                            }} 
                            src={item.img}
                        />
                    </Box>
                ))}
            </Box> */}
            <Box
                sx={{
                    width: "60%",
                }}    
            >
                <Typography
                    sx={{
                        mt: '28px',
                        mb: '28px',
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: '28px',
                    }}
                >
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
                </Typography>
                {data.content}
            </Box>
        </div>
    );
}

export default Registration;