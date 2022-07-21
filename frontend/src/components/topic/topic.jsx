import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from 'react-helmet';

import { Typography, Box, } from "@mui/material";
import { styled } from "@mui/system";

import axios from 'axios';

import { Title, Text, ArrowImage } from "../../global-styles";

const CustomBox = styled(Box)(({ theme }) => ({
    margin: "50px 0",
    [theme.breakpoints.down("sm")]:{
        margin: "25px 0",
    }
}));
const TopicBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    // height: 120,
    padding: "20px 0",
    width: "30%",
    borderRadius: '20px',
    backgroundColor: '#EDEDED',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#D3CFEC',
    },
    [theme.breakpoints.down("lg")]:{
        width: "45%",
    },
    [theme.breakpoints.down("md")]:{
        flexWrap: "wrap",
        maxWidth: 300,
        width: "100%",
    }
}));

function Topic () {
    const navigate=useNavigate();
    const params = useParams();
    const topicId = params.id;
    const [data, setData] = useState([]);
    const [topic, setTopic] = useState([]);
    
    useEffect(() => {
        axios
            .get('https://mondinotracker.com/api/card/' + topicId + '/')
            .then(response => {
                const request = response.data
                setTopic(request)
            }).catch((error) => {
                console.log('error', error)
            })
        axios
        .get('https://mondinotracker.com/api/cards/')
        .then(response => {
            const request = response.data.find(item => item.id == topicId).title
            setData(request)
        }).catch((error) => {
            console.log('error', error)
        })
    }, []);

    return(
        <CustomBox>
            <Helmet>
                <title>Mondino Tracker - Справочный центр</title>
            </Helmet>
            <Box className="container" style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                <Box sx={{
                        display: 'flex',
                        alignItems: "center",
                        mb: '28px',
                    }}
                >
                    <ArrowImage 
                        src="/images/arrowback.png" 
                        onClick={()=>navigate(-1)}
                        style={{
                            alignSelf: "start",
                        }} 
                    />                
                    <Title>
                        {data}
                    </Title>
                </Box>
                <Box 
                    gap={3} 
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        width: "100%",
                        justifyContent: "flex-start",
                    }}>
                {topic.map((item, index) => (
                        <TopicBox
                            key={index}
                            onClick={() => navigate("/faq/page/" + item.id)}
                        >
                            <Text 
                                sx={{
                                    pl: '40px',
                                    pr: '40px',
                                    color: '#000'
                                }}
                            >
                                {item.title}
                            </Text>
                        </TopicBox>
                    ))}
                </Box>
            </Box>
        </CustomBox>
    );
}

export default Topic;