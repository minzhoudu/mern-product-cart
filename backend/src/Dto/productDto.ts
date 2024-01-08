export interface CreateProductDto {
    title: string;
    description?: string;
    price: number;
    discountPrice?: number;
    rating: number;
    stock: number;
    brand?: string;
    category?: string;
    thumbnail?: string;
    images: string[];
}

export interface UpdateProductDto {
    title?: string;
    description?: string;
    price?: number;
    discountPrice?: number;
    rating?: number;
    stock?: number;
    brand?: string;
    category?: string;
    thumbnail?: string;
    images?: string[];
}
