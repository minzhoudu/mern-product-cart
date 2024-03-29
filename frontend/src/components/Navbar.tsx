import { FC, FormEvent, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { selectTotalItems } from "../state/cart/cartSelector";
import { searchProduct } from "../state/product/productSlice";
import { AppDispatch } from "../state/store";
import ShoppingCart from "./ShoppingCart";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
    const dispatch = useDispatch<AppDispatch>();
    const totalItems = useSelector(selectTotalItems);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const searchProductsByTitleHandler = (e: FormEvent<HTMLInputElement>) => {
        const keyword = e.currentTarget.value;

        dispatch(searchProduct(keyword));
    };

    const openCartHandler = () => {
        setIsCartOpen(true);
    };

    const closeCartHandler = () => {
        setIsCartOpen(false);
    };

    return (
        <div className="sticky top-0">
            <div className="w-full bg-white shadow-[0px_4px_10px_1px_rgba(0,0,0,0.2)]">
                <div className="flex justify-between items-center text-center mx-10 h-16">
                    <div>
                        <NavLink to="/" className="px-5 font-bold text-xl hover:opacity-60 hover:transition-opacity">
                            HOME
                        </NavLink>

                        <NavLink
                            to="/orders"
                            className="px-5 font-bold text-xl hover:opacity-60 hover:transition-opacity"
                        >
                            ORDERS
                        </NavLink>
                    </div>

                    <input
                        onInput={searchProductsByTitleHandler}
                        type="text"
                        placeholder="search..."
                        className="rounded-md h-3/5 w-56 px-3 border border-black"
                    />

                    <button
                        onClick={openCartHandler}
                        className="relative p-3 rounded-lg text-3xl cursor-pointer hover:border-white hover:opacity-70"
                    >
                        <FaShoppingCart />

                        <div className="absolute top-1 right-0 w-2 h-2 rounded-full bg-red-500 flex justify-center items-center p-2.5 text-white text-xs font-bold">
                            {totalItems}
                        </div>
                    </button>
                </div>
            </div>

            <div className={`top-0 right-0 ${isCartOpen ? "absolute" : "hidden"}`}>
                <ShoppingCart closeCart={closeCartHandler} />
            </div>
        </div>
    );
};

export default Navbar;
