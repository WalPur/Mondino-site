import { React } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, ImageList } from '@mui/material';
import { Helmet } from 'react-helmet';

function Registration () {
    const data = [
        {
            obj: [
                {
                    title: "Регистрация",
                    texts: [
                        "Перейдите на сайт или скачайте мобильное приложение iOS или Android",
                        "Если вы используете web-версию кабинета для регистрации, нажмите «Создать бесплатный аккаунт» или «Регистрация»:",
                        "оррпрпрпрпрпрпрпрпрпрпрп"
                    ],
                    img: "/images/health_1_2.svg",
                },
                {
                    title: "Регистрация",
                    texts: [
                        "Перейдите на сайт или скачайте мобильное приложение iOS или Android",
                        "Если вы используете web-версию кабинета для регистрации, нажмите «Создать бесплатный аккаунт» или «Регистрация»:",
                        "оррпрпрпрпрпрпрпрпрпрпрп"
                    ],
                    img: "/images/health_1_2.svg",
                },
                {
                    title: "Регистрация",
                    texts: [
                        "Перейдите на сайт или скачайте мобильное приложение iOS или Android",
                        "Если вы используете web-версию кабинета для регистрации, нажмите «Создать бесплатный аккаунт» или «Регистрация»:",
                        "оррпрпрпрпрпрпрпрпрпрпрп"
                    ],
                    img: "/images/health_1_2.svg",
                },
            ],
        },
        {
            obj: [
                {
                    title: "Заполнение профиля",
                    texts: [
                        "авфыавыа",
                        "аываыв",
                        "оррпрпрпрпрпрпрпрпрпрпрп"
                    ],
                    img: "../images/advantage_icon_1.svg",
                },
                {
                    title: "Заполнение профиля",
                    texts: [
                        "авфыавыа",
                        "аываыв",
                        "оррпрпрпрпрпрпрпрпрпрпрп"
                    ],
                    img: "../images/advantage_icon_1.svg",
                },
                {
                    title: "Заполнение профиля",
                    texts: [
                        "авфыавыа",
                        "аываыв",
                        "оррпрпрпрпрпрпрпрпрпрпрп"
                    ],
                    img: "../images/advantage_icon_1.svg",
                },
            ],
        },
        {
            obj: [
                {
                    title: "Добавить лекарство",
                    texts: [
                        "авфыавыа",
                        "аываыв",
                        "оррпрпрпрпрпрпрпрпрпрпрп"
                    ],
                    type: "text",
                },
                {
                    img: "/images/advantage_icon_1.svg",
                    texts: [
                        "dsf",
                        "",
                        "fdhfgh",
                    ],
                    type: "img",
                },
                {
                    title: "Заголовок2",
                    texts: [
                        "авфыавыа",
                        "аываыв",
                        "оррпрпрпрпрпрпрпрпрпрпрп"
                    ],
                    type: "text",
                },
            ],
        },
    ]
    const params = useParams();
    const pageId = params.id;
    return(
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Helmet>
                <title>Mondino Tracker - Справочный центр</title>
            </Helmet>
            <Box 
                sx={{
                    width: '60%'
                }}>
                {data[pageId].obj.map(( item, index ) => (
                    <Box key={index}>
                        <Typography
                            sx={{
                                mt: '28px',
                                mb: '28px',
                                fontWeight: 700,
                                fontSize: "24px",
                                lineHeight: '28px',
                            }}
                        >
                            {item.title}
                        </Typography>
                        {item.texts.map(( texts, index ) => (
                            <Typography key={index}
                                sx={{fontWeight: 300,
                                    fontSize: 20,
                                    lineHeight: "23px",
                                    color: "#000",
                                    mb: '10px',
                                    }}>
                                {texts}
                            </Typography>
                        ))}
                         <img 
                            style={{ 
                                // maxHeight: 400,
                                margin: "0 auto",
                            }} 
                            src={item.img}
                        />
                    </Box>
                ))}
            </Box>
        </div>
    );
}

export default Registration;