import { FC } from "react";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { selectCart, selectCartTotal } from "../state/cart/cartSelector";
import CartItem from "./CartItem";

interface ShoppingCartProps {
    closeCart: () => void;
}

const ShoppingCart: FC<ShoppingCartProps> = ({ closeCart }) => {
    const cart = useSelector(selectCart);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <div className="relative h-screen w-96 flex flex-col items-center gap-10 px-10 py-20 bg-red-500">
            <button onClick={closeCart} className="absolute top-5 right-5 text-4xl font-bold">
                <IoMdClose />
            </button>

            <h1 className="text-2xl text-white font-bold">ShoppingCart</h1>

            <div className="w-2/3 flex flex-col gap-6">
                {cart.map((product) => {
                    return <CartItem product={product} />;
                })}
            </div>

            {!!cartTotal && <h2 className="text-white font-bold text-xl">Total Price: ${cartTotal}</h2>}

            <button className="absolute bottom-5 p-2 rounded-xl bg-white text-red-500 font-bold hover:opacity-80">
                Confirm Order
            </button>
        </div>
    );
};

export default ShoppingCart;
