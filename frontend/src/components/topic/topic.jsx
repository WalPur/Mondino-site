import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from 'react-helmet';

import { Typography, Box, } from "@mui/material";

import axios from 'axios';

function Topic () {
    // const topic = [
    //     {
    //         label: [{label: "Регистрация", id: 0}, {label: "Заполнение профиля", id: 1}],
    //     },
    //     {
    //         label:  [{label: "Добавить курс", id: 2}, {label: "Изменить курс", id: 3}, {label: "Удалить курс приема лекарств", id: 4}],
    //     },
    //     {
    //         label:  [{label: "Чат с врачами", id: 5}]
    //     },
    //     {
    //         label: [{label: "Присоедениться к клинике", id: 6}, {label: "Покинуть клинику", id: 7}]
    //     },
    // ]

    const navigate=useNavigate();
    const params = useParams();
    const topicId = params.id;
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
        console.log(topic)
    }, []);

    return(
        <div className="container" style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <Box sx={{
                    mt: '100px',
                    mb: '80px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: "100%",
                    alignItems: 'center',
                    fontWeight: 700,
                    fontSize: '36px',
                    lineHeight: '56px',
                    color: '#000000', 
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
                Справочный центр
            </Box>
            <Box 
                gap={3} 
                sx={{
                    mb: '100px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: "100%",
                    justifyContent: "flex-start",
                }}>
               {topic.map((item, index) => (
                    <Box item 
                        key={index} 
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            height: 120,
                            width: "32%",
                            borderRadius: '20px',
                            backgroundColor: '#EDEDED',
                            cursor: 'pointer',
                            '&:hover': {
                            backgroundColor: '#D3CFEC',
                        }}}
                        onClick={() => navigate("/faq/page/" + item.id)}
                    >
                        <Typography sx={{
                            pl: '40px',
                            pr: '40px',
                            color: '#000000',
                            fontWeight: 700,
                            fontSize: '24px',
                            lineHeight: '28px',
                        }}>{item.title}</Typography>
                    </Box>
                ))}
            </Box>
        </div>
    );
}

export default Topic;