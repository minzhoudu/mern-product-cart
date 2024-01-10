import { FC } from "react";
import { Order as IOrder } from "../interfaces/orders";

interface OrderProps {}

const Order: FC<OrderProps> = () => {
    const order: IOrder = {
        _id: "1234567890",
        products: [
            {
                quantity: 3,
                productId: "1234567890",
            },
        ],
        discountedTotal: 2300,
        total: 2500,
        totalProducts: 4,
        totalQuantity: 12,
        createdAt: "somedate",
        updatedAt: "somedate",
    };

    return (
        <div className="flex flex-col items-center border rounded-3xl py-5 border-red-700 w-1/4">
            <h1 className="font-bold text-xl">Order 1</h1>

            <div className="flex flex-col gap-2">
                <h2>Total Products: {order.totalProducts}</h2>
                <h2>Total Quantity: {order.totalQuantity}</h2>
                <h2>
                    Total Price: <span className="line-through">${order.total}</span> ${order.discountedTotal}
                </h2>

                <button className="bg-red-500 self-center border border-red-500 text-white font-bold w-2/3 p-1 rounded-md hover:bg-white hover:text-red-500">
                    Cancel Order
                </button>
            </div>
        </div>
    );
};

export default Order;
