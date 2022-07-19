import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Box, TextField, Typography, Container, Grid, Button, Autocomplete } from "@mui/material";
import { styled } from "@mui/system";

import axios from 'axios';

import { Faq } from '../components';

const ContentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    margin: '0 auto',
    minHeight: 700,
    flexDirection: 'column',
}));
const TitleBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
}));
const MyTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    fontSize: "96px",
    lineHeight: "112px",
    marginBottom: "10px",
    color: "#000000",
    [theme.breakpoints.down('md')]: {
        fontSize: "80px",
        marginBottom: "0px",
        lineHeight: "90px",
        },
    [theme.breakpoints.down('sm')]: {
        fontSize: "70px",
        marginBottom: "0px",
        lineHeight: "70px",
    },    
}));
const ButtonBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        marginTop: 10,
        marginBottom: 10
    },
}));
const InteractionBox = styled(Grid)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
}));
const ActivePart = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'left',
    flexDirection: 'column',
}));
const InfoBlock_Content = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    flexDirection: 'column'
}));
const InteractionsContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    width: '100%',
    minHeight: 100,
    border: '1px solid black',
    borderRadius: '10px',
    paddingTop: 10,
    flexDirection: 'column',
    overflow: 'auto',
    padding: '7px 11px',
    fontSize: '12px',
}));
const InfoBlock_Item = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
    width: '100%',
    borderTop: '1px solid black',
    [theme.breakpoints.down("sm")]: {
        flexDirection: 'column',
    },
}));
const TextAreaBox = styled(Grid)(({ theme }) => ({
    alignItems: "space-between",
    padding: "30px 35px",

    background: "#FFFFFF",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
    borderRadius: "40px",
    
    [theme.breakpoints.down('md')]: {
        marginTop: 20,
    },
    [theme.breakpoints.down('sm')]: {
        display: 'flex',
        padding: "20px 20px",
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 20,
    },
}));
const ActivePart__input = styled(Autocomplete)(({ theme }) => ({
    width: '100%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));
const ActivePart__inputBox = styled(Box)(({ theme }) => ({
    marginTop: "30px",
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: "20px",
    [theme.breakpoints.down("md")]:{
        gap: "10px"
    },
}));
const ActivePart__inputBox_item = styled(Box)(({ theme }) => ({
    height: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
    borderRadius: "119px",
    flexDirection: 'row',
    padding: "0 20px",
    width: '100%',
    [theme.breakpoints.down("lg")]:{
        height: 60,
    },
}));
const ActivePart__cancelButton = styled(Button)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: "auto",
    maxWidth: "48px!important",
    height: "48px",
    marginLeft: 10,
    borderRadius: '50%',
    '&:focus': {
        outline: "none",
    },
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
}));
const ActivePart__Button = styled(Button)(({ theme }) => ({
    textTransform: "none",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    backgroundColor: '#0E1B4F',
    borderRadius: '119px',
    color: 'white',
    width: '100%',
    fontSize: 24,
    lineHeight: "28.13px",
    '&:focus': {
    outline: "none",
    },
    '&:hover': {
        backgroundColor: '#0E1B4F',
    },
    [theme.breakpoints.down("lg")]:{
        fontSize: 20,
        height: 60,
    },
}));
const ActivePart__ButtonBox = styled(Box)(({ theme }) => ({    
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',
    flexDirection: 'column',
    marginTop: 50,
    width: '100%',
    gap: 12,
    [theme.breakpoints.down("md")]:{
        marginTop: 30,
    },
}));
const InfoBlock = styled(Box)(({ theme }) => ({
    width: '100%',
    minHeight: 300,
    marginTop: 30,
}));
const InfoBLock_label = styled(Typography)(({ theme }) => ({
    width: 100,
    marginRight: 5,
    fontWeight: 700,
    fontSize: '12px',
    lineHeight: '150%',
}));
const InfoBLock_ButtonBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: 30,
    [theme.breakpoints.down(992)]:{
        flexDirection: "column",
        gap: 10,
    },
    [theme.breakpoints.down(900)]:{
        flexDirection: "row",
        gap: 0,
    },
    [theme.breakpoints.down(400)]:{
        flexDirection: "column",
        gap: 10,
    },
}));
const InfoBLock_Button = styled(Button)(({ theme }) => ({
    textTransform: "none",
    display: 'flex',
    backgroundColor: '#0E1B4F',
    borderRadius: 53,
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',   
    padding: "16px 20px",
    height: 55,
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '23px',
    textAlign: 'center',
    [theme.breakpoints.down("lg")]:{
        padding: "16px 18px",
        fontSize: "16px",
        lineHeight: "15px",
        height: 50,
    },
    [theme.breakpoints.down("md")]:{
        fontSize: 16,
        lineHeight: "15px",
        height: 47,
    },
    [theme.breakpoints.down("sm")]:{
        fontSize: 13,
        lineHeight: "15px",
    },
    '&:focus': {
        outline: "none",
        backgroundColor: '#0E1B4F',
    },
    '&:hover': {
        backgroundColor: '#0E1B4F',
    },
    
}));
const CustomTextField = styled(TextField)(({ theme }) => ({
    width: "100%",
}));
const InteractionText = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
    fontStyle: "normal",
    mb: 0.7,
    fontSize: "24px",
    lineHeight: "28px",
    color: "#000000",
    marginBottom: "7px",
    [theme.breakpoints.down("sm")]:{
        fontSize: "16px",
    }
}));
const InteractionTextD = styled(Typography)(({ theme }) => ({
    fontWeight: 400,
    mb: 0.7,
    fontSize: "16px",
    lineHeight: "19px",
    color: "#000000",
    [theme.breakpoints.down("sm")]:{
        fontSize: "14px",
    }
}));
const CustomBox = styled(Box)(({ theme }) => ({
    padding: "60px 0",
    [theme.breakpoints.down("md")]:{
        padding: "30px 0",
    }
}));
const InfoBlock_ItemBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'center',
    marginTop: 5,
    [theme.breakpoints.down("sm")]:{
        flexDirection: 'row-reverse',
        justifyContent: 'start',
        alignItems: 'center',
    }
}))

const Interactions = () => {
    let [idCounter, setIdCounter] = useState(1)
    const [page, setPage] = useState(0)
    const [effect, setEffect] = useState([])
    const [AutoCompliteList, setAutoComplite] = useState([])

    const [inputs, setInputs] = useState([
        {
            text: 'Введите лекарство',
            value: '',
            id: 0,
            modal: false,
            filteredStates: [],
            close: false,
        },
        {
            text: 'Введите лекарство',
            value: '',
            id: 1,
            modal: false,
            filteredStates: [],
            close: false,
        },
    ])
    const handleText = id => e => {
        let input = [...inputs]
        input[id].value = e.target.value
        
        setInputs(
            input
        )
    }
    const handleAutoComplite = (id, newInputValue) => {
        let input = [...inputs]
        input[id].value = newInputValue
        setInputs(
            input
        )
        searchAutoComplite(newInputValue)
    }
    const searchAutoComplite = (inputs) => {
        console.log(inputs)
        axios
            .get(`https://ddi.medic.fun/compare/drugs_search?drug=` + inputs)
            .then(response => {
                const compares = response.data
                setAutoComplite(Object.values(compares))
            }).catch(error => console.log('autoComplite error', error))
    }
    const addInput = async (e) => {
        setIdCounter(idCounter += 1)
        let newInput = inputs.concat({
            text: 'Введите лекарство',
            value: '',
            id: idCounter,
            modal: false,
            filteredStates: [],
            close: true,
        })
        setInputs(newInput)
    }
    const handleDelete = i => {
        setIdCounter(idCounter - 1)
        let removableInput = [
            ...inputs.slice(0, i),
            ...inputs.slice(i + 1)
        ]
        setInputs(removableInput)
    }
    const compareInteractions = () => {
        let getParams = ''
        inputs.map(({ value }) => {
            getParams = getParams + `test_case_1=${value}&`
        })
        console.log(getParams)
        axios
            .get(`https://ddi.medic.fun/compare/drugs_mnn?` + getParams)
            .then(response => {
                const compares = response.data
                setEffect(compares)
            }).catch((error) => {
                console.log('error', error)
            })
    }
    const arrayInfoDrug = [
        {
            label: 'Опасные',
            value: 'Потенциально опасные межлекарственные взаимодействия: риск от совместного применения ЛС превышает пользу для пациента, поэтому следует в большинстве случаев избегать подобных комбинаций ЛС или применять ЛС в минимальных дозах.',
            color: '#EE889D'
        },
        {
            label: 'Значимые ',
            value: 'Потенциальные межлекарственные взаимодействия средней степени значимости: такие комбинации часто требуют более тщательного клинического, лабораторного и инструментального контроля за эффективностью и безопасностью',
            color: '#EFDB95'
        },
        {
            label: 'Малозначимые ',
            value: 'Взаимодействия с минимальным клиническим значением. К этому уровню относятся взаимодействия, характеризующиеся минимальным риском развития неблагоприятных побочных реакций или неэффективности лечения.',
            color: '#A2F295'
        },
        {
            label: 'Неизвестные',
            value: 'Информация о взаимодействии отсутствует.',
            color: '#C6C6C6'
        },
    ]
    return (
        <CustomBox className="wrapper" sx={{ padding: "60px 0"}}>
            <div>
                <Helmet>
                    <title>Mondino Tracker - DDI</title>
                </Helmet>
                <Container className="container">
                    <ContentBox>
                        <TitleBox>
                            <MyTitle>DDI</MyTitle>
                        </TitleBox>
                        <InteractionBox container >
                            <ActivePart item lg={5} sm={12} md={4} xl={4} xs={12}>
                            <InteractionText variant="h5">Взаимодействия лекарственных средств</InteractionText>
                            <InteractionTextD variant="body2">Международное непатентованное наименование (МНН)</InteractionTextD>
                                <ActivePart__inputBox>
                                    {inputs.map((item, index) => (
                                        <ActivePart__inputBox_item key={index}>
                                            <ActivePart__input
                                                id="free-solo-demo"
                                                freeSolo
                                                options={AutoCompliteList}
                                                onInputChange={(event, newInputValue) => handleAutoComplite(item.id, newInputValue)}
                                                renderInput={(params) => (
                                                    <CustomTextField  {...params} id="standard-basic" label="Введите лекарство" variant="standard" value={item.value} onChange={handleText(item.id)}/>
                                                )}
                                            />
                                            {item.close == false ? <Box style={{ display: "none" }}></Box> :
                                                    <img src="/images/cancel_button.png" onClick={() => { handleDelete(item.id) }} style={{marginLeft: 10, marginRight: -12, width: "auto", height: "80%", cursor: "pointer" }}/>
                                               
                                            }
                                        </ActivePart__inputBox_item>
                                    ))}
                                </ActivePart__inputBox>
                                <ActivePart__ButtonBox>
                                    <ActivePart__Button variant="contained" onClick={() => { addInput() }}>Добавить лекарство</ActivePart__Button>
                                    <ActivePart__Button style={{backgroundColor: '#11A9E5'}} variant="contained" onClick={() => { compareInteractions() }}>Посмотреть взаимодействия</ActivePart__Button>
                                </ActivePart__ButtonBox>
                            </ActivePart>
                            <TextAreaBox item lg={6} sm={12} md={7} xl={7} xs={12}>
                                <InfoBLock_ButtonBox>
                                    <InfoBLock_Button onClick={() => {setPage(0)}} style={page === 1 ? {backgroundColor: 'rgba(14, 27, 79, 0.2)', color: 'black'} : {}}>Взаимодействие</InfoBLock_Button>
                                    <InfoBLock_Button onClick={() => {setPage(1)}} style={page === 0 ? {backgroundColor: 'rgba(14, 27, 79, 0.2)', color: 'black'} : {}}>Вопросы и ответы</InfoBLock_Button>
                                </InfoBLock_ButtonBox>
                                {page === 0 ? 
                                    <Box>
                                        <InteractionsContent sx={{gap: 1}}>
                                            {effect.map((item, index) => (
                                                console.log(item.drug_1, " ", item.drug_2),
                                                <div key={index} >
                                                    <span style={{ fontWeight: 'bold' }}>{item.drug_1}</span> и <span style={{ fontWeight: 'bold' }}>{item.drug_2}</span> взаимодействуют: <span style={{ backgroundColor: `${item.effect !== 'not effect' ? item.color === 'red' ? '#EE889D' : item.color === 'yellow' ? '#EFDB95' : item.color === 'green' ? '#A2F295' : 'grey' : 'grey'}`, width: 20, height: 20, borderRadius: 45, margin: 5, border: '1px solid black', color: `${item.effect !== 'not effect' ? item.color === 'red' ? '#EE889D' : item.color === 'yellow' ? '#EFDB95' : item.color === 'green' ? '#A2F295' : 'grey' : 'grey'}` }}>....</span> {item.effect !== 'not effect' ? Object.values(item.effect) : "информация о взаимодействии отсутствует."}
                                                </div>
                                            ))}
                                        </InteractionsContent>
                                        <InfoBlock>
                                            <Typography style={{ fontWeight: 700, fontSize: '12px', lineHeight: '150%', marginBottom: 11 }} variant="body2">Классификация взаимодействия с лекарствами</Typography>
                                            <Typography style={{ fontWeight: 400, fontSize: '12px', lineHeight: '150%', marginBottom: 34 }} variant="body2">Эти классификации являются лишь ориентировочными. Уместность взаимодействия конкретных лекарств сложно определить для конкретного человека. Всегда консультируйтесь со своим врачом перед началом или завершением приема каких-либо лекарств. </Typography>
                                            <InfoBlock_Content>
                                                {arrayInfoDrug.map((item, index) => (
                                                    <InfoBlock_Item key={index}>
                                                        <InfoBlock_ItemBox><InfoBLock_label variant="body2">{item.label}</InfoBLock_label><Box style={{borderRadius: 45, height: 20, backgroundColor: `${item.color}`, width: 20, marginRight: 16,  }}></Box></InfoBlock_ItemBox>
                                                        <Typography style={{fontWeight: 400, fontSize: '12px', lineHeight: '150%', marginTop: 5}} variant="body2">{item.value}</Typography>
                                                    </InfoBlock_Item>
                                                ))}
                                            </InfoBlock_Content>
                                        </InfoBlock>
                                    </Box> : 
                                    <Faq/>
                                }
                            </TextAreaBox>
                        </InteractionBox>
                    </ContentBox>
                </Container>
            </div>
        </CustomBox >
    );
};

export default Interactions