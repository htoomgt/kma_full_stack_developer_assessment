import { useSetRecoilState } from "recoil";
import { loggedInUserState } from "../../stores/user_recoil_store";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const Logout = () => {
    let navigate = useNavigate();
    const setLoggedInUser = useSetRecoilState(loggedInUserState);

    const handleLogout = () => {
        setLoggedInUser((prevState) => {
            return { ...prevState, status: false, email: "", password: "" };
        });
        navigate("/");
    };
    return (
        <>
            <Typography textAlign="center" onClick={handleLogout}>
                Logout
            </Typography>
        </>
    );
};

export default Logout;
