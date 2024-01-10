import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Product } from "../interfaces/product";
import { addToCart } from "../state/cart/cartSlice";
import { AppDispatch } from "../state/store";

interface ProductTileProps {
    product: Product;
}

const ProductTile: FC<ProductTileProps> = ({ product }) => {
    const dispatch = useDispatch<AppDispatch>();
    const addToCartHandler = () => {
        dispatch(addToCart(product));
    };

    return (
        <div className="w-96 flex flex-col items-center">
            <NavLink to={`/product/${product._id}`} className="max-w-72">
                <img className="rounded-t-lg w-[400px] h-[200px]" src={product.thumbnail} alt={product.title} />

                <div className="flex flex-col gap-3 border-l-2 border-r-2 rounded-b-lg">
                    <div className="flex flex-row justify-between px-2 text-xl">
                        <h2>{product.title}</h2>
                        <h2>${product.price}</h2>
                    </div>

                    <p className=" min-h-28 p-2 text-ellipsis line-clamp-4">{product.description}</p>
                </div>
            </NavLink>

            <button
                onClick={addToCartHandler}
                className="p-2 mt-5 w-2/5 place-self-center bg-orange-700 rounded-lg text-white font-bold border border-orange-700 hover:bg-white hover:text-orange-700"
            >
                Add to cart
            </button>
        </div>
    );
};

export default ProductTile;
