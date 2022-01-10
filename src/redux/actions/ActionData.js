import {ActionTypes} from '../actionTypes';

export const setProducts  = (products) =>{
    return{
        type: ActionTypes.SET_DATA,
        payload: {products}
    }
}
export const handleOpenMenu = () => {
    return {
        type: ActionTypes.GRID_OPEN_CLOSE,
        
    }
}