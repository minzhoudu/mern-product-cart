import { FC } from "react";
import Order from "../components/Order";

interface OrdersProps {}

const Orders: FC<OrdersProps> = () => {
    return (
        <div className="flex flex-col items-center gap-10 p-20">
            <Order />
            <Order />
            <Order />
            <Order />
        </div>
    );
};

export default Orders;
