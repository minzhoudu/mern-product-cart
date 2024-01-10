import { FC } from "react";
import ProductTile from "../components/ProductTile";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
    return (
        <div className="flex flex-wrap gap-20 w-screen p-20">
            <ProductTile />
            <ProductTile />
            <ProductTile />
            <ProductTile />
            <ProductTile />
            <ProductTile />
            <ProductTile />
            <ProductTile />
            <ProductTile />
        </div>
    );
};

export default Home;
