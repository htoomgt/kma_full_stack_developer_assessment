import { atom } from "recoil";

const registeredUserInitialState = {
    key: "registeredUser",
    default: {
        email: "",
        password: "",
    },
};

const registeredUserState = atom(registeredUserInitialState);

const loggedInUserInitialState = {
    key: "loggedInUser",
    default: {
        email: "",
        password: "",
        status: false,
    },
};

const loggedInUserState = atom(loggedInUserInitialState);

export { registeredUserState, loggedInUserState };
