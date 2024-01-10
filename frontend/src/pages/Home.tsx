import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectProducts, selectSearchKeyword } from "../state/product/productSelector";
import ProductTile from "../components/ProductTile";
import { AppDispatch } from "../state/store";
import { setProductsAsync } from "../state/product/productSlice";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
    const products = useSelector(selectProducts);
    const searchKeyword = useSelector(selectSearchKeyword);
    const dispatch = useDispatch<AppDispatch>();

    const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(searchKeyword.toLowerCase());
    });

    useEffect(() => {
        dispatch(setProductsAsync());
    }, [dispatch]);

    return (
        <div className="flex flex-wrap p-20">
            {filteredProducts.map((product) => {
                return <ProductTile key={product._id} product={product} />;
            })}
        </div>
    );
};

export default Home;
