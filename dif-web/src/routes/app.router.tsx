import { createBrowserRouter } from "react-router-dom";
import { ManagementLayout } from "../management/layouts/ManagementLayout";
import { HomePage } from "../management/pages/home/HomePage";


export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <ManagementLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    }
]);