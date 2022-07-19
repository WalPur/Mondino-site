import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { Typography, Box, } from "@mui/material";

import axios from 'axios';

function Faq() {

    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios
            .get('https://mondinotracker.com/api/cards/')
            .then(response => {
                const request = response.data
                setData(request)
            }).catch((error) => {
                console.log('error', error)
            })
        console.log(data)
    }, []);

    const navigate=useNavigate();
    return(
        <div className="container" style={{ display: "flex", justifyContent: "center" }}>
            <Helmet>
                <title>Mondino Tracker - Поддержка пользователей</title>
            </Helmet>
            <Box 
                gap={5} 
                sx={{
                    mt: '100px',
                    mb: '100px',
                    p: 1,
                    display: 'flex',
                    flexWrap: 'wrap',                    
                }}>
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
                    <Typography sx={{
                        color: 'black',
                        mt:'26px',
                        ml: '30px',
                        mr: '30px',
                        fontWeight: 700,
                        fontSize: '23px',
                        lineHeight: '28px' 
                        }}
                    >
                        {item.title}
                    </Typography>                            
                    <Typography sx={{
                            mt: "30px",
                            width: '135px',
                            ml: "30px",
                            color: 'black',
                            fontWeight: 500,
                            fontSize: '16px',
                            lineHeight: '19px'
                        }}
                    >
                        {item.desc}
                    </Typography>       
                </Box>
            ))}
            </Box>
        </div>
    );
}

export default Faq;