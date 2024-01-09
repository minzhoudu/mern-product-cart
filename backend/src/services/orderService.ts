import { CreateOrderDto } from "../Dto/orderDto";
import Order from "../models/Order";
import Product from "../models/Product";

export const getById = async (orderId: string) => {
    return await Order.findById(orderId);
};

export const createNewOrder = async (order: CreateOrderDto) => {
    let total = 0;
    let discountedTotal = 0;

    for (let orderProduct of order.products) {
        const currentProduct = await Product.findById(orderProduct.productId);
        if (!currentProduct?.price) continue;

        const productDiscountedPrice = calculateDiscountedPrice(currentProduct.price, currentProduct.discountPrice);

        total += currentProduct.price * orderProduct.quantity;
        discountedTotal += productDiscountedPrice * orderProduct.quantity;
    }

    return await Order.create({
        products: order.products,
        totalProducts: order.products.length,
        totalQuantity: calculateTotalQuantity(order),
        total,
        discountedTotal,
    });
};

//TODO
export const updateOrder = async (orderId: string) => {};
export const deleteOrder = async (orderId: string) => {};

const calculateTotalQuantity = (order: CreateOrderDto) => {
    return order.products.reduce((acc, product) => acc + product.quantity, 0);
};

const calculateDiscountedPrice = (originalPrice: number, discountPercentage: number | null | undefined) => {
    if (!discountPercentage) return originalPrice;

    return originalPrice - (originalPrice * discountPercentage) / 100;
};
