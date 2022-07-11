import React, { useState } from 'react';

import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { styled } from '@mui/system';

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomAccordion = styled(Accordion)(({ theme }) => ({
    boxShadow: 'none',
    '&:before': {display: "none"},
}));
const TextTitle = styled(Typography)(({ theme }) => ({
    fontSize: '16px',
    lineHeight: '19px',
    align: 'left',
    verticalAlign: 'top',
    [theme.breakpoints.down("lg")]:{
        fontSize: "14px",
    },
    [theme.breakpoints.down("md")]:{
        fontSize: "14px",
        // lineHeight: "15px",
    },
    [theme.breakpoints.down("sm")]:{
        fontSize: "14px",
        // lineHeight: "15px",
    },
}));
const TextBody = styled(Typography)(({ theme }) => ({
    whiteSpace: "pre-wrap",
    fontSize: '14px',
    lineHeight: '16px',
    align: 'left',
    marginBottom: 16,
    '&:last-child':{
        marginBottom: 0,
    },
    verticalAlign: 'top',
    [theme.breakpoints.down("lg")]:{
        fontSize: "12px",
        marginBottom: "14px",
    },
    [theme.breakpoints.down("md")]:{
        fontSize: "14px",
        // lineHeight: "15px",
    },
    [theme.breakpoints.down("sm")]:{
        fontSize: "14px",
        // lineHeight: "15px",
    },
}));
function Faq() {
    const texts = [
        {
            buttonText: "Почему существует этот проект?",
            texts: [
                "DDI Pocket Medic Online Сервис вырос из конкретной цели: сделать удобную единую платформу, где врачи и обычные пользователи проверяли взаимодействие выписанных лекарственных препаратов при одновременном приеме.",
                "   Команда из «Мондино Технолоджес» обучила нейронную сеть (на базе TensorFlow 2.0) на основе данных, предоставленных фармакологами Медцентра.",
                "   Важно понимать, что сервис не заменяет врача, она разработана для того, чтобы понизить риск назначения лекарств с опасным взаимодействием.",
                "   Мы рады, что можем предоставить продукт которая служит для повышения качества жизни обычных граждан.",
            ],
        },
        {
            buttonText: "Что означает «DDI»?",
            texts: [
                "Интернатура дерматовенерология, хирургия. Ординатура на кафедре пластической хирургии ПМГМУ им. И.М. Сеченова",
            ],
        },
        {
            buttonText: "Как проверить взаимодействие лекарственных препаратов?",
            texts: [
                "Интернатура дерматовенерология , хирургия Ординатура на кафедре пластической хирургии ПМГМУ им. И.М. Сеченова",
            ],
        },
        {
            buttonText: "Кто за этим стоит?",
            texts: [
                "Интернатура дерматовенерология , хирургия Ординатура на кафедре пластической хирургии ПМГМУ им. И.М. Сеченова",
            ],
        },
        
    ]
    // const handleFaqText = (id) => {
    //     texts[id].close ? texts[id].close = false : texts[id].close = true
    //     console.log(texts)
    // }
    return(
        <Box>
            {texts.map((item, index) => (
                <CustomAccordion key={index} >
                    <AccordionSummary 
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <TextTitle sx={{ pl: 0.5, cursor: "pointer" }}>{item.buttonText}</TextTitle>
                    </AccordionSummary>
                    <AccordionDetails sx={{ width: '80%' }}>
                        {item.texts.map((itemText, index) => (
                            <TextBody key={index}>
                                {itemText}
                            </TextBody>
                        ))}
                    </AccordionDetails>
                </CustomAccordion>
            ))}
        </Box>
    )
}

export default Faq;