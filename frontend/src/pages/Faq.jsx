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
            img: "/images/card_image_1.png"
        },
        {
            id: 1,
            label: "Таблетница",
            description: "Узнайте как создать, редактировать, удалять таблетницу",
            type: "topic",
            img: "/images/card_image_1.png"
        },
        {
            id: 2,
            label: "Врачи онлайн",
            description: "Узнайте как начать чат с врачом",   
            type: "topic",
            img: "/images/card_image_1.png"
        },
        {
            id: 3,
            label: "Клиники",
            description: "Узнайте как прикрепить аккаунт к клинике",  
            type: "topic",
            img: "/images/card_image_1.png"
        },
        {
            id: 4,
            label: "Взаимодействия лекарственных средств",
            description: "Узнайте, насколько лекарственные препараты подходят друг к другу",
            type: "page",
            img: "/images/card_image_1.png"
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
                    mb: '100px',
                    p: 1,
                    display: 'flex',
                    flexWrap: 'wrap',                    
                }}>
            {text.map((item, index) => (
                <Box item 
                    key={index} 
                    sx={{
                        position: "relative",
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: 353,
                        height: 287,                            
                        borderRadius: '20px',
                        width: "100%",
                        backgroundColor: 'none',
                        backgroundImage: "url(" + item.img + ")",
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '100% 100%',
                        cursor: 'pointer',
                        '&:after': {
                            position: "absolute",
                            content: '""',
                            width: "100%",
                            height: "100%",
                            borderRadius: '20px',
                            border: '4px solid #9E9CAD',
                            zIndex: -1,
                        },
                        '&:hover': {
                            backgroundColor: '#9F97DE',
                        }
                    }}
                    onClick={() => item.type === "topic" ? navigate('/faq/topic/'+item.id) : navigate('/faq/9')}>
                    <Typography sx={{
                        color: 'black',
                        mt:'26px',
                        ml: '30px',
                        mr: '30px',
                        fontWeight: 700,
                        fontSize: '23px',
                        lineHeight: '28px' 
                        }}
                    >
                        {item.label}
                    </Typography>                            
                    <Typography sx={{
                            mt: "30px",
                            width: '135px',
                            ml: "30px",
                            color: 'black',
                            fontWeight: 500,
                            fontSize: '16px',
                            lineHeight: '19px'
                        }}
                    >
                        {item.description}
                    </Typography>       
                </Box>
            ))}
            </Box>
        </div>
    );
}

export default Faq;