import { ActionTree } from 'vuex';
import { ProductsState } from './state';
import { StateInterface } from '../index';
import axios from "axios";
import { Products } from '@/interfaces/products';



const actions: ActionTree<ProductsState, StateInterface> = {

    async fetchProducts({commit}) {
        const baseUrl = 'http://localhost:3000';
        const url = `${baseUrl}/products`;
        await axios.get<Products[]>(url)
        .then(function (response) {
            console.log(`products call success`);
            const data = response && response.data;
            commit('setProducts', data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}
export default actions;