import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from 'react-helmet';

import { Typography, Box, } from "@mui/material";
import { styled } from "@mui/system";

import axios from 'axios';

import { Title, SubTitle, Text } from "../global-styles";

const CustomSubtitle = styled(Typography)(({ theme }) => ({
    fontSize: 24,
    lineHeight: "136%",
    fontWeight: 700,
    [theme.breakpoints.down("sm")]:{
        fontSize: 18,
    },
}))
const CustomText = styled(Typography)(({ theme }) => ({
    fontSize: 16,
    lineHeight: "136%",
    fontWeight: 300,
    [theme.breakpoints.down("sm")]:{
        fontSize: 14,
    },
}))
const CustomBox = styled(Box)(({ theme }) => ({
    margin: "50px 0",
    [theme.breakpoints.down("sm")]:{
        margin: "25px 0",
    }
}));

const CustomContainer = styled(Box)(({ theme }) => ({
    margin: "0 auto",
    display: "flex", 
    flexDirection: "column", 
    alignItems: "start",
    maxWidth: '1139px',
    [theme.breakpoints.down(1200)]:{
        maxWidth: '746px',
    },
    [theme.breakpoints.down(800)]:{
        maxWidth: '353px',
        alignItems: "center",
    },
    [theme.breakpoints.down(375)]:{
        padding: '0 15px'
    }
}));

function Faq() {
    const [data, setData] = useState([]);
    const navigate=useNavigate();
    
    useEffect(() => {
        axios
            .get('https://mondinotracker.com/api/cards/')
            .then(response => {
                const request = response.data
                setData(request)
            }).catch((error) => {
                console.log('error', error)
            })
    }, []);

    return(
        <CustomBox>
            <CustomContainer>
                <Helmet>
                    <title>Mondino Tracker - Поддержка пользователей</title>
                </Helmet>
                <Title
                    sx={{
                        mb: '28px',
                    }}
                >
                    Справочный центр
                </Title>
                <Box 
                    gap={5} 
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                    }}
                >
                {data.map((item, index) => (
                    <Box item 
                        key={index} 
                        sx={{
                            position: "relative",
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: 353,
                            height: 287,                            
                            borderRadius: '20px',
                            width: "100%",
                            backgroundColor: 'none',
                            backgroundImage: "url(https://mondinotracker.com" + item.image + ")",
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: '100% 100%',
                            backgroundSize: '50%',
                            cursor: 'pointer',
                            '&:after': {
                                position: "absolute",
                                content: '""',
                                width: "100%",
                                height: "100%",
                                borderRadius: '20px',
                                border: '4px solid #9E9CAD',
                                zIndex: -1,
                            },
                            '&:hover': {
                                backgroundColor: '#9F97DE',
                            }
                        }}
                        onClick={() => navigate('/faq/topic/'+(item.id))}>
                        <CustomSubtitle sx={{
                                color: 'black',
                                mt:'26px',
                                ml: '30px',
                                mr: '30px',
                                // fontWeight: 700,
                                // fontSize: '23px',
                                // lineHeight: '28px' 
                            }}
                        >
                            {item.title}
                        </CustomSubtitle>                            
                        <CustomText sx={{
                                mt: "30px",
                                ml: "30px",
                                width: '135px',
                                color: 'black',
                                // fontWeight: 500,
                                // fontSize: '16px',
                                // lineHeight: '19px'
                            }}
                        >
                            {item.desc}
                        </CustomText>       
                    </Box>
                ))}
                </Box>
            </CustomContainer>
        </CustomBox>
    );
}

export default Faq;