import { Grid, Typography, Box, TextField, Button } from "@mui/material";
import KMALogo from "../assets/kma_logo.png";

const LoginCard = () => {
    return (
        <>
            <Grid item xs={6} className={`loginGrid`}>
                <Box className={`loginDisplayBox`}>
                    <Typography variant="p" className={`loginFormTitle`}>
                        Welcome from the KMA Group of Companies! Please Login
                        here
                    </Typography>
                    <Box className={`loginFormBox`}>
                        <Box className={`loginTitleLogoBox`}>
                            <Box xs={6} className={`portalLoginBox`}>
                                Portal Login
                            </Box>
                            <Box xs={6} className={`kmaLogoBox`}>
                                <img src={KMALogo} alt="kma logo" />
                            </Box>
                        </Box>
                        <Box className={`loginFormGroupBox`}>
                            <TextField
                                id="emailAddress"
                                label="Email Address"
                                variant="outlined"
                                required="true"
                            />
                            <TextField
                                id="password"
                                label="Passwords"
                                variant="outlined"
                                type="password"
                                required="true"
                            />
                            <Button variant="contained">Login</Button>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </>
    );
};

export default LoginCard;
