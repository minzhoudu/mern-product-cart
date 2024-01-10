import { FC } from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    return (
        <div className="w-full bg-orange-700 shadow-[0px_4px_10px_1px_rgba(0,0,0,0.75)]">
            <div className="flex justify-between items-center text-center mx-10 h-16">
                <NavLink to="/" className="px-5 font-bold text-xl hover:text-white">
                    HOME
                </NavLink>

                <input type="text" placeholder="search..." className="rounded-md h-3/5 w-56 px-3" />

                <button className="relative p-3 border-2 border-black rounded-lg text-2xl cursor-pointer hover:border-white hover:text-white">
                    <FaShoppingCart />

                    <div className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-white flex justify-center items-center p-2 text-orange-700 text-xs font-bold">
                        3
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
