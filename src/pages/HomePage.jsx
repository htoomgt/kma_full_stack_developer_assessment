import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loggedInUserState } from "../stores/user_recoil_store";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    document.title = "KMA - Home Page";
    let navigate = useNavigate();

    const loggedInUser = useRecoilValue(loggedInUserState);
    const setLoggedInUser = useSetRecoilState(loggedInUserState);

    useEffect(() => {
        if (loggedInUser.status === false) {
            navigate("/");
        }
    }, [loggedInUser, navigate]);

    const handleLogout = () => {
        setLoggedInUser((prevState) => {
            return { ...prevState, status: false, email: "", password: "" };
        });
        navigate("/");
    };

    return (
        <>
            <h1>HomePage</h1>
            <h2>Welcome {loggedInUser.email}</h2>
            <p>
                <button onClick={handleLogout}>Logout</button>
            </p>
        </>
    );
};

export default HomePage;
