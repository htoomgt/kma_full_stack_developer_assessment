import { registeredUserState } from "../stores/user_recoil_store";
import { useSetRecoilState } from "recoil";
import { useEffect, useMemo } from "react";

const useLoadRegisteredUser = () => {
    const registeredEmail = import.meta.env.VITE_REGISTERED_EMAL;
    const registeredPassword = import.meta.env.VITE_REGISTERED_PASSWORD;
    const registeredFullname = import.meta.env.VITE_REGISTERED_FULLNAME;
    const registeredUser = useMemo(
        () => ({
            email: registeredEmail,
            password: registeredPassword,
            fullname: registeredFullname,
        }),
        [registeredEmail, registeredPassword, registeredFullname]
    );
    const setRegisteredUser = useSetRecoilState(registeredUserState);

    useEffect(() => {
        setRegisteredUser(registeredUser);
    }, [setRegisteredUser, registeredUser]);
};

export default useLoadRegisteredUser;
