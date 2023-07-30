import { useEffect } from "react";
import { loggedInUserState } from "../stores/user_recoil_store";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

const useLoggedInCheckAuthArea = () => {
    let navigate = useNavigate();

    const loggedInUser = useRecoilValue(loggedInUserState);
    useEffect(() => {
        if (loggedInUser.status === false) {
            navigate("/");
        }
    }, [loggedInUser, navigate]);
};

export default useLoggedInCheckAuthArea;
