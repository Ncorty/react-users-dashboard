import React from "react";
import { RouterProvider } from "react-router-dom";
import { rootRouter } from "./routing/AppRouter";

const App =() => {
    return <RouterProvider router={rootRouter} />
}

export default App;