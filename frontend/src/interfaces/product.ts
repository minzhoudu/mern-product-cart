export interface Product {
    _id: string;
    title: string;
    description?: string;
    price: number;
    inventoryQuantity: number;
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
