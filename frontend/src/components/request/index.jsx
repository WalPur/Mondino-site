import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import { Box, Typography, Button } from "@mui/material";
import { styled } from '@mui/system';

import axios from "axios";

const CustomBox = styled(Box)(({ theme }) => ({
    padding: "100px 0",
    [theme.breakpoints.down("sm")]:{
        padding: "30px 0",
    }
}));
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
const CustomButton = styled(Button)(({ theme }) => ({
    // padding: "21px 70px",
    // marginBottom: "26px",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: "18px",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#0D6EFD",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
    borderRadius: 4,
    '&:disabled': {
        color: "#b0b0b0",
    },
    '&:hover': {
        backgroundColor: "#1B1641",
    },
    [theme.breakpoints.down("sm")]:{
        // padding: "16px 50px",
        fontSize: 8,
        lineHeight: "10px",
    }
}));
function Request() {
    return(
        <CustomBox>
            <Box className="container" sx={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: 650 }}>
                <Box sx = {{mb: 92}}>
                    <Box sx = {{mb: 22}}>
                        <MyTextTitle>
                            ЗАЯВКА ОТПРАВЛЕНА!
                        </MyTextTitle>
                    </Box>
                    <Box>
                        <MyText>
                            Ваш номер заявки - #0000
                        </MyText>
                    </Box>
                </Box>
                <Box>
                    <Box sx = {{mb: 30}}>
                        <MyText>
                            Мы свяжемся с Вами в течении 24 часов после проверки ваших данных
           S             </MyText>
                    </Box>
                    <CustomButton type="submit">НА ГЛАВНУЮ</CustomButton>
                </Box>
                
            </Box>
        </CustomBox>
    )
}

export default Request;