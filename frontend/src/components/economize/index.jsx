import { Box, Typography } from "@mui/material";
import { styled } from '@mui/system';
import {Title, Text, CustomImage } from '../../global-styles'


const CustomBox = styled(Box)(({ theme }) => ({
    padding: "100px 0",
    background: "#F5F5F5",
    [theme.breakpoints.down("sm")]:{
        padding: "30px 0",
    }
}));
const Img = styled('img')(({ theme }) => ({
    width: "20%",
}));
const Image = styled('img')(({ theme }) => ({
    width: "100%",
}));
const MyText = styled(Text)(({ theme }) => ({
    [theme.breakpoints.down("lg")]:{
        marginBottom: "40px"
    },
    [theme.breakpoints.down("md")]:{
        marginBottom: "35px",
        fontSize: 16,
    },
    [theme.breakpoints.down("sm")]:{
        marginBottom: "15px",
        fontSize: 10,
    },
}));
const MyTitle = styled(Title)(({ theme }) => ({
    [theme.breakpoints.down("lg")]:{
        marginBottom: "20px"
    },
    [theme.breakpoints.down("md")]:{
        marginBottom: "15px",
        fontSize: 24,
    },
    [theme.breakpoints.down("sm")]:{
        marginBottom: "10px",
        fontSize: 14,

    },
}));
function Economize(){
    return(
        <CustomBox>
            <Box className="container" sx = {{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ width: "30%" }}>
                    <Image src="/images/economize_img.svg"/>
                </Box>
                <Box sx = {{display: "flex", flexDirection: "column", justifyContent: "center", width: "50%"}}>
                    <MyTitle sx = {{marginBottom: "20px"}}>
                        Экономьте деньги, не выходя из дома и без долгих поисков.
                    </MyTitle>
                    <MyText sx = {{marginBottom: "60px"}}>
                        Все выгодные предложения на медицинские услуги в твоем телефоне. Все виды медицинских услуг Вашего города собраны в одном приложении. Выгодно, удобно и быстро.
                    </MyText>
                    <Img src="/images/mondino_icon_dark.svg"/>
                </Box>
            </Box>
        </CustomBox>
    )
}

export default Economize;