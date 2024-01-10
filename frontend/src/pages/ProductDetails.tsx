import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Image from "../components/Image";
import { selectProducts } from "../state/product/productSelector";
import { AppDispatch } from "../state/store";
import { addToCart } from "../state/cart/cartSlice";

interface ProductDetailsProps {}

const ProductDetails: FC<ProductDetailsProps> = () => {
    const { pid } = useParams<{ pid: string }>();
    const dispatch = useDispatch<AppDispatch>();

    const products = useSelector(selectProducts);
    const currentProduct = products.find((product) => product._id === pid);

    const addToCartHandler = () => {
        dispatch(addToCart(currentProduct));
    };

    const defalutImgUrl = "https://dummyimage.com/600x600/000/fff";
    const imgUrl = currentProduct?.thumbnail ? currentProduct.thumbnail : defalutImgUrl;

    return (
        <div className="flex justify-center pt-10 gap-20">
            <div className="flex flex-col gap-1">
                <Image url={imgUrl} alt={currentProduct?.title || "productImage"} width={400} height={300} />

                <div className="flex">
                    {currentProduct?.images.map((image, index) => {
                        return (
                            <button className="hover:opacity-90" key={index}>
                                <Image url={image} alt={currentProduct.title} width={250} height={200} />
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="w-2/6 flex flex-col gap-20">
                <div>
                    <h2 className="text-4xl font-bold mt-5">{currentProduct?.title}</h2>
                    <h3 className="text-xl">
                        <span className="font-semibold">Brand:</span> {currentProduct?.brand?.toUpperCase()}
                    </h3>
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-2">Description:</h2>
                    <p className="text-lg">{currentProduct?.description}</p>
                </div>

                <div className="flex flex-row justify-between text-lg font-bold">
                    <h3>${currentProduct?.price}</h3>
                    <h3>Rating: {currentProduct?.rating}</h3>
                </div>

                <div className="self-center">
                    {/*TODO: check stock attribute and show in stock or out of stock, also disable Add To Cart button */}
                    <h2 className="text-center mb-1">{currentProduct?.stock ? "In Stock" : "Out of Stock"}</h2>

                    <button
                        onClick={addToCartHandler}
                        className="p-3 bg-orange-700 border border-orange-700 text-white font-bold rounded-xl hover:bg-white hover:text-orange-700"
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
