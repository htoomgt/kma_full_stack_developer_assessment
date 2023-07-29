import { Grid } from "@mui/material";
import "./SpalashPage.css";
import GreetingCard from "../components/GreetingCard";
import LoginCard from "../components/LoginCard";

const SpalashPage = () => {
    document.title = "KMA - Splash Page";
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
