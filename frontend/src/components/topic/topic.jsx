import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { Typography, Grid, } from "@mui/material";

function Topic () {
    const topic = [
        {
            label: [{label: "Регистрация", id: 0}, {label: "Заполнение профиля", id: 1}],
        },
        {
            label:  [{label: "Добавить курс", id: 2}, {label: "Изменить курс", id: 3}, {label: "Удалить курс приема лекарств", id: 4}],
        },
        {
            label:  [{label: "Чат с врачами", id: 5}]
        },
        {
            label: [{label: "Присоедениться к клинике", id: 6}, {label: "Покинуть клинику", id: 7}]
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
                    onClick={() => navigate("/faq/page/" + item.id)}
                >
                    <Typography sx={{
                        color: 'black',
                        fontSize: 16,
                    }}  variant="body2">{item.label}</Typography>
                </Grid>
               ))}
                
        </Grid>
        
    );
}

export default Topic;