import { Navigate } from "react-router-dom";
import React from "react";


export const PrivateRouter = ({children} : {children: React.ReactElement}) => {
    const isAuth = localStorage.getItem('isAuth');
    return isAuth ? children : <Navigate to="/login" replace/>;
}