import React from 'react';
import { useNavigate, useParams } from "react-router-dom";

import { Box, Typography, Button } from "@mui/material";
import { styled } from '@mui/system';

const CustomBox = styled(Box)(({ theme }) => ({
    height: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "100px 0",
    [theme.breakpoints.down("sm")]:{
        padding: "30px 0",
    }
}));
const MyTextTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    fontSize: 41,
    marginBottom: 23,
    color: "#343434",
    [theme.breakpoints.down("sm")]:{
        fontSize: 21,
        marginBottom: 14,
    }
}));
const MyText = styled(Typography)(({ theme }) => ({
    letterSpacing: "0.01em",
    fontWeight: 400,
    fontSize: 33,
    lineHeight: "56px",
    color: "#343434",
    [theme.breakpoints.down("sm")]:{
        marginBottom: 10,
        fontSize: 14,
        lineHeight: "16px",
    }
}));
const CustomButton = styled(Button)(({ theme }) => ({
    padding: "21px 70px",
    marginBottom: "26px",
    fontWeight: 500,
    fontSize: 24,
    lineHeight: "28px",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#1B1641",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
    borderRadius: 119,
    '&:disabled': {
        color: "#b0b0b0",
    },
    '&:hover': {
        backgroundColor: "#1B1641",
    },
    [theme.breakpoints.down("sm")]:{
        padding: "12px 30px",
        fontSize: 12,
        lineHeight: "20px",
    }
}));
const TitleBox = styled(Box)(({ theme }) => ({
    marginBottom: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down("sm")]:{
        marginBottom: 20,
    }
}))
const ContainerBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: 650,
    [theme.breakpoints.down("sm")]:{
        maxWidth: 400,
    }
}))

function RequestComponent() {
    const navigate = useNavigate();
    const params = useParams();
    const prodId = params.id;

    function goToMainPage() {
        navigate("/")
    }
    return(
        <CustomBox>
            <ContainerBox className="container" sx={{ }}>
                <TitleBox>
                    <Box >
                        <MyTextTitle sx = {{mb: 2.2}}>
                            ЗАЯВКА ОТПРАВЛЕНА!
                        </MyTextTitle>
                    </Box>
                    <Box>
                        <MyText>
                            Ваш номер заявки - #{prodId}
                        </MyText>
                    </Box>
                </TitleBox>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", }}>
                    <Box sx = {{ mb: 3 }}>
                        <MyText>
                            Мы свяжемся с Вами в течении 24 часов после проверки ваших данных
                        </MyText>
                    </Box>
                    <CustomButton onClick={goToMainPage} type="submit" >НА ГЛАВНУЮ</CustomButton>
                </Box>
            </ContainerBox>
        </CustomBox>
    )
}

export default RequestComponent;