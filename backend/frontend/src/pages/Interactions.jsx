import React, { useState } from 'react';
import { Box, TextField, Typography, Container, Grid, Button, Autocomplete } from "@mui/material";
import { styled } from "@mui/system";
// import { useHistory } from 'react-router-dom';
// import { makeStyles } from '@mui/core/styles';
// import Autocomplete from '@mui/lab/Autocomplete';

import axios from 'axios';

// import Layout from '../../components/layout/Layout'
// import ButtonCustom from '../../components/ButtonCustom'
// import SimpleModal from '../../components/SimpleModal'

// const useClasses = makeStyles(theme => ({
//     container: {
//         background: 'rgba(234, 251, 255, 0.91)',
//         paddingTop: 50,
//         paddingBottom: 50
//     },   
//     textArea: {
//         width: '100%',
//         backgroundColor: '#fafafa',
//         '&:focus': {
//             outline: "none",
//         },
//     },
//     interactionsContent: {
//         display: 'flex',
//         width: '100%',
//         height: 300,
//         border: '1px solid black',
//         paddingTop: 10,
//         flexDirection: 'column',
//         overflow: 'auto',

//     },
//     
// }))

const Interactions = () => {
    // let history = useHistory();

    let [idCounter, setIdCounter] = useState(1)
    const [effect, setEffect] = useState([])
    const [showModal, setShowModal] = useState(false)
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
        searchAutoComplite(e.target.value)
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
            .get(`https://pocketmedic.online/compare/drugs_mnn?` + getParams)
            .then(response => {
                const compares = response.data
                let status = compares.some((item) => {
                    return item.effect !== 'not effect'
                })
                if (status) {
                    setEffect(response.data)
                } else {
                    setShowModal(true)
                }
            }).catch((error) => {
                console.log('error', error)
            })
    }
    const arrayInfoDrug = [
        {
            label: 'Опасные',
            value: 'Потенциально опасные межлекарственные взаимодействия: риск от совместного применения ЛС превышает пользу для пациента, поэтому следует в большинстве случаев избегать подобных комбинаций ЛС или применять ЛС в минимальных дозах.',
            color: 'red'
        },
        {
            label: 'Значимые ',
            value: 'Потенциальные межлекарственные взаимодействия средней степени значимости: такие комбинации часто требуют более тщательного клинического, лабораторного и инструментального контроля за эффективностью и безопасностью',
            color: 'yellow'
        },
        {
            label: 'Малозначимые ',
            value: 'Взаимодействия с минимальным клиническим значением. К этому уровню относятся взаимодействия, характеризующиеся минимальным риском развития неблагоприятных побочных реакций или неэффективности лечения.',
            color: 'green'
        },
        {
            label: 'Неизвестные',
            value: 'Информация о взаимодействии недоступна.',
            color: 'gray'
        },
    ]
    const searchAutoComplite = (inputs) => {
        console.log(inputs)
        axios
            .get(`https://pocketmedic.online/compare/drugs_search?drug=` + inputs)
            .then(response => {
                const compares = response.data
                setAutoComplite(Object.values(compares))
            }).catch(error => console.log('autoComplite error', error))
    }
    const ContentBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        margin: '0 auto',
        boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.04)',
        minHeight: 700,
        padding: 20,
        flexDirection: 'column'
    }));
    const TitleBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
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
        justifyContent: 'start',
        alignItems: 'start'
    }));
    const ActivePart = styled(Grid)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }));
    const InfoBlock_Content = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        flexDirection: 'column'
    }));
    const InfoBlock = styled(Box)(({ theme }) => ({
        padding: 20,
        width: '100%',
        minHeight: 300,
        marginTop: 10
    }));
    const InteractionsContent = styled(Box)(({ theme }) => ({
        display: 'flex',
        width: '100%',
        height: 300,
        border: '1px solid black',
        paddingTop: 10,
        flexDirection: 'column',
        overflow: 'auto',
    }));
    const InfoBlock_Item = styled(Box)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
        borderTop: '1px solid #b9b9b9',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        },
    }));
    const TextAreaBox = styled(Grid)(({ theme }) => ({
        backgroundColor: 'white',
        borderRadius: 40,
        [theme.breakpoints.down('sm')]: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 20,
        },
    }));
    const ActivePart__input = styled(Autocomplete)(({ theme }) => ({
        width: '100%',
        borderRadius: 40,
        backgroundColor: 'white'
    }));
    const ActivePart__inputBox = styled(Box)(({ theme }) => ({
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }));
    const ActivePart__inputBox_item = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10,
        width: '80%',
        [theme.breakpoints.down('sm')]: {
        width: '100%'
        },
    }));
    const ActivePart__cancelButton = styled(Button)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 56,
        backgroundColor: 'red',
        color: 'white',
        marginLeft: 5,
        '&:focus': {
        outline: "none",
        },
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    }));
    const ActivePart__Button = styled(Button)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        backgroundColor: '#0E1B4F',
        borderRadius: '119px',
        color: 'white',
        marginLeft: 5,
        '&:focus': {
        outline: "none",
        },
        marginTop: 10,
        width: '100%'
    }));
    const ActivePart__ButtonBox = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 10,
        width: '100%',
        paddingRight: 20,
    }));
    const InfoBLock_label = styled(Typography)(({ theme }) => ({
        width: 100,
        marginRight: 5,
    }));
    const InfoBLock_Button = styled(Button)(({ theme }) => ({
        display: 'flex',
        height: 55,
        width: 200,
        backgroundColor: '#0E1B4F',
        borderRadius: '74px',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',        
        
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: '20px',
        lineHeight: '23px',
        textAlign: 'center',

        marginLeft: 5,
        '&:focus': {
        outline: "none",
        },
        marginTop: 10,
        
    }));
    
    return (
        <Box>
            <div>
                <Container>
                    <ContentBox>
                        <TitleBox>
                            <Typography variant="h5">Взаимодействия лекарственных средств</Typography>
                            <ButtonBox>
                                {/* <ButtonCustom text="Вопрос ответ" onClick={() => { history.push("/faq") }} /> */}
                            </ButtonBox>
                        </TitleBox>
                        <InteractionBox>
                            <ActivePart item lg={6} sm={12} md={6} xl={6} xs={12}>
                                <Typography variant="body2">Международное непатентованное наименование (МНН)</Typography>
                                <ActivePart__inputBox>
                                    {inputs.map((item, index) => (
                                        <ActivePart__inputBox_item key={index}>
                                            <ActivePart__input
                                                id="free-solo-demo"
                                                freeSolo
                                                options={AutoCompliteList}
                                                onInputChange={(event, newInputValue) => handleAutoComplite(item.id, newInputValue)}
                                                renderInput={(params) => (
                                                    <TextField  {...params} id="outlined-basic" label="Введите лекарство" variant="outlined" value={item.value} onChange={handleText(item.id)} />
                                                )}
                                            />
                                            {item.close == false ? <Box style={{ width: 80, height: 56 }}></Box> :
                                                <ActivePart__cancelButton variant="contained" onClick={() => { handleDelete(item.id) }}>x</ActivePart__cancelButton>
                                            }
                                        </ActivePart__inputBox_item>
                                    ))}
                                </ActivePart__inputBox>
                                <ActivePart__ButtonBox>
                                    <ActivePart__Button variant="contained" onClick={() => { addInput() }}>Добавить лекарства</ActivePart__Button>
                                    <ActivePart__Button style={{backgroundColor: '#11A9E5'}} variant="contained" onClick={() => { compareInteractions() }}>Посмотреть совместимости</ActivePart__Button>
                                </ActivePart__ButtonBox>
                            </ActivePart>
                            <TextAreaBox item lg={6} sm={12} md={6} xl={6} xs={12}>
                                <Box>
                                    <InfoBLock_Button>Вопросы</InfoBLock_Button>
                                    <InfoBLock_Button style={{backgroundColor: 'rgba(14, 27, 79, 0.2)', color: 'black'}}>Вопросы и ответы</InfoBLock_Button>
                                </Box>
                                <Box style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                                    <Typography variant="body2">Взаимодействие:</Typography>
                                </Box>
                                <InteractionsContent>
                                    {/* <Box>{effect !== 'нету эффектов' ? mnn1 + ' и ' + mnn2 + ' взаимодействуют: ' : ''} {effect !== 'нету эффектов' ? colorBox() : ''}{effect}</Box> */}
                                    {effect ? effect.map((item, index) => (
                                        <div key={index}>
                                            <span style={{ fontWeight: 'bold' }}>{item.drug_1}</span> и <span style={{ fontWeight: 'bold' }}>{item.drug_2}</span> взаимодействуют: <span style={{ backgroundColor: `${item.effect !== 'not effect' ? item.color : 'grey'}`, width: 15, height: 20, margin: 5, border: '1px solid black', color: `${item.effect !== 'not effect' ? item.color : 'grey'}` }}>__</span> {Object.values(item.effect)}
                                        </div>
                                    )) : 'нету эффектов'}
                                </InteractionsContent>
                                <InfoBlock>
                                    <Typography variant="body1">Классификация взаимодействия с лекарствами</Typography>
                                    <Typography variant="body2">Эти классификации являются лишь ориентировочными. Уместность взаимодействия конкретных лекарств сложно определить для конкретного человека. Всегда консультируйтесь со своим врачом перед началом или завершением приема каких-либо лекарств. </Typography>
                                    <InfoBlock_Content>
                                        {arrayInfoDrug.map((item, index) => (
                                            <InfoBlock_Item key={index}>
                                                <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', justifyContent: 'center' }}><InfoBLock_label variant="body2">{item.label}</InfoBLock_label><Box style={{ height: 8, backgroundColor: `${item.color}`, width: 8, marginTop: 7, marginRight: 10 }}></Box></Box>
                                                <Typography variant="boddy2">{item.value}</Typography>
                                            </InfoBlock_Item>
                                        ))}
                                    </InfoBlock_Content>
                                </InfoBlock>
                            </TextAreaBox>
                        </InteractionBox>
                    </ContentBox>
                </Container>
                {/* <Box style={{ margin: '0 auto' }}>
                    <SimpleModal showModal={showModal} setShowModal={setShowModal} />
                </Box> */}
            </div>
        </Box >
    );
};

export default Interactions