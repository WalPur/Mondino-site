import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { Typography, Grid, } from "@mui/material";

function Faq() {
    
    const text = [
        {
            id: 0,
            label: "Личный кабинет",
            description: "Узнайте как создать личный кабинет и тд",
            color: "green",
            type: "topic",
        },
        {
            id: 1,
            label: "Таблетница",
            description: "Узнайте как создать, редактировать, удалять таблетницу",
            color: "blue",
            type: "topic",
        },
        {
            id: 2,
            label: "Врачи онлайн",
            description: "Узнайте как начать чат с врачом",   
            color: "yellow",
            type: "topic",
        },
        {
            id: 3,
            label: "Клиники",
            description: "Узнайте как прикрепить аккаунт к клинике",           
            color: "pink",
            type: "topic",
        },
        {
            id: 4,
            label: "Взаимодействия лекарственных средств",
            description: "",
            color: "red",
            type: "page",
        }
    ];
    const navigate=useNavigate();
    return(
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Helmet>
                <title>Mondino Tracker - Поддержка пользователей</title>
            </Helmet>
            <Grid container lg={8}
                gap={2} 
                sx={{
                    p: 10,
                    justifyContent: 'center'
                }}>
            {text.map((item, index) => (
                <Grid item
                    key={index} 
                    sx={{
                        width: 250,
                        height: 250,
                        borderRadius: 5,
                        backgroundColor: item.color,
                        opacity: [0.9],
                        cursor: 'pointer',
                        '&:hover': {
                        opacity: [1],
                    }}}
                    onClick={() => item.type === "topic" ? navigate('/faq/topic/'+item.id) : navigate('/')}>
                    <Typography sx={{
                        color: 'black',
                        fontSize: 22,
                    }} p={2} variant="subtitle1">{item.label}</Typography>                                 
                    <Typography sx={{
                        color: 'black',
                        fontSize: 16
                    }}  p={2} variant="body2">{item.description}</Typography>                    
                </Grid>
            ))}
            </Grid>
        </div>
    );
}

export default Faq;