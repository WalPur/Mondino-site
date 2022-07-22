import { Box, Typography, } from "@mui/material";
import { styled } from '@mui/system';

const CustomBox = styled(Box)(({ theme }) => ({
    padding: "100px 0",
    background: "#FFFFFF",
    [theme.breakpoints.down("sm")]:{
        padding: "30px 0",
    }
}));
const MyText = styled(Typography)(({ theme }) => ({
    fontWeight: 300,
    fontSize: 20,
    lineHeight: "23px",
    color: "#000",
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
    fontSize: 20,
    lineHeight: "32px",
    color: "#000",
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
const Image = styled('img')(({ theme }) => ({
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
const MyBox = styled('Box')(({ theme }) => ({
    display: "flex" , 
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    maxWidth: 245,
    width: "100%",
    [theme.breakpoints.down("lg")]:{
        width: "205px",
        height: "245px"
    },
    [theme.breakpoints.down("md")]:{
        width: "205px",
        height: "auto"
    },
    [theme.breakpoints.down("sm")]:{
        width: "105px",
        height: "auto"
    },
    [theme.breakpoints.down("xs")]:{
        width: "73px",
        height: "auto"
    },
}));
function Functional () {
    const data = [
        {
            img: "/images/icon_1.svg",
            title: "Менеджмент",
            desc: "Менеджмент прописанных вам лекарств",
        },
        {
            img: "/images/icon_2.svg",
            title: "Напоминание",
            desc: "Напоминания о приеме и пропусках лекарств",
        },
        {
            img: "/images/icon_3.svg",
            title: "Акции",
            desc: "Поиск выгодных акций скидок на платные медицинские услуги вашего города",
        },
        {
            img: "/images/icon_4.svg",
            title: "Чат",
            desc: "Чат с врачем для поддержки связи",
        },
    ]
    return(
        <CustomBox>
            <Box className="container">
                <Box sx ={{ display: "flex", justifyContent: "space-evenly",  }}>
                    {data.map(( item, index ) => (
                        <MyBox 
                            key = {index} 
                        >
                            <Image
                                src={item.img}
                            />
                            <MyTitle>{item.title}</MyTitle>
                            <MyText>{item.desc}</MyText>
                        </MyBox>
                    ))}
                </Box>
            </Box>
        </CustomBox>
    )
}

export default Functional;