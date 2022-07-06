import { Box, Container, Button, Typography } from "@mui/material";

import Images from "../../images";

function ApplicationForm(){
    return(
        <Box
            sx={{
                padding: "100px 0",
            }}
        >
            <Container classname="container">
                <Box>
                    <img
                        src={Images.mondino_title}
                        style={{
                            maxWidth: 590,
                        }}
                    />
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontSize: 48,
                            lineHeight: "132%",
                        }}
                    >
                        Заявка для партнерства
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default ApplicationForm;