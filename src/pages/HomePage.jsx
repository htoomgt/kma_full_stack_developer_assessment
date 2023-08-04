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
import bannerLeftBackground from "../assets/banner_left_background.jpg";
import bannerRightBackground from "../assets/banner_right_background.png";

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
            <Container maxWidth="xl">
                <Grid container spacing={0} sx={{ padding: "0" }}>
                    <Grid item xs={12} sm={8} sx={{ backgroundColor: "black" }}>
                        <img src={bannerLeftBackground} />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        sx={{
                            backgroundColor: "black",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src={bannerRightBackground}
                            style={{ objectFit: "contain" }}
                        />
                        <Typography
                            variant="h4"
                            sx={{
                                color: "white",
                                position: "absolute",
                                top: "18%",
                                left: "10%",
                                width: "80%",
                            }}
                        >
                            Hello, Good Morning {loggedInUser.fullname} ! <br />
                            Here is what you have missed <br />
                            when you are away
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="lg">
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
