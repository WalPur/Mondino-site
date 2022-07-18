import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { Typography, Box, } from "@mui/material";

function Faq() {
    
    const text = [
        {
            id: 0,
            label: "Личный кабинет",
            description: "Узнайте как создать личный кабинет и тд",
            type: "topic",
        },
        {
            id: 1,
            label: "Таблетница",
            description: "Узнайте как создать, редактировать, удалять таблетницу",
            type: "topic",
        },
        {
            id: 2,
            label: "Врачи онлайн",
            description: "Узнайте как начать чат с врачом",   
            type: "topic",
        },
        {
            id: 3,
            label: "Клиники",
            description: "Узнайте как прикрепить аккаунт к клинике",  
            type: "topic",
        },
        {
            id: 4,
            label: "Взаимодействия лекарственных средств",
            description: "Узнайте, насколько лекарственные препараты подходят друг к другу",
            type: "page",
        }
    ];
    const navigate=useNavigate();
    return(
        <div className="container" style={{ display: "flex", justifyContent: "center" }}>
            <Helmet>
                <title>Mondino Tracker - Поддержка пользователей</title>
            </Helmet>
            <Box 
                gap={5} 
                sx={{
                    mt: '100px',
                    p: 1,
                    display: 'flex',
                    flexWrap: 'wrap',
                    
                }}>
            {text.map((item, index) => (
                <Box item 
                    key={index} 
                    sx={{
                        maxWidth: 353,
                        height: 287,
                        width: "100%",
                        borderRadius: '20px',
                        backgroundColor: 'none',
                        border: '4px solid #9E9DB3',
                        cursor: 'pointer',
                        '&:hover': {
                        backgroundColor: '#9F97DE'
                    }}}
                    onClick={() => item.type === "topic" ? navigate('/faq/topic/'+item.id) : navigate('/faq/9')}>
                    <Typography sx={{
                        color: 'black',
                        mt:'26px',
                        ml: '30px',
                        fontWeight: 700,
                        fontSize: '24px',
                        lineHeight: '28px' 
                        }}>{item.label}</Typography>                                 
                    <Typography sx={{
                        mt: "30px",
                        mr: "176px",
                        ml: "30px",
                        color: 'black',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '19px'
                    }}>{item.description}</Typography>                    
                </Box>
            ))}
            </Box>
        </div>
    );
}

export default Faq;