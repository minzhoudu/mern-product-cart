import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Image from "../components/Image";
import { addToCart } from "../state/cart/cartSlice";
import { selectCurrentProduct } from "../state/product/productSelector";
import { setProductByIdAsync } from "../state/product/productSlice";
import { AppDispatch } from "../state/store";

interface ProductDetailsProps {}

const ProductDetails: FC<ProductDetailsProps> = () => {
    const { pid } = useParams<{ pid: string }>();
    const dispatch = useDispatch<AppDispatch>();

    const currentProduct = useSelector(selectCurrentProduct);

    useEffect(() => {
        if (!pid) return;

        dispatch(setProductByIdAsync(pid));
    }, [dispatch, pid]);

    const addToCartHandler = () => {
        if (!currentProduct) return;
        dispatch(addToCart(currentProduct));
    };

    const defalutImgUrl = "https://dummyimage.com/600x600/000/fff";
    const imgUrl = currentProduct?.thumbnail ? currentProduct.thumbnail : defalutImgUrl;

    const disableAddToCart = !currentProduct?.stock;

    return (
        <div className="flex justify-center pt-10 gap-20">
            <div className="flex flex-col gap-1">
                <Image
                    classname="self-center"
                    url={imgUrl}
                    alt={currentProduct?.title || "productImage"}
                    width={400}
                    height={300}
                />

                <div className="flex gap-5">
                    {currentProduct?.images?.map((image, index) => {
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
                    {currentProduct && currentProduct.stock > 0 && <h2 className="text-center mb-1">In Stock</h2>}

                    <button
                        onClick={addToCartHandler}
                        disabled={disableAddToCart}
                        className={`p-3 rounded-xl border font-bold text-white ${
                            !disableAddToCart
                                ? "bg-orange-700  border-orange-700 hover:bg-white hover:text-orange-700"
                                : "bg-gray-600 cursor-not-allowed"
                        } `}
                    >
                        {currentProduct?.stock ? "Add To Cart" : "Out of Stock"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
