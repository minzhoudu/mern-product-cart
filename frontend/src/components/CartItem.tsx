import { FC } from "react";
import { CartItem as ICartItem } from "../interfaces/cart";

interface CartItemProps {
    product: ICartItem;
}

const CartItem: FC<CartItemProps> = ({ product }) => {
    return (
        <div className="border border-white p-5 rounded-lg text-lg text-white italic">
            <h1>
                {product.title}({product.quantity}) - ${product.totalPrice}
            </h1>
        </div>
    );
};

export default CartItem;
