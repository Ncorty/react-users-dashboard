import { Outlet } from "react-router-dom"
import React from "react";

export const RootLayout = () => {
    return (
    <div>
        <Outlet />
    </div>
    )
}