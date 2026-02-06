import axios from "axios";
import { User } from "@/entities/user";

const url = process.env.REACT_APP_API_BASE_URL;


export const apiClient = {
    getAllUsers: () => {
        return axios.get<User[]>(`${url}/users`).then(res => res.data);
    },
    createUser: (user: Omit<User, 'id' | 'createdAt'>) => {
        return axios.post<Omit<User, 'id' | 'createdAt'>>(`${url}/users`, user).then(res => res.data);
    },
    editUser: (user: Omit<User, 'id' | 'createdAt'>, id: string) => {
        return axios.put<Omit<User, 'id' | 'createdAt'>>(`${url}/users/${id}`, user).then(res => res.data);
    },
    deleteUser: (id: string) => {
        return axios.delete(`${url}/users/${id}`);
    },
}
