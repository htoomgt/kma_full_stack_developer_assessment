import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { currentPageState } from "../stores/page_recoil_store";

const useSetCurrentPage = (uri) => {
    const setCurrentPage = useSetRecoilState(currentPageState);

    useEffect(() => {
        setCurrentPage((prevState) => {
            return { ...prevState, currentPageUri: uri };
        });
    }, [uri, setCurrentPage]);
};

export default useSetCurrentPage;
