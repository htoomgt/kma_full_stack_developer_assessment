import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loggedInUserState } from "../stores/user_recoil_store";

const useLoggedInCheckNonAuthArea = () => {
    let navigate = useNavigate();
    const loggedInUser = useRecoilValue(loggedInUserState);
    useEffect(() => {
        if (loggedInUser.status === true) {
            navigate("/home");
        }
    }, [loggedInUser.status, navigate]);
};

export default useLoggedInCheckNonAuthArea;
