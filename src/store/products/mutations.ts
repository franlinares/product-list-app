import { MutationTree } from 'vuex';
import { ProductsState } from './state';
import { Products } from '@/interfaces/products';

const mutation: MutationTree<ProductsState> = {
  setProducts( state: ProductsState, products: Products[] ) {
    state.products = products;
  }   
}

export default mutation;