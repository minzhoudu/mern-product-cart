import { FC } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { CartItem as ICartItem } from "../interfaces/cart";
import { selectCart, selectCartTotal } from "../state/cart/cartSelector";
import { createOrderAsync } from "../state/order/orderSlice";
import { AppDispatch } from "../state/store";
import CartItem from "./CartItem";
import { CreateOrderDto } from "../interfaces/orders";

interface ShoppingCartProps {
    closeCart: () => void;
}

const ShoppingCart: FC<ShoppingCartProps> = ({ closeCart }) => {
    const cart: ICartItem[] = useSelector(selectCart);
    const cartTotal = useSelector(selectCartTotal);
    
    const dispatch = useDispatch<AppDispatch>();
    const confirmOrderHandler = () => {
        const order: CreateOrderDto = {
            products: cart.map((product) => ({ productId: product._id, quantity: product.quantity })),
        };

        dispatch(createOrderAsync(order));
    };

    return (
        <div className="relative h-screen w-96 flex flex-col items-center gap-10 px-10 py-20 bg-red-500">
            <button onClick={closeCart} className="absolute top-5 right-5 text-4xl font-bold">
                <IoMdClose />
            </button>

            <h1 className="text-2xl text-white font-bold">ShoppingCart</h1>

            <div className="w-2/3 flex flex-col gap-6">
                {cart.map((product) => {
                    return <CartItem key={product._id} product={product} />;
                })}
            </div>

            {!!cartTotal && <h2 className="text-white font-bold text-xl">Total Price: ${cartTotal}</h2>}

            <button
                onClick={confirmOrderHandler}
                className="absolute bottom-5 p-2 rounded-xl bg-white text-red-500 font-bold hover:opacity-80"
            >
                Confirm Order
            </button>
        </div>
    );
};

export default ShoppingCart;
