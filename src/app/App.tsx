import React from "react";
import { RouterProvider } from "react-router-dom";
import { rootRouter } from "./routing/AppRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={rootRouter} />
        </QueryClientProvider>
    );
}

export default App;