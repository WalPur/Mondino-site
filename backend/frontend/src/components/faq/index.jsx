import React, { useState } from 'react';

import { Box, Typography } from "@mui/material";

function Faq() {
    const [texts, setTexts] = useState([
        {
            id: 0,
            buttonText: "Почему существует этот проект?",
            texts: [
                "DDI Pocket Medic Online Сервис вырос из конкретной цели: сделать удобную единую платформу, где врачи и обычные пользователи проверяли взаимодействие выписанных лекарственных препаратов при одновременном приеме.",
                "Команда из «Мондино Технолоджес» обучила нейронную сеть (на базе TensorFlow 2.0) на основе данных, предоставленных фармакологами Медцентра.",
                "Важно понимать, что сервис не заменяет врача, она разработана для того, чтобы понизить риск назначения лекарств с опасным взаимодействием.",
                "Мы рады, что можем предоставить продукт которая служит для повышения качества жизни обычных граждан.",
            ],
            close: true,
        },
        {
            id: 1,
            buttonText: "Что означает «DDI»?",
            texts: [
                "Интернатура дерматовенерология, хирургия. Ординатура на кафедре пластической хирургии ПМГМУ им. И.М. Сеченова",
            ],
            close: true,
        },
    ])
    const handleFaqText = (id, newCloseValue) => {
        let newTexts = [...texts]
        newTexts[id].close = newCloseValue
        setTexts(newTexts)
    }
    return(
        <Box>
            {texts.map((item, index) => (
                <Box key={index}>
                    <Typography onClick={handleFaqText(item.id, item.close ? false : true)} sx={{ cursor: "pointer" }}>{item.buttonText}</Typography>
                    {item.close ? 
                        <Box sx={{ display: "none" }}></Box>
                        :
                        <Box>
                            {item.texts.map((itemText, index) => (
                                <Typography key={index}>
                                    {itemText}
                                </Typography>
                            ))}
                        </Box>
                    }
                </Box>
            ))}
        </Box>
    )
}

export default Faq;