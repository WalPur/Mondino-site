import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { Typography, Grid, } from "@mui/material";

function Topic () {
    const topic = [
        {
            label: ["Регистрация", "Заполнение профиля"],
        },
        {
            label:  ["Добавить курс", "Изменить курс", "Удалить курс приема лекарств"],
        },
        {
            label:  ["Чат с врачами"]
        },
        {
            label: ["Присоедениться к клинике", "Покинуть клинику"]
        },
    ]
    const navigate=useNavigate();
    const params = useParams();
    const prodId = params.id;
    return(
        <Grid container gap={2} 
            sx={{
                p: 10,
                justifyContent: 'center'
            }}>
               {topic[prodId].label.map((item, index) => (
                <Grid item 
                    key={index} 
                    sx={{
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 250,
                        height: 50,
                        borderRadius: 5,
                        backgroundColor: "aquamarine",
                        opacity: [0.9],
                        cursor: 'pointer',
                        '&:hover': {
                        opacity: [1],
                    }}}
                    onClick={() => navigate('/faq')}
                >
                    <Typography sx={{
                        color: 'black',
                        fontSize: 16,
                    }}  variant="body2">{item}</Typography>
                </Grid>
               ))}
                
        </Grid>
        
    );
}

export default Topic;