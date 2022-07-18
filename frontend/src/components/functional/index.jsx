import React, { useState } from 'react';

import { Box, Typography,} from "@mui/material";
import { styled } from '@mui/system';

const CustomBox = styled(Box)(({ theme }) => ({
    padding: "100px 0",
    [theme.breakpoints.down("sm")]:{
        padding: "30px 0",
    }
}));
const MyText = styled(Typography)(({ theme }) => ({
    fontWeight: 300,
    fontSize: 20,
    lineHeight: "23px",
    color: "#000",
    // marginBottom: 16,
    // marginLeft: 36,
    [theme.breakpoints.down("sm")]:{
        // marginBottom: 10,
        fontSize: 14,
        lineHeight: "16px",
    }
}));
const MyTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    fontSize: 20,
    lineHeight: "32px",
    color: "#000",
    // marginBottom: 16,
    // marginLeft: 36,
    [theme.breakpoints.down("sm")]:{
        // marginBottom: 10,
        fontSize: 26,
        lineHeight: "25px",
    }
}));

function Functional () {
    return(
        <CustomBox>
            <Box className="container" sx ={{ display: "flex", justifyContent: "space-evenly", flexDirection: "column"}}>
                <Box>
                    <Box>
                        <img
                            src="mondino_title.svg"
                            style={{
                                maxWidth: 13.4,
                                width: "100%",
                            }}
                        />
                        <MyTitle>Менеджмент</MyTitle>
                        <MyText>Менеджмент прописанных вам лекарств</MyText>
                    </Box>
                    
                </Box>
                <Box>
                    <Box>  
                        <img
                            src=""
                            style={{
                                maxWidth: 13.4,
                                width: "100%",
                            }}
                        />
                        <MyTitle>Напоминание</MyTitle>
                        <MyText>Напоминания о приеме и пропусках лекарств</MyText>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <img
                            src=""
                            style={{
                                maxWidth: 13.4,
                                width: "100%",
                            }}
                        />
                        <MyTitle>Акции</MyTitle>
                        <MyText>Поиск выгодных акций скидок на платные медицинские услуги вашего города</MyText>
                    </Box> 
                    
                </Box>
                <Box>
                    <Box>
                        <img
                            src=""
                            style={{
                                maxWidth: 13.4,
                                width: "100%",
                            }}
                        />
                        <MyTitle>Чат</MyTitle>
                        <MyText>Чат с врачем для поддержки связи</MyText>
                    </Box> 
                    
                </Box>
            </Box>
        </CustomBox>
    )
}

export default Functional;