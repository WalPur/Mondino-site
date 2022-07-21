import { Box } from "@mui/material";
import { styled } from '@mui/system';

import { Text, Title } from "../../global-styles"

const CustomBox = styled(Box)(({ theme }) => ({
    padding: "100px 0",
    background: "#F5F5F5",
    [theme.breakpoints.down("sm")]:{
        padding: "30px 0",
    }
}));
const Myimg = styled('img')(({ theme }) => ({
    marginRight: 27,
    width: "20%",
}));
function Ease(){
    return(
        <CustomBox>
            <Box className="container">
                <Box sx = {{display: "flex", alignItems: "center", flexDirection: "column"}}>
                    <Text sx = {{ mb: 1.4, color: "#EA5775", }}>Доступно в App Store и Google Play</Text>
                    <Box sx = {{mb: 7.5}}>
                        <Title sx={{ color: "#0E1B4F", textAlign: "center" }}>Сделайте свою работу проще и эффективнее</Title>
                    </Box>
                </Box>
                <Box>
                    <Box sx = {{display: "flex", justifyContent: "space-evenly", mb: 6.5}}>
                        <img style={{ width: "33%" }} src="/images/ease_img_1_2.png" alt="Скриншот 1"/>
                        <img style={{ width: "33%" }} src="/images/ease_img_2_2.png" alt="Скриншот 2"/>
                        <img style={{ width: "33%" }} src="/images/ease_img_3_2.png" alt="Скриншот 3"/>
                    </Box>
                    <Box sx = {{ display: "flex", flexDirection: "row", width: "auto"}}>
                        <Myimg src="/images/appStore_dark.svg"/>
                        <Myimg src="/images/googlePlay_dark.svg"/>
                    </Box>
                </Box>
            </Box>
        </CustomBox>
    )
}

export default Ease;