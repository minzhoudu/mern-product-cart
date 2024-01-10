export interface CartItem {
    _id: string;
    title: string;
    description?: string;
    quantity: number;
    price: number;
    totalPrice: number;
    discountPrice?: number;
    rating: number;
    stock: number;
    brand?: string;
    category?: string;
    thumbnail?: string;
    images: string[];

    createdAt: string;
    updatedAt: string;
}
