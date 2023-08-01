import { useEffect } from "react";
import { loggedInUserState } from "../stores/user_recoil_store";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentPageState } from "../stores/page_recoil_store";

const useLoggedInCheckAuthArea = () => {
    let navigate = useNavigate();

    const loggedInUser = useRecoilValue(loggedInUserState);
    const setCurrentPage = useSetRecoilState(currentPageState);
    useEffect(() => {
        if (loggedInUser.status === false) {
            setCurrentPage((prevState) => {
                return { ...prevState, currentPageUri: "/" };
            });
            navigate("/");
        }
    }, [loggedInUser, setCurrentPage, navigate]);
};

export default useLoggedInCheckAuthArea;
