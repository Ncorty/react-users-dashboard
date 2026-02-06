import { Outlet } from "react-router-dom"
import React from "react";

export const RootLayout = () => {
    return (
    <div>
        <h1>Root Layout</h1>
        <Outlet />
    </div>
    )
}