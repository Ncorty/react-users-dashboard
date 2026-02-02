import { createBrowserRouter, RouteObject, Navigate } from 'react-router-dom';
import React from 'react';
import { RootLayout } from '../layout/rootLayout';
import {LoginPage} from "@pages/login";
import {UsersPage} from "@pages/users";
import {NotFoundPage} from "@pages/not-found";
import { PrivateRouter } from './PrivateRouter';

export const rootRouter = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {index: true, element: <Navigate to="/login" />},
            {path: 'login', element: <LoginPage />},
            {path: 'users', element: <PrivateRouter><UsersPage /></PrivateRouter>},
            {path: '*', element: <NotFoundPage />},
        ]
    }
])