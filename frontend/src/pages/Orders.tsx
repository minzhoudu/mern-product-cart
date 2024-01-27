import { FC, useEffect } from "react";
import Order from "../components/Order";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../state/store";
import { selectOrders } from "../state/order/orderSelector";
import { setOrdersAsync } from "../state/order/orderSlice";

interface OrdersProps {}

const Orders: FC<OrdersProps> = () => {
    const orders = useSelector(selectOrders);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        if (orders.length) return;

        dispatch(setOrdersAsync());
    }, [dispatch, orders.length]);

    return (
        <div className="flex flex-col items-center gap-10 p-20">
            {orders.map((order) => {
                return <Order key={order._id} order={order} />;
            })}
        </div>
    );
};

export default Orders;
