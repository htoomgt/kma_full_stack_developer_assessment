import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
    key: "recoilPersistUser",
    storage: localStorage,
    converter: JSON,
});

const registeredUserInitialState = {
    key: "registeredUser",
    default: {
        email: "",
        password: "",
        fullname: "",
    },
    effects_UNSTABLE: [persistAtom],
};

const registeredUserState = atom(registeredUserInitialState);

const loggedInUserInitialState = {
    key: "loggedInUser",
    default: {
        email: "",
        password: "",
        status: false,
        fullname: "",
    },
    effects_UNSTABLE: [persistAtom],
};

const loggedInUserState = atom(loggedInUserInitialState);

export { registeredUserState, loggedInUserState };
