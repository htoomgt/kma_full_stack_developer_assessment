import { atom } from "recoil";

const currentPageInitialState = {
    key: "currentPage",
    default: {
        currentPageUri: "/",
    },
};

const currentPageState = atom(currentPageInitialState);

export { currentPageState };
