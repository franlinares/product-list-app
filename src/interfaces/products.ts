export interface ProductsResponse {
  products: Products[];
}

export interface Products {
  id: string;
  category: string;
  description: string;
  discount: Discount;
  isActive: boolean;
  name: string;
  picture: string;
  price: number;
  stock: number;
}

export interface Discount {
  status: boolean;
  value: number;
}

