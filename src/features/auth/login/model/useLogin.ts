import { setToken } from "@/shared/storage/token";
import { useMutation } from "@tanstack/react-query";
import { Auth } from "../api/auth";
import { LoginValues } from "./types";

export const useLogin = (onSuccessNavigate: () => void) => {
    return useMutation({
        mutationFn: (values: LoginValues) => Auth(values.login, values.password),
        onSuccess: (data) => {
            setToken(data);
            onSuccessNavigate();
        },
    });
}