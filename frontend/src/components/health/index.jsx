import { Box } from "@mui/material";
import { styled } from '@mui/system';

import { Text, Title } from "../../global-styles"

const CustomBox = styled(Box)(({ theme }) => ({
    padding: "100px 0",
    background: "#1B1642",
    [theme.breakpoints.down("sm")]:{
        padding: "30px 0",
    }
}));
const Myimg = styled('img')(({ theme }) => ({
    marginRight: 27,
    width: "20%",
}));
function Health(){
    return(
        <CustomBox>
            <Box className="container">
                <Box sx = {{display: "flex", alignItems: "center", flexDirection: "column"}}>
                    <Text sx = {{ mb: 1.4, color: "#EA5775", }}>Доступно в App Store и Google Play</Text>
                    <Box sx = {{mb: 7.5}}>
                        <Title sx={{ color: "#FFFFFF", }}>Сделайте свою работу проще и эффективнее</Title>
                    </Box>
                </Box>
                <Box>
                    <Box sx = {{display: "flex", justifyContent: "space-evenly", mb: 6.5}}>
                        <img style={{ width: "33%" }} src="/images/health_1_2.png" alt="Скриншот 1"/>
                        <img style={{ width: "33%" }} src="/images/health_2_2.png" alt="Скриншот 2"/>
                        <img style={{ width: "33%" }} src="/images/health_3_2.png" alt="Скриншот 3"/>
                    </Box>
                    <Box sx = {{ display: "flex", flexDirection: "row", width: "auto"}}>
                        <Myimg src="/images/appStore.svg"/>
                        <Myimg src="/images/googlePlay.svg"/>
                    </Box>
                </Box>
            </Box>
        </CustomBox>
    )
}

export default Health;