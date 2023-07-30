import { atom } from "recoil";

const registeredUserInitialState = {
    key: "registeredUser",
    default: {
        email: "",
        password: "",
        fullname: "",
    },
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
};

const loggedInUserState = atom(loggedInUserInitialState);

export { registeredUserState, loggedInUserState };
