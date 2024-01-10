import { FC } from "react";
import Image from "../components/Image";

interface ProductDetailsProps {}

const ProductDetails: FC<ProductDetailsProps> = () => {
    return (
        <div className="flex justify-center pt-10 gap-20">
            <div className="flex flex-col gap-1">
                <Image url="https://dummyimage.com/600x600/000/fff" alt="productImage" width={600} height={600} />

                <div className="flex">
                    <button className="hover:opacity-90">
                        <Image
                            url="https://dummyimage.com/200x200/000/fff"
                            alt="productImage"
                            width={200}
                            height={200}
                        />
                    </button>
                    <button className="hover:opacity-90">
                        <Image
                            url="https://dummyimage.com/200x200/000/fff"
                            alt="productImage"
                            width={200}
                            height={200}
                        />
                    </button>
                    <button className="hover:opacity-90">
                        <Image
                            url="https://dummyimage.com/200x200/000/fff"
                            alt="productImage"
                            width={200}
                            height={200}
                        />
                    </button>
                </div>
            </div>

            <div className="w-2/6 flex flex-col gap-20">
                <div>
                    <h2 className="text-4xl font-bold mt-5">Red Label</h2>
                    <h3 className="text-xl">Johnny Walker</h3>
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-2">Description:</h2>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptatum quasi modi illum
                        error quas ad perferendis veniam consequatur aliquam distinctio mollitia, adipisci praesentium,
                        facere accusantium culpa eum voluptatem eveniet. Maiores eius at itaque cumque, ab ut quis
                        expedita inventore!
                    </p>
                </div>

                <div className="flex flex-row justify-between text-lg font-bold">
                    <h3>$150</h3>
                    <h3>Rating: 5</h3>
                </div>

                <div className="self-center">
                    {/*TODO: check stock attribute and show in stock or out of stock, also disable Add To Cart button */}
                    <h2 className="text-center mb-1">In Stock</h2>

                    <button className="p-3 bg-orange-700 border border-orange-700 text-white font-bold rounded-xl hover:bg-white hover:text-orange-700">
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
