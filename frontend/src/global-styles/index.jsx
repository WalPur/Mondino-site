import { Typography } from '@mui/material';
import { styled, Typography } from '@mui/system';

const Title = styled(Typography)(({ theme }) => ({
    fontFamily: 'Roboto',
    fontSize: "48px",
    lineHeight: "108%",
    fontWeight: 700,
    color: "#1B1642",
    [theme.breakpoints.down("lg")]:{
        fontSize: 16,
        lineHeight: "25px",
    },
    [theme.breakpoints.down("md")]:{
        fontSize: 16,
        lineHeight: "30px",
    },
    [theme.breakpoints.down("sm")]:{
        fontSize: 9,
        lineHeight: "25px",
    },
}));
const SubTitle = styled(Typography)(({ theme }) => ({
    fontFamily: 'Roboto',
    fontSize: "32px",
    lineHeight: "38px",
    fontWeight: 700,
    color: "#000000",
    [theme.breakpoints.down("lg")]:{
        fontSize: 16,
        lineHeight: "25px",
    },
    [theme.breakpoints.down("md")]:{
        fontSize: 16,
        lineHeight: "30px",
    },
    [theme.breakpoints.down("sm")]:{
        fontSize: 9,
        lineHeight: "25px",
    },
}));
const Text = styled(Typography)(({ theme }) => ({
    fontFamily: 'Roboto',
    fontSize: "20px",
    lineHeight: "160%",
    fontWeight: 300,
    color: "#575A7B",
    [theme.breakpoints.down("lg")]:{
        fontSize: 16,
        lineHeight: "16px",
    },
    [theme.breakpoints.down("md")]:{
        fontSize: 16,
        lineHeight: "18px",
    },
    [theme.breakpoints.down("sm")]:{
        fontSize: 8.5,
        lineHeight: "16px",
    },
}));
const MyText = styled(Typography)(({ theme }) => ({
    fontFamily: 'Roboto',
    fontSize: "20px",
    lineHeight: "24px",
    fontWeight: 300,
    color: "#000000",
    [theme.breakpoints.down("lg")]:{
        fontSize: 16,
        lineHeight: "16px",
    },
    [theme.breakpoints.down("md")]:{
        fontSize: 16,
        lineHeight: "18px",
    },
    [theme.breakpoints.down("sm")]:{
        fontSize: 8.5,
        lineHeight: "16px",
    },
}));

