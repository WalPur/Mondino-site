import { Box, Typography } from "@mui/material";
import { styled } from '@mui/system';


const CustomBox = styled(Box)(({ theme }) => ({
    padding: "100px 0",
    background: "#F5F5F5",
    [theme.breakpoints.down("sm")]:{
        padding: "30px 0",
    }
}));
const MyText = styled(Typography)(({ theme }) => ({
    fontWeight: 300,
    fontSize: 20,
    lineHeight: "160%",
    color: "#575A7B",
    marginBottom: 60,
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
const MyTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    fontSize: 48,
    lineHeight: "132%",
    color: "#1B1642",
    marginBottom: 20,
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
const Img = styled('img')(({ theme }) => ({
    
    [theme.breakpoints.down("lg")]:{
        maxWidth: "50%",
        maxHeight: "50%"
    }
}));
const MyImage = styled(Img)(({ theme }) => ({

}));
function Economize(){
    return(
        <CustomBox>
            <Box className="container" sx = {{display: "flex", flexDirection: "row"}}>
                <Box>
                    <Img src="/images/economize_img.svg"/>
                </Box>
                <Box sx = {{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <Box>
                        <MyTitle>
                            Экономьте деньги, не выходя из дома и без долгих поисков.
                        </MyTitle>
                        <MyText>
                            Все выгодные предложения на медицинские услуги в твоем телефоне. Все виды медицинских услуг Вашего города собраны в одном приложении. Выгодно, удобно и быстро.
                        </MyText>
                    </Box>
                    <Box>
                        <MyImage src="/images/mondino_icon_dark.svg"/>
                    </Box>
                </Box>
            </Box>
        </CustomBox>
    )
}

export default Economize;