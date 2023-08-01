import { useRecoilValue } from "recoil";
import { loggedInUserState } from "../stores/user_recoil_store";
import { useNavigate } from "react-router-dom";
import useLoggedInCheckAuthArea from "../customHooks/useLoggedInCheckAuthArea";
import LoggedInAppBar from "../components/authArea/LoggedInAppBar";
import { Grid, Typography, Container } from "@mui/material";
import Footer from "../components/authArea/Footer";
import Annoucement from "../components/homePage/Annoucement";
import TodoGrid from "../components/homePage/TodoGrid";
import NewsSection from "../components/homePage/NewsSection";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useSetCurrentPage from "../customHooks/useSetCurrentPage";

const HomePage = () => {
    document.title = "KMA - Home Page";
    let navigate = useNavigate();

    const loggedInUser = useRecoilValue(loggedInUserState);

    // Logged In Check and redirect if not authenticated
    useLoggedInCheckAuthArea();

    useSetCurrentPage("/home");

    return (
        <>
            <LoggedInAppBar />
            <Container maxWidth="lg">
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={8} sx={{ backgroundColor: "cyan" }}>
                        greeting
                        <h1>HomePage</h1>
                        <Typography variant="h4">
                            Welcome {loggedInUser.fullname}
                        </Typography>
                        {/* for testing purposes */}
                        <p>
                            <button onClick={() => navigate("/")}>
                                splash screen
                            </button>{" "}
                        </p>
                        <AnchorLink href="#tasks"> Todos </AnchorLink>&nbsp;
                        <AnchorLink href="#news"> News </AnchorLink>&nbsp;
                        <AnchorLink href="#annoucement">Annoucement</AnchorLink>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        sx={{ backgroundColor: "orange" }}
                    >
                        status
                    </Grid>
                </Grid>

                {/* announcement */}
                <Annoucement id="annoucement" />

                {/* news */}
                <NewsSection id="news" />

                {/* todo  */}
                <TodoGrid id="tasks" />
            </Container>

            {/* footer */}
            <Footer />
        </>
    );
};

export default HomePage;
