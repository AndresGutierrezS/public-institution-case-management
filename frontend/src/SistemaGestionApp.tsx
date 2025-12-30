import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routes/app.router";


export const SistemaGestionApp = () => {


    return (
        <RouterProvider router={appRouter} />
    );
}