import { useRecoilValue } from "recoil";
import { loggedInUserState } from "../stores/user_recoil_store";
import { useNavigate } from "react-router-dom";
import useLoggedInCheckAuthArea from "../customHooks/useLoggedInCheckAuthArea";
import LoggedInAppBar from "../components/authArea/LoggedInAppBar";
import { Typography } from "@mui/material";

const HomePage = () => {
    document.title = "KMA - Home Page";
    let navigate = useNavigate();

    const loggedInUser = useRecoilValue(loggedInUserState);

    // Logged In Check and redirect if not authenticated
    useLoggedInCheckAuthArea();

    return (
        <>
            <LoggedInAppBar />
            <h1>HomePage</h1>
            <h2>Welcome {loggedInUser.email}</h2>
            <Typography sx={{ color: "blue" }}>sample text</Typography>

            {/* for testing purposes */}
            <p>
                <button onClick={() => navigate("/")}>splash screen</button>{" "}
            </p>
        </>
    );
};

export default HomePage;
