import { FC } from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    return (
        <div className="w-full bg-orange-700 shadow-[0px_4px_10px_1px_rgba(0,0,0,0.75)]">
            <div className="flex justify-between items-center text-center mx-10 h-16">
                <NavLink to="/" className="w-20">
                    Home
                </NavLink>

                <input type="text" placeholder="search..." className="rounded-md h-3/5 w-56 px-5" />

                <div className="w-20">
                    <h1>CartIcon</h1>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
