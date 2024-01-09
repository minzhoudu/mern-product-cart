import { CreateOrderDto } from "../Dto/orderDto";
import Order from "../models/Order";
import Product from "../models/Product";

export const getById = async (orderId: string) => {
    return await Order.findById(orderId);
};

export const createNewOrder = async (order: CreateOrderDto) => {
    const prodlen = order.products.length;

    return await Order.create({
        products: order.products,
        totalProducts: order.products.length,
        totalQuantity: calculateTotalQuantity(order),
        total: await calculateTotalPrice(order),
        discountedTotal: order.discountedTotal,
    });
};

export const updateOrder = async (orderId: string) => {};

const calculateTotalQuantity = (order: CreateOrderDto) => {
    return order.products.reduce((acc, product) => acc + product.quantity, 0);
};

const calculateTotalPrice = async (order: CreateOrderDto) => {
    let totalPrice = 0;

    for (let product of order.products) {
        const currProduct = await Product.findById(product.productId);
        
        if (!currProduct?.price) continue;
        totalPrice += currProduct?.price * product.quantity;
    }

    return totalPrice;
};
