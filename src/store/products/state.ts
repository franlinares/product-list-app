import { Products } from '@/interfaces/products';

export interface ProductsState {
  products: Products[],
}

function state(): ProductsState {
    return {
      products: [],
    }
}

export default state;