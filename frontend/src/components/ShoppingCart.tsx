import { FC } from "react";
import { IoMdClose } from "react-icons/io";
import { Product } from "../interfaces/product";
import CartItem from "./CartItem";

interface ShoppingCartProps {
    closeCart: () => void;
}

const ShoppingCart: FC<ShoppingCartProps> = ({ closeCart }) => {
    const products: Product[] = [
        {
            _id: "1",
            title: "Red Label",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem saepe, aliquam ex eaque odio incidunt natus laborum unde molestiae!",
            price: 150,
            discountPrice: 20,
            rating: 4,
            stock: 10,
            brand: "Johnny Walker",
            category: "whiskey",
            images: ["https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200"],
            thumbnail: "https://picsum.photos/200",
            createdAt: "2021-09-01T00:00:00.000Z",
            updatedAt: "2021-09-01T00:00:00.000Z",
        },
        {
            _id: "1",
            title: "Red Label",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem saepe, aliquam ex eaque odio incidunt natus laborum unde molestiae!",
            price: 150,
            discountPrice: 20,
            rating: 4,
            stock: 10,
            brand: "Johnny Walker",
            category: "whiskey",
            images: ["https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200"],
            thumbnail: "https://picsum.photos/200",
            createdAt: "2021-09-01T00:00:00.000Z",
            updatedAt: "2021-09-01T00:00:00.000Z",
        },
        {
            _id: "1",
            title: "Red Label",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem saepe, aliquam ex eaque odio incidunt natus laborum unde molestiae!",
            price: 150,
            discountPrice: 20,
            rating: 4,
            stock: 10,
            brand: "Johnny Walker",
            category: "whiskey",
            images: ["https://picsum.photos/200", "https://picsum.photos/200", "https://picsum.photos/200"],
            thumbnail: "https://picsum.photos/200",
            createdAt: "2021-09-01T00:00:00.000Z",
            updatedAt: "2021-09-01T00:00:00.000Z",
        },
    ];

    return (
        <div className="relative h-screen w-96 flex flex-col items-center gap-10 px-10 py-20 bg-white border-4 border-orange-700">
            <button onClick={closeCart} className="absolute top-5 right-5 text-4xl font-bold">
                <IoMdClose />
            </button>

            <h1 className="text-2xl font-bold">ShoppingCart</h1>

            <div className="w-2/3 flex flex-col gap-6">
                {products.map((product) => {
                    return <CartItem product={product} />;
                })}
            </div>

            <button className="absolute bottom-5 p-2 rounded-xl bg-orange-700 border border-orange-700 text-white font-bold hover:text-orange-700 hover:bg-white">
                Confirm Order
            </button>
        </div>
    );
};

export default ShoppingCart;
