import { FC } from "react";
import { Product } from "../interfaces/product";

interface CartItemProps {
    product: Product;
}

const CartItem: FC<CartItemProps> = ({ product }) => {
    return (
        <div className="border border-white p-5 rounded-lg text-lg text-white italic">
            <h1>{product.title}(5) - $600</h1>
        </div>
    );
};

export default CartItem;
