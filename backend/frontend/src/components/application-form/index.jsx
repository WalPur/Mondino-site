import React from "react";

import { Box, Container, Button, Typography, TextField } from "@mui/material";
import { styled } from "@mui/system";

import Images from "../../images";

function ApplicationForm(){
    const data = [
        "Наименование организации",
        "Ф.И.О ответственного лица",
        "Номер ответственного лица",
        "Эл. почта",
        "Кол-во сотрудников",
    ];
    const MyText = styled(Typography)(({ theme }) => ({
        fontWeight: 300,
        fontSize: 20,
        lineHeight: "23px",
        color: "#000",
        marginBottom: 16,
        marginLeft: 36,
    }));
    const MyTextField = styled(TextField)(({ theme }) => ({
        fontSize: 24,
        lineHeight: "28px",
        color: "#000",
        width: "100%",
    }));
    const InputBox = styled(Box)(({ theme }) => ({
        padding: "3px 36px",
        maxWidth: 650,
        height: 70,
        backgroundColor: "#fff",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
        borderRadius: 119,
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
    }));
    return(
        <Box
            sx={{
                padding: "100px 0",
            }}
        >
            <Container classname="container">
                <Box>
                    <img
                        src={Images.mondino_title}
                        style={{
                            maxWidth: 590,
                        }}
                    />
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontSize: 48,
                            lineHeight: "132%",
                            mb: 2.7,
                            color: "#1B1642",
                        }}
                    >
                        Заявка для партнерства
                    </Typography>
                </Box>
                <Box sx={{ mb: 3.6 }}>
                    {data.map((item, index) => (
                        <Box key={index} sx={{ mb: 2 }}>
                            <MyText>
                                {item}
                            </MyText>
                            <InputBox>
                                <MyTextField label="Обязательно для заполнения" required variant="standard"/>
                            </InputBox>
                        </Box>
                    ))}
                </Box>
                <Box>
                    <CustomButton>
                        Отправить
                    </CustomButton>
                    <MyText sx={{ opacity: 0.5, margin: 0 }}>
                        *В ближайшее время с вами свяжется наш сотрудник
                    </MyText>
                </Box>
            </Container>
        </Box>
    )
}

export default ApplicationForm;