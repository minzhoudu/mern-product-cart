import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Product } from "../interfaces/product";

interface ProductTileProps {
    product: Product;
}

const ProductTile: FC<ProductTileProps> = ({ product }) => {
    return (
        <NavLink to={`/product/${1}`} className="max-w-72">
            <img className="rounded-t-lg h-96" src="https://dummyimage.com/300x400/000/fff" alt="productImg" />

            <div className="flex flex-col gap-3 border-l-2 border-r-2 border-b-2 rounded-b-lg">
                <div className="flex flex-row justify-between px-2 text-xl">
                    <h2>{product.title}</h2>
                    <h2>$150</h2>
                </div>

                <p className=" min-h-28 p-2 text-ellipsis line-clamp-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatem cum ratione voluptatum
                    excepturi officiis alias commodi. Ab, iure tempore?Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Iure voluptatem cum ratione voluptatum excepturi officiis alias commodi. Ab, iure
                    tempore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatem cum ratione
                    voluptatum excepturi officiis alias commodi. Ab, iure tempore?Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Iure voluptatem cum ratione voluptatum excepturi officiis alias commodi. Ab, iure
                    tempore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatem cum ratione
                    voluptatum excepturi officiis alias commodi. Ab, iure tempore?Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Iure voluptatem cum ratione voluptatum excepturi officiis alias commodi. Ab, iure
                    tempore?
                </p>

                <button className="p-2 mb-2 w-3/5 place-self-center bg-orange-700 rounded-lg text-white font-bold border border-orange-700 hover:bg-white hover:text-orange-700">
                    Add to cart
                </button>
            </div>
        </NavLink>
    );
};

export default ProductTile;
