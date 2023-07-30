import { Grid } from "@mui/material";
import "./SpalashPage.css";
import GreetingCard from "../components/GreetingCard";
import LoginCard from "../components/LoginCard";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { loggedInUserState } from "../stores/user_recoil_store";

const SpalashPage = () => {
    document.title = "KMA - Splash Page";
    let navigate = useNavigate();
    const loggedInUser = useRecoilValue(loggedInUserState);
    useEffect(() => {
        if (loggedInUser.status === true) {
            navigate("/home");
        }
    }, [loggedInUser.status, navigate]);

    return (
        <>
            <Grid container spacing={2} className={`gridMainConatiner`}>
                <GreetingCard />
                <LoginCard />
            </Grid>
        </>
    );
};

export default SpalashPage;
