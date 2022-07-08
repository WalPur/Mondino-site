import React, { useState } from 'react';

import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

function Faq() {
    const texts = [
        {
            buttonText: "Почему существует этот проект?",
            texts: [
                "DDI Pocket Medic Online Сервис вырос из конкретной цели: сделать удобную единую платформу, где врачи и обычные пользователи проверяли взаимодействие выписанных лекарственных препаратов при одновременном приеме.",
                "Команда из «Мондино Технолоджес» обучила нейронную сеть (на базе TensorFlow 2.0) на основе данных, предоставленных фармакологами Медцентра.",
                "Важно понимать, что сервис не заменяет врача, она разработана для того, чтобы понизить риск назначения лекарств с опасным взаимодействием.",
                "Мы рады, что можем предоставить продукт которая служит для повышения качества жизни обычных граждан.",
            ],
        },
        {
            buttonText: "Что означает «DDI»?",
            texts: [
                "Интернатура дерматовенерология, хирургия. Ординатура на кафедре пластической хирургии ПМГМУ им. И.М. Сеченова",
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
                <Accordion key={index}>
                    <AccordionSummary>
                        <Typography sx={{ display: "inline-block", cursor: "pointer" }}>{item.buttonText}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {item.texts.map((itemText, index) => (
                            <Typography key={index}>
                                {itemText}
                            </Typography>
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    )
}

export default Faq;