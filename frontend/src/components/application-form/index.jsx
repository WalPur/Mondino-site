import { Box, Button, TextField, Typography } from "@mui/material";

import axios from "axios";
import { styled } from "@mui/system";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CustomBox = styled(Box)(({ theme }) => ({
    padding: "100px 0",
    [theme.breakpoints.down("sm")]:{
        padding: "30px 0",
    }
}));
const MondinoTitle = styled(Typography)(({ theme }) => ({
    fontFamily: "Montserrat!important",
    fontWeight: 700,
    fontSize: 90,
    lineHeight: "121%",
    color: "#0E1B4F",
    [theme.breakpoints.down("sm")]:{
        fontSize: 70,
    },
    [theme.breakpoints.down(500)]:{
        fontSize: 60,
    },
    [theme.breakpoints.down(400)]:{
        fontSize: 50,
    },
    [theme.breakpoints.down(300)]:{
        fontSize: 40,
    },
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
    },
    [theme.breakpoints.down(400)]:{
        fontSize: 24,
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
// const InputBox = styled(Box)(({ theme }) => ({
//     padding: "3px 36px",
//     maxWidth: 650,
//     height: 70,
//     backgroundColor: "#fff",
//     boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
//     borderRadius: 119,
// }));
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
    const navigate = useNavigate();
    const {
          register,
          formState: { errors, isValid },
          handleSubmit,
          reset,
        } = useForm({
          mode: 'all'
        });
    const onSubmit = (data, e) => {
        reset();
        data = JSON.stringify(data);
        console.log(data);
        const headers = {
            'Content-Type': 'application/json'
        }
        const url = 'https://mondinotracker.com/api/partner/';
        axios.post(url, data, { headers })
        .then(response => navigate("/request/" + response.data.id))
    };

    return(
        <CustomBox>
            <Box className="container" sx={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: 650 }}>
                <Box>
                    <img
                        src="/images/mondino_title.svg"
                        style={{
                            maxWidth: 590,
                            width: "100%",
                        }}
                        alt="????????"
                    />
                    <MondinoTitle>
                        Tracker
                    </MondinoTitle>
                    <MyTextTitle>
                        ???????????? ?????? ??????????????????????
                    </MyTextTitle>
                </Box>
                <Box
                    sx={{
                        width: "100%",
                    }}
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                >   
                    <Box sx={{ mb: 2, width: "100%" }}>
                        <MyText>
                            ???????????????????????? ??????????????????????*
                        </MyText>
                        <MyTextField 
                            label=" "
                            variant="standard"
                            {...register("org_name", {
                                required: "???????? ?????????????????????? ?? ????????????????????.",
                                pattern: {
                                    // value: /^(\S+\s*)+$/,
                                    message: "?????????????????? ???????????????? ???? ?????????????????????????? ??????????????."
                                },
                            })}
                        />
                        {errors?.org_name && <CustomError>{errors?.org_name?.message || "Errors"}</CustomError>}
                    </Box>
                    <Box sx={{ mb: 2, width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
                        <MyText>
                            ??.??.?? ???????????????????????????? ????????*
                        </MyText>
                        <MyTextField 
                            label=" "
                            variant="standard"
                            {...register("full_name", {
                                required: "???????? ?????????????????????? ?? ????????????????????.",
                                pattern: {
                                    value: /^([^\s\d]+)\s([^\s\d]+)\s([^\s\d]+)$/,
                                    message: "?????????????????? ???????????????? ???? ?????????????????????????? ??????????????."
                                },
                            })}
                        />
                        {errors?.full_name && <CustomError>{errors?.full_name?.message || "Errors"}</CustomError>}
                    </Box>
                    <Box sx={{ mb: 2, width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
                        <MyText>
                            ?????????? ???????????????????????????? ????????*
                        </MyText>
                        <MyTextField 
                            label=" "
                            variant="standard"
                            {...register("phone_number", {
                                required: "???????? ?????????????????????? ?? ????????????????????.",
                                pattern: {
                                    value: /^((7|8|\+7|\+8)[\- ]?)(\(?\d{3}\)?[\- ]?)[\d\- ]{7}$/,
                                    message: "?????????????????? ???????????????? ???? ?????????????????????????? ??????????????."
                                },
                            })}
                        />
                        {errors?.phone_number && <CustomError>{errors?.phone_number?.message || "Errors"}</CustomError>}
                    </Box>
                    <Box sx={{ mb: 2, width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
                        <MyText>
                            ????. ??????????*
                        </MyText>
                        <MyTextField 
                            label=" " 
                            variant="standard"
                            {...register("org_email", {
                                required: "???????? ?????????????????????? ?? ????????????????????.",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "?????????????????? ???????????????? ???? ?????????????????????????? ?????????????? ?????????????????????? ??????????."
                                },
                            })}
                        />
                        {errors?.org_email && <CustomError>{errors?.org_email?.message || "Errors"}</CustomError>}
                    </Box>
                    <Box sx={{ mb: 2, width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
                        <MyText>
                            ???????????????????? ??????????????????????*
                        </MyText>
                        <MyTextField
                            label=" "
                            variant="standard"
                            {...register("org_employees", {
                                required: "???????? ?????????????????????? ?? ????????????????????.",
                                pattern: {
                                    value: /^[0-9]+$/,
                                    message: "?????????????????? ???????????????? ???? ?????????????????????????? ??????????????."
                                },
                            })}
                        />
                        {errors?.org_employees && <CustomError>{errors?.org_employees?.message || "Errors"}</CustomError>}
                    </Box>
                    <CustomButton type="submit" disabled={!isValid}>??????????????????</CustomButton>
                </Box>
            </Box> 
        </CustomBox>
    )
}

export default ApplicationForm;