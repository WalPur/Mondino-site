import React, {useState} from "react";

import { Box, Container, Button, Typography, TextField } from "@mui/material";
import { styled } from "@mui/system";

import Images from "../../images";

const CustomBox = styled(Box)(({ theme }) => ({
    padding: "100px 0",
    [theme.breakpoints.down("sm")]:{
        padding: "30px 0",
    }
}));
const MyTextTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    fontSize: 48,
    lineHeight: "132%",
    marginBottom: 27,
    marginTop: 20,
    color: "#1B1642",
    [theme.breakpoints.down("sm")]:{
        fontSize: 32,
        marginBottom: 14,
        marginTop: 10,
    }
}));
const MyText = styled(Typography)(({ theme }) => ({
    fontWeight: 300,
    fontSize: 20,
    lineHeight: "23px",
    color: "#000",
    marginBottom: 16,
    marginLeft: 36,
    [theme.breakpoints.down("sm")]:{
        marginBottom: 10,
        fontSize: 14,
        lineHeight: "16px",
    }
}));
const MyTextField = styled(TextField)(({ theme }) => ({
    fontSize: "24px!important",
    lineHeight: "28px",
    color: "#000",
    width: "100%",
    [theme.breakpoints.down("sm")]:{
        fontSize: "16px!important",
        lineHeight: "20px",
    }
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
    [theme.breakpoints.down("sm")]:{
        padding: "16px 50px",
        fontSize: 16,
        lineHeight: "20px",
    }
}));

function ApplicationForm(){
    // const [value, setValue] = useState('')

    const data = [
        "Наименование организации",
        "Ф.И.О ответственного лица",
        "Номер ответственного лица",
        "Эл. почта",
        "Кол-во сотрудников",
    ];
   
    return(
        <CustomBox>
            <Box className="container" sx={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: 650 }}>
                <Box>
                    <img
                        src={Images.mondino_title}
                        style={{
                            maxWidth: 590,
                            width: "100%",
                        }}
                    />
                    <MyTextTitle>
                        Заявка для партнерства
                    </MyTextTitle>
                </Box>
                {/* <TextField value={value} onChange={(e) => setValue(e.target.value)} /> */}
                <Box sx={{ mb: 3.6, width: "100%" }}>
                    {data.map((item, index) => (
                        <Box key={index} sx={{ mb: 2, width: "100%" }}>
                            <MyText>
                                {item}
                            </MyText>
                            <InputBox>
                                <MyTextField label="Обязательно для заполнения" required variant="standard"/>
                            </InputBox>
                        </Box>
                    ))}
                </Box>
                <Box sx={{ mb: 2, width: "100%" }}>
                    <CustomButton>
                        Отправить
                    </CustomButton>
                    <MyText sx={{ opacity: 0.5, margin: 0 }}>
                        *В ближайшее время с вами свяжется наш сотрудник
                    </MyText>
                </Box>
            </Box>
        </CustomBox>
    )
}

export default ApplicationForm;