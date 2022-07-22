import { React } from "react";

import { Box } from "@mui/material";
import { styled } from "@mui/system";

import { SubTitle, Text,  CustomImage } from '../../global-styles';

const CustomBox = styled(Box)(({ theme }) => ({
    padding: "40px 0",
    background: "#ffffff",
}))
const ItemBox = styled(Box)(({ theme }) => ({
    margin: "85px 0",
    maxWidth: "450px",
    width: "100%",
    display: "flex",
    [theme.breakpoints.down(1200)]:{
    },
    [theme.breakpoints.down(1024)]:{
        margin: "40px 0",
    },
    [theme.breakpoints.down(767)]:{
        margin: "30px 0",
    },
    [theme.breakpoints.down(576)]:{
        margin: "20px 0",
    },
    [theme.breakpoints.down(400)]:{
    },
}))

function Advantage(){
    const  data = [
        {
            img: "/images/advantage_icon_1.svg",
            title: "Поток пациентов",
            desc: "Больше пациентов благодаря нашему удобному сервису",
        },
        {
            img: "/images/advantage_icon_2.svg",
            title: "Инструменты",
            desc: "Все инструменты нужные для врачей в одном месте",
        },
        {
            img: "/images/advantage_icon_3.svg",
            title: "Качество",
            desc: "Увеличивется качество обслуживания",
        },
        {
            img: "/images/advantage_icon_4.svg",
            title: "Онлайн",
            desc: "Взаимодействие с пациентами онлайн",
        },
        {
            img: "/images/advantage_icon_5.svg",
            title: "Эффективность",
            desc: "У персонала увеличивается работоспособность",
        },
        {
            img: "/images/advantage_icon_6.svg",
            title: "Анализ",
            desc: "Аналитическая панель по всем пациентам для врача",
        },
    ];

    return(
        <CustomBox>
            <Box className="container">
                <Box 
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-evenly",
                    }}
                >
                    {data.map(( item, index ) => (
                        <ItemBox 
                            key={index}
                        >
                            <CustomImage sx={{ mr: 3 }} src={item.img} alt="icon"/>
                            <Box>
                                <SubTitle sx={{ mb: 2 }}>
                                    {item.title}
                                </SubTitle>
                                <Text sx={{ color: "#000000" }}>
                                    {item.desc}
                                </Text>
                            </Box>
                        </ItemBox>
                    ))}
                </Box>
            </Box>
        </CustomBox>
    )
}

export default Advantage;