import React from 'react';
import { useNavigate, useParams } from "react-router-dom";

import { Box, Typography, Button } from "@mui/material";
import { styled } from '@mui/system';

const MyTextTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
    fontSize: 41,
    lineHeight: "63px",
    marginBottom: 23,
    // marginTop: 20,
    color: "#343434",
    [theme.breakpoints.down("sm")]:{
        fontSize: 32,
        marginBottom: 14,
        marginTop: 10,
    }
}));
const MyText = styled(Typography)(({ theme }) => ({
    fontWeight: 400,
    fontSize: 33,
    lineHeight: "56px",
    color: "#343434",
    // marginBottom: 16,
    // marginLeft: 36,
    [theme.breakpoints.down("sm")]:{
        marginBottom: 10,
        fontSize: 14,
        lineHeight: "16px",
    }
}));

function RequestComponent() {
    const navigate = useNavigate();
    const params = useParams();
    const prodId = params.id;

    function goToMainPage() {
        navigate("/")
    }
    return(
        <Box>
            <Box className="container" sx={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: 650 }}>
                <Box sx = {{mb: 92}}>
                    <Box sx = {{mb: 22}}>
                        <MyTextTitle>
                            ЗАЯВКА ОТПРАВЛЕНА!
                        </MyTextTitle>
                    </Box>
                    <Box>
                        <MyText>
                            Ваш номер заявки - #{prodId}
                        </MyText>
                    </Box>
                </Box>
                <Box>
                    <Box sx = {{mb: 30}}>
                        <MyText>
                            Мы свяжемся с Вами в течении 24 часов после проверки ваших данных
                        </MyText>
                    </Box>
                    <Button onClick={goToMainPage} type="submit">НА ГЛАВНУЮ</Button>
                </Box>
                
            </Box>
        </Box>
    )
}

export default RequestComponent;