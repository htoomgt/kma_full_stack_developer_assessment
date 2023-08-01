import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loggedInUserState } from "../stores/user_recoil_store";
import { currentPageState } from "../stores/page_recoil_store";

const useLoggedInCheckNonAuthArea = () => {
    let navigate = useNavigate();
    const loggedInUser = useRecoilValue(loggedInUserState);
    const setCurrentPage = useSetRecoilState(currentPageState);
    useEffect(() => {
        if (loggedInUser.status === true) {
            setCurrentPage((prevState) => {
                return { ...prevState, currentPageUri: "/home" };
            });
            navigate("/home");
        }
    }, [loggedInUser.status, setCurrentPage, navigate]);
};

export default useLoggedInCheckNonAuthArea;
