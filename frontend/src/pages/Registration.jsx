import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Typography, Box } from '@mui/material';
import { styled } from "@mui/system";

import axios from 'axios';

import { Title, SubTitle, Text, ArrowImage } from "../global-styles";

const CustomBox = styled(Box)(({ theme }) => ({
    margin: "50px 0",
    [theme.breakpoints.down("sm")]:{
        margin: "25px 0",
    }
}))
const TitleBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
}))

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
            }).catch((error) => {
                console.log('error', error)
            })
    }, []);
    return(
        <CustomBox>
            <Box
                className='container'
            >
                <Helmet>
                    <title>Mondino Tracker - Справочный центр</title>
                </Helmet>
                <Box>
                    <TitleBox>
                        <ArrowImage
                            sx={{ alignSelf: "start" }}
                            src="/images/arrowback.png" 
                            onClick={()=>navigate(-1)}
                        />  
                        <Title>   
                            {data.title}
                        </Title>
                    </TitleBox>
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
                                        color: "#000",
                                        mb: '8px',
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
            </Box>
        </CustomBox>
    );
}

export default Registration;