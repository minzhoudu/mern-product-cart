import { createBrowserRouter } from "react-router-dom";
import Navbar from "./components/RouterWrapper";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Orders from "./pages/Orders";

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
                path: "product/:pid",
                element: <ProductDetails />,
            },
            {
                path: "orders",
                element: <Orders />,
            },
            {
                path: "*",
                element: <div>Not Found</div>,
            },
        ],
    },
]);

export default router;
