import { currentPageState } from "../stores/page_recoil_store";
import { useRecoilValue } from "recoil";
import { useEffect } from "react";
import { loggedInUserState } from "../stores/user_recoil_store";

const useNavigatePageOnReload = () => {
    const currentPage = useRecoilValue(currentPageState);
    const loggedInUser = useRecoilValue(loggedInUserState);

    useEffect(() => {
        if (loggedInUser.status === true && window.location.pathname === "/") {
            window.location.pathname = currentPage.currentPageUri;
        } else if (
            loggedInUser.status === true &&
            currentPage.currentPageUri !== "/" &&
            window.location.pathname !== currentPage.currentPageUri
        ) {
            window.location.pathname = currentPage.currentPageUri;
        }
        console.log(currentPage.currentPageUri, window.location.pathname);
    }, [currentPage, loggedInUser]);
};

export default useNavigatePageOnReload;
