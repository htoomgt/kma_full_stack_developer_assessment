import { useRecoilValue, useSetRecoilState } from "recoil";
import { loggedInUserState } from "../stores/user_recoil_store";
import { useNavigate } from "react-router-dom";
import useLoggedInCheckAuthArea from "../customHooks/useLoggedInCheckAuthArea";

const HomePage = () => {
    document.title = "KMA - Home Page";
    let navigate = useNavigate();

    const loggedInUser = useRecoilValue(loggedInUserState);
    const setLoggedInUser = useSetRecoilState(loggedInUserState);

    // Logged In Check and redirect if not authenticated
    useLoggedInCheckAuthArea();

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

            {/* for testing purposes */}
            <p>
                <button onClick={() => navigate("/")}>splash screen</button>{" "}
            </p>
        </>
    );
};

export default HomePage;
