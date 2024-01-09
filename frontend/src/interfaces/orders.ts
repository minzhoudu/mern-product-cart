export interface Order {
    _id: string;
    products: [
        {
            productId: string;
            quantity: number;
        }
    ];
    totalProducts: number;
    totalQuantity: number;
    total: number;
    discountedTotal: number;

    createdAt: string;
    updatedAt: string;
}
