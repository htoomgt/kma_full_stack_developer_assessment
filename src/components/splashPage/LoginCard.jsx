import { Grid, Typography, Box, TextField, Button } from "@mui/material";
import KMALogo from "../../assets/kma_logo.png";
import "./LoginCard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { registeredUserState } from "../../stores/user_recoil_store";
import { loggedInUserState } from "../../stores/user_recoil_store";

const formInitialState = {
    email: "",
    password: "",
};

const styles = () => ({
    field: {
        borderColor: "#565555",
    },
});

const LoginCard = () => {
    let navigate = useNavigate();
    const registeredUserRecoil = useRecoilValue(registeredUserState);
    const setLoggedInUser = useSetRecoilState(loggedInUserState);
    const [loginCredentials, setLoginCredentials] = useState(formInitialState);

    // Handle Text Input of login form
    const handleTextInput = (e) => {
        setLoginCredentials((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
    };

    // Handle Login Button Click
    const handleLogin = (e) => {
        e.preventDefault();

        const registeredUser = registeredUserRecoil;

        if (
            loginCredentials.email === registeredUser.email &&
            loginCredentials.password === registeredUser.password
        ) {
            console.log("Login Successful");
            setLoginCredentials(formInitialState);
            setLoggedInUser((prevState) => {
                return {
                    ...prevState,
                    email: loginCredentials.email,
                    password: loginCredentials.password,
                    status: true,
                };
            });
            navigate("/home");
        } else {
            console.log("Login Failed");
        }
    };
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
                                <Typography variant="p">
                                    Portal Login
                                </Typography>
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
                                required
                                name="email"
                                onChange={handleTextInput}
                                style={styles.field}
                                type="email"
                            />
                            <TextField
                                id="password"
                                label="Passwords"
                                variant="outlined"
                                type="password"
                                required
                                name="password"
                                onChange={handleTextInput}
                                style={styles.field}
                            />
                            <Button variant="contained" onClick={handleLogin}>
                                Login
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </>
    );
};

LoginCard.propTypes = {};

export default LoginCard;
