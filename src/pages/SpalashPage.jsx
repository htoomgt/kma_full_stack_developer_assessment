import { Grid } from "@mui/material";
import "./SpalashPage.css";
import GreetingCard from "../components/splashPage/GreetingCard";
import LoginCard from "../components/splashPage/LoginCard";
import useLoggedInCheckNonAuthArea from "../customHooks/useLoggedInCheckNonAuthArea";
import useSetCurrentPage from "../customHooks/useSetCurrentPage";

const SpalashPage = () => {
    document.title = "KMA - Splash Page";

    useLoggedInCheckNonAuthArea();

    useSetCurrentPage("/");

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
