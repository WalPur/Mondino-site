import { Box, Typography } from "@mui/material";
import { styled } from '@mui/system';

const CustomBox = styled(Box)(({ theme }) => ({
    padding: "100px 0",
    background: "#1B1642",
    [theme.breakpoints.down("sm")]:{
        padding: "30px 0",
    }
}));
const Text = styled(Typography)(({ theme }) => ({
    fontFamily: 'Roboto',
    fontSize: "20px",
    lineHeight: "160%",
    fontWeight: 300,
    color: "#EA5775",
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
const Title = styled(Typography)(({ theme }) => ({
    fontFamily: 'Roboto',
    fontSize: "48px",
    lineHeight: "108%",
    fontWeight: 700,
    color: "#FFFFFF",
    width: "645px",
    textAlign: "center",
    [theme.breakpoints.down("lg")]:{
        fontSize: 40,
        lineHeight: "25px",
        width: "645px",
    },
    [theme.breakpoints.down("md")]:{
        fontSize: 32,
        lineHeight: "30px",
        width: "545px",
    },
    [theme.breakpoints.down("sm")]:{
        fontSize: 16,
        lineHeight: "25px",
        width: "245px",
    },
}));
const Myimg = styled('img')(({ theme }) => ({
    [theme.breakpoints.down("lg")]:{
        width: "auto"
    },
    [theme.breakpoints.down("md")]:{
        maxWidth: "50%"
    },
    [theme.breakpoints.down("sm")]:{
        width: "auto"
    },
}));
function Health(){
    return(
        <CustomBox>
            <Box className="container">
                <Box sx = {{display: "flex", alignItems: "center", flexDirection: "column"}}>
                    <Text sx = {{mb: 1.4}}>Доступно в App Store и Google Play</Text>
                    <Box sx = {{mb: 7.5}}>
                        <Title>Сделайте свою работу проще и эффективнее</Title>
                    </Box>
                </Box>
                <Box>
                    <Box sx = {{display: "flex", justifyContent: "space-evenly", mb: 6.5}}>
                        <img style={{ width: "33%" }} src="/images/health_1_2.png"/>
                        <img style={{ width: "33%" }} src="/images/health_2_2.png"/>
                        <img style={{ width: "33%" }} src="/images/health_3_2.png"/>
                    </Box>
                    <Box sx = {{ display: "flex", flexDirection: "row", width: "auto"}}>
                        <Box sx = {{mr: 2.7}}>
                            <Myimg src="/images/appStore.svg"/>
                        </Box>
                        <Box>
                            <Myimg src="/images/googlePlay.svg"/>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </CustomBox>
    )
}

export default Health;