import {ActionTypes} from '../actionTypes';

export const setProducts  = (products) =>{
    return{
        type: ActionTypes.SET_DATA,
        payload: {products}
    }
}