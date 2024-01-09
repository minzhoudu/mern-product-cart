import { FC } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const RouterWrapper: FC = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default RouterWrapper;
