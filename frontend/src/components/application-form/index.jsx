import React, {useState} from "react";
import { Box, Container, Button, Typography, TextField, Input } from "@mui/material";
import { styled } from "@mui/system";
import { useForm } from "react-hook-form";
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
    padding: " 10px 20px",
    backgroundColor: "white",
    borderRadius: 45,
    fontSize: "24px!important",
    lineHeight: "28px",
    color: "#000",
    width: "100%",
    boxShadow: "0px 4px 12px rgb(0 0 0 / 8%)",
    [theme.breakpoints.down("sm")]:{
        fontSize: "16px!important",
        lineHeight: "20px",
    },
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
    '&:disabled': {
        color: "#b0b0b0",
    },
    '&:hover': {
        backgroundColor: "#1B1641",
    },
    [theme.breakpoints.down("sm")]:{
        padding: "16px 50px",
        fontSize: 16,
        lineHeight: "20px",
    }
}));
const CustomError = styled(Typography)(({ theme }) => ({
    paddingLeft: 36,
    marginTop: 5,
    fontSize: 16,
    [theme.breakpoints.down("sm")]:{
        fontSize: 10,
    }
}));


function ApplicationForm(){
    const {
          register,
          formState: { errors, isValid },
          handleSubmit,
          reset,
        } = useForm({
          mode: 'all'
        });
    const onSubmit = (data) => {
        reset();
    };
    handleSubmit = (e) => {
        e.preventDefault();
        // const data = { name: value };
        console.log('submit');
        // console.log(value);
        fetch('http://127.0.0.1:5000/api/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        // body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(res => console.log(res));
    }

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
                <Box
                    sx={{
                        width: "100%",
                    }}
                    component="form"
                    onSubmit={handleSubmit}
                >   
                    <Box sx={{ mb: 2, width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
                        <MyText>
                            Наименование организации*
                        </MyText>
                        <MyTextField 
                            label=" "
                            variant="standard"
                            {...register("org", {
                                required: "Поле обязательно к заполнению.",
                                pattern: {
                                    message: "Введенное значение не соответствует формату."
                                },
                            })}
                        />
                        {errors?.org && <CustomError>{errors?.org?.message || "Errors"}</CustomError>}
                    </Box>
                    <Box sx={{ mb: 2, width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
                        <MyText>
                            Ф.И.О ответственного лица*
                        </MyText>
                        <MyTextField 
                            label=" "
                            variant="standard"
                            {...register("fio", {
                                required: "Поле обязательно к заполнению.",
                                pattern: {
                                    value: /^([^\s\d]+)\s([^\s\d]+)\s([^\s\d]+)$/,
                                    message: "Введенное значение не соответствует формату."
                                },
                            })}
                        />
                        {errors?.fio && <CustomError>{errors?.fio?.message || "Errors"}</CustomError>}
                    </Box>
                    <Box sx={{ mb: 2, width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
                        <MyText>
                            Номер ответственного лица*
                        </MyText>
                        <MyTextField 
                            label=" "
                            variant="standard"
                            {...register("number", {
                                required: "Поле обязательно к заполнению.",
                                pattern: {
                                    value: /^((8|\+7)[\- ]?)(\(?\d{3}\)?[\- ]?)[\d\- ]{7}$/,
                                    message: "Введенное значение не соответствует формату."
                                },
                            })}
                        />
                        {errors?.number && <CustomError>{errors?.number?.message || "Errors"}</CustomError>}
                    </Box>
                    <Box sx={{ mb: 2, width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
                        <MyText>
                            Эл. почта*
                        </MyText>
                        <MyTextField label=" " variant="standard"
                            {...register("mail", {
                                required: "Поле обязательно к заполнению.",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Введенное значение не соответствует формату электронной почты."
                                },
                            })}
                        />
                        {errors?.mail && <CustomError>{errors?.mail?.message || "Errors"}</CustomError>}
                    </Box>
                    <Box sx={{ mb: 2, width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
                        <MyText>
                            Количество сотрудников*
                        </MyText>
                        <MyTextField
                            label=" "
                            variant="standard"
                            {...register("kolvo", {
                                required: "Поле обязательно к заполнению.",
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "Введенное значение не соответствует формату."
                                },
                            })}
                        />
                        {errors?.kolvo && <CustomError>{errors?.kolvo?.message || "Errors"}</CustomError>}
                    </Box>
                    <CustomButton type="submit" disabled={!isValid}>Отправить</CustomButton>
                </Box>
            </Box> 
        </CustomBox>
    )
}

export default ApplicationForm;