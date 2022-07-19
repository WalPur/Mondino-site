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
                        "авфыавыа",
                        "аываыв",
                        "оррпрпрпрпрпрпрпрпрпрпрп"
                    ],
                    type: "text",
                },
                {
                    img: "https://lk.ondoc.me/uploads/files/2021/47a4d1ba/8b8402c9/866e86f6f88bf872_79d2c8ecce.jpg",
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
        {
            obj: [
                {
                    title: "Заполнение профиля",
                    texts: [
                        "авфыавыа",
                        "аываыв",
                        "оррпрпрпрпрпрпрпрпрпрпрп"
                    ],
                    type: "text",
                },
                {
                    img: "../images/advantage_icon_1.svg",
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
            <Box>
                {data[pageId].obj.map(( item, index ) => (
                    item.type === "text" ?
                    <Box key={index}>
                        <Typography>{item.title}</Typography>
                        {item.texts.map(( texts, index ) => (
                            <Typography key={index}>{texts}</Typography>
                        ))}
                    </Box>
                    :
                    <Box key={index}>
                        <img src={item.img}/>
                        {item.texts.map(( texts, index ) => (
                            <Typography key={index}>{texts}</Typography>
                        ))}
                    </Box>
                ))}
            </Box>
        </div>
    );
}

export default Registration;