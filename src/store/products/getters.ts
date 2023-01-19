import { GetterTree } from "vuex";
import { ProductsState } from "./state";
import { StateInterface } from "../index";
import { Products } from "@/interfaces/products";

const getters: GetterTree<ProductsState, StateInterface> = {
  getProductsList(state: ProductsState): Products[] {
    return state.products;
  },
  getProductsSortedMinor(state: ProductsState, getters): Products[] {
    return getters.getProductsList.sort(
      (a: Products, b: Products) => a.price - b.price
    );
  },
  getProductsSortedMajor(state: ProductsState, getters): Products[] {
    return getters.getProductsList.sort(
      (a: Products, b: Products) => b.price - a.price
    );
  },
  getProductsWithDiscount(state: ProductsState, getters): Products[] {
    let productsFiltered = []
    productsFiltered = getters.getProductsList.filter(
      (filter: Products) => filter.discount && filter.discount.status === true
    );
    return productsFiltered.sort(
      (a: Products, b: Products) => a.discount.value - b.discount.value
    );
  }
};

export default getters;
