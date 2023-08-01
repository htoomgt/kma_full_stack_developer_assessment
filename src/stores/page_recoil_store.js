import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: "recoilPersistPage",
    storage: localStorage,
    converter: JSON,
});

const currentPageInitialState = {
    key: "currentPage",
    default: {
        currentPageUri: "/",
    },
    effects_UNSTABLE: [persistAtom],
};

const currentPageState = atom(currentPageInitialState);

export { currentPageState };
