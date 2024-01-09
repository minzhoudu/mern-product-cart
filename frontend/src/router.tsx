import { Outlet, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <h1>Nav</h1>
                <Outlet />
            </div>
        ),
        children: [
            {
                index: true,
                element: <div>Home</div>,
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
