import { FC } from "react";
import { Order as IOrder } from "../interfaces/orders";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../state/store";
import { cancelOrderAsync } from "../state/order/orderSlice";

interface OrderProps {
    order: IOrder;
}

const Order: FC<OrderProps> = ({ order }) => {
    const dispatch = useDispatch<AppDispatch>();
    const cancelOrderHandler = () => {
        dispatch(cancelOrderAsync(order._id));
    };

    return (
        <div className="flex flex-col items-center border rounded-3xl py-5 border-red-500 w-1/4">
            <h1 className="mb-2 font-bold text-xl text-red-500">Order: {order._id}</h1>

            <div className="flex flex-col gap-2 font-semibold">
                <h2>Total Products: {order.totalProducts}</h2>
                <h2>Total Quantity: {order.totalQuantity}</h2>
                <h2>
                    Total Price: <span className="line-through">${order.total}</span> $
                    {order.discountedTotal.toFixed(1)}
                </h2>

                <button
                    onClick={cancelOrderHandler}
                    className="bg-red-500 self-center border border-red-500 text-white font-bold p-1 rounded-md hover:bg-white hover:text-red-500"
                >
                    Cancel Order
                </button>
            </div>
        </div>
    );
};

export default Order;
