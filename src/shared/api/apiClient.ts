import axios from "axios";
import { User } from "@/entities/user";

const url = process.env.REACT_APP_API_BASE_URL;


export const apiClient = {
    getAllUsers: () => {
        return axios.get<User[]>(`${url}/users`).then(res => res.data);
    },
    addUser: (user: User) => {
        return axios.post<User>(`${url}/users`, user).then(res => res.data);
    }
}
