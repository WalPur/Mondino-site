
import { Typography } from '@mui/material';
import { styled, typography } from '@mui/system';

const Title = styled (Typography)(({ theme }) => ({
    fontFamily: 'Roboto',
    fontSize: "48px",
    lineHeight: "108%",
    fontWeight: 700,
    color: "#1B1642",
    [theme.breakpoints.down("lg")]:{
        fontSize: 32,
        lineHeight: "25px",
    },
    [theme.breakpoints.down("md")]:{
        fontSize: 32,
        lineHeight: "30px",
    },
    [theme.breakpoints.down("sm")]:{
        fontSize: 24,
        lineHeight: "25px",
    },
}));
const SubTitle = styled (Typography)(({ theme }) => ({
    fontFamily: 'Roboto',
    fontSize: "32px",
    lineHeight: "38px",
    fontWeight: 700,
    color: "#000000",
    [theme.breakpoints.down("lg")]:{
        fontSize: 24,
        lineHeight: "25px",
    },
    [theme.breakpoints.down("md")]:{
        fontSize: 24,
        lineHeight: "30px",
    },
    [theme.breakpoints.down("sm")]:{
        fontSize: 18,
        lineHeight: "25px",
    },
}));
const Text = styled (Typography)(({ theme }) => ({
    fontFamily: 'Roboto',
    fontSize: "20px",
    lineHeight: "160%",
    fontWeight: 300,
    color: "#575A7B",
    // [theme.breakpoints.down("lg")]:{
    //     lineHeight: "16px",
    // },
    [theme.breakpoints.down("md")]:{
        fontSize: 16,
        lineHeight: "18px",
    },
    [theme.breakpoints.down("sm")]:{
        fontSize: 14,
        lineHeight: "16px",
    },
}));
const MyText = styled (Typography)(({ theme }) => ({
    fontFamily: 'Roboto',
    fontSize: "20px",
    lineHeight: "24px",
    fontWeight: 300,
    color: "#000000",
    // [theme.breakpoints.down("lg")]:{
    //     lineHeight: "16px",
    // },
    [theme.breakpoints.down("md")]:{
        fontSize: 16,
        lineHeight: "18px",
    },
    [theme.breakpoints.down("sm")]:{
        fontSize: 14,
        lineHeight: "16px",
    },
}));
const CustomImage = styled('img')(({ theme }) => ({
    width: "134px",
    height: "134px",
    marginBottom: 24,
    boxShadow: "0px 4px 41px rgba(0, 0, 0, 0.25)",
    borderRadius: "50%",
    [theme.breakpoints.down("lg")]:{
        width: "74px",
        height: "74px",
    },
    [theme.breakpoints.down("md")]:{
        width: "64px",
        height: "64px",
    },
    [theme.breakpoints.down("sm")]:{
        width: "54px",
        height: "54px", 
        marginBottom: 14,
    },
}));

export {
    Title,
    SubTitle,
    Text,
    MyText,
    CustomImage
}