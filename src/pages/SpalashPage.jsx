import { Grid, Typography, Box } from "@mui/material";
import "./SpalashPage.css";
import GreetingCard from "../components/GreetingCard";

const SpalashPage = () => {
    document.title = "KMA - Splash Page";
    return (
        <>
            <Grid container spacing={2} className={`gridMainConatiner`}>
                <GreetingCard />
                <Grid item xs={6} className={`loginGrid`}>
                    <Box className={`loginDisplayBox`}>
                        <Typography variant="p" className={`loginFormTitle`}>
                            Welcome from the KMA Group of Companies! Please
                            Login here
                        </Typography>
                        <Box className={`lognFormBox`}>
                            <Box>
                                <Box>Box title</Box>
                                <Box>KMA logo</Box>
                            </Box>
                            <Box>form input</Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default SpalashPage;
