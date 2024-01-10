import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectProduct } from "../state/product/productSelector";
import ProductTile from "../components/ProductTile";
import { AppDispatch } from "../state/store";
import { setProductsAsync } from "../state/product/productSlice";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
    const products = useSelector(selectProduct);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(setProductsAsync());
    }, [dispatch]);

    return (
        <div className="flex flex-wrap  gap-x-16 gap-y-20 p-20">
            {products.map((product) => {
                return <ProductTile key={product._id} product={product} />;
            })}
        </div>
    );
};

export default Home;
