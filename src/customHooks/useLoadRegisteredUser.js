import { registeredUserState } from "../stores/user_recoil_store";
import { useSetRecoilState, useRecoilValue } from "recoil";
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
    const registeredUserRecoil = useRecoilValue(registeredUserState);

    useEffect(() => {
        if (registeredUserRecoil.email === "") {
            setRegisteredUser(registeredUser);
        }
    }, [setRegisteredUser, registeredUser, registeredUserRecoil.email]);
};

export default useLoadRegisteredUser;
