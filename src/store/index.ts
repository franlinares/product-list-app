import { createStore } from 'vuex';
import productsModule from './products';
import { ProductsState } from './products/state';
export interface StateInterface {
  products: ProductsState,
}

export default createStore<StateInterface>({
  modules: {
    products: productsModule,
  }
});
