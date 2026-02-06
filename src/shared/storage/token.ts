import { STORAGE_KEYS } from "../const/storageKeys";

export const getToken =() => {
    return localStorage.getItem(STORAGE_KEYS.token);
}
export const setToken = (token:string) => {
    localStorage.setItem(STORAGE_KEYS.token, token);
}
export const removeToken = () => {
    localStorage.removeItem(STORAGE_KEYS.token);
}