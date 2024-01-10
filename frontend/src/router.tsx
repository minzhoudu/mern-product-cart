import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/RouterWrapper";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "product/:id",
                element: <div>Product</div>,
            },
            {
                path: "cart",
                element: <div>Cart</div>,
            },
            {
                path: "*",
                element: <div>Not Found</div>,
            },
        ],
    },
]);

export default router;
