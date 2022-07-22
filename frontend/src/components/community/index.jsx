import { Box } from "@mui/material";
import { styled } from '@mui/system';
import {Title, Text } from '../../global-styles'


const CustomBox = styled(Box)(({ theme }) => ({
    padding: "100px 0",
    background: "#F5F5F5",
    [theme.breakpoints.down("sm")]:{
        padding: "30px 0",
    }
}));
const Img = styled('img')(({ theme }) => ({
    width: "20%",
    [theme.breakpoints.down("sm")]:{
        width: "35%",
    },
    [theme.breakpoints.down("md")]:{
        width: "25%",
    },
    [theme.breakpoints.down("992")]:{
        width: "40%",
    },
    
}));
const Image = styled('img')(({ theme }) => ({
    width: "100%",
}));
const MyText = styled(Text)(({ theme }) => ({
    [theme.breakpoints.down("lg")]:{
        marginBottom: "40px",
        fontSize: 22,
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
        marginBottom: "20px",
        fontSize: 34,
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
const MyBox = styled('Box')(({ theme }) => ({
    width: "100%",
    alignSelf: "center",
    [theme.breakpoints.down("lg")]:{
        width: "150%",
    },
    [theme.breakpoints.down("md")]:{
        width: "150%",
    },
    [theme.breakpoints.down("sm")]:{
        width: "200%",
    },
    [theme.breakpoints.down("992")]:{
        width: "350%",
    },
    [theme.breakpoints.down("900")]:{
        width: "150%",
    },
}));
function Community(){
    return(
        <CustomBox>
            <Box className="container" sx = {{ display: "flex" }}>
                <MyBox>
                    <Image src="/images/community_img.png"/>
                </MyBox>
                <Box sx = {{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <MyTitle sx = {{marginBottom: "20px"}}>
                        Экспертное сообщество врaчей и фармакологов РС(Я)
                    </MyTitle>
                    <MyText sx = {{marginBottom: "60px"}}>
                        Сервис способствует  повышению эффективности лечения, благодаря персонализированному подходу  с использованием искусственного интеллекта (ИИ), нейронных сетей и Big Data (больших данных).
                    </MyText>
                    <Img src="/images/mondino_icon.svg"/>
                </Box>
            </Box>
        </CustomBox>
    )
}

export default Community;