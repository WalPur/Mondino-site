import { Box } from "@mui/material";
import { styled } from '@mui/system';
import {Title, MyText} from '../../global-styles'


const CustomBox = styled(Box)(({ theme }) => ({
    padding: "100px 0",
    background: "#F5F5F5",
    [theme.breakpoints.down("sm")]:{
        padding: "30px 0",
    }
}));
const Img = styled('img')(({ theme }) => ({
    
    [theme.breakpoints.down("lg")]:{
        maxWidth: "100%",
        maxHeight: "100%"
    }
}));
const MyImage = styled(Img)(({ theme }) => ({

}));
function Economize(){
    return(
        <CustomBox>
            <Box className="container" sx = {{display: "flex", flexDirection: "row"}}>
                <Box>
                    <Img src="/images/economize_img.svg"/>
                </Box>
                <Box sx = {{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <Box>
                        <Title sx = {{marginBottom: "20px"}}>
                            Экономьте деньги, не выходя из дома и без долгих поисков.
                        </Title>
                        <MyText sx = {{marginBottom: "60px"}}>
                            Все выгодные предложения на медицинские услуги в твоем телефоне. Все виды медицинских услуг Вашего города собраны в одном приложении. Выгодно, удобно и быстро.
                        </MyText>
                    </Box>
                    <Box>
                        <MyImage src="/images/mondino_icon_dark.svg"/>
                    </Box>
                </Box>
            </Box>
        </CustomBox>
    )
}

export default Economize;