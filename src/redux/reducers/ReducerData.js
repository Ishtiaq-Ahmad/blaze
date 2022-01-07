import {ActionTypes} from '../actionTypes';

const initialState = {
  name:'ahmad',
}

export const ReducerData = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_DATA:
        return {...state, name: payload};
        default:
        return state;
    }
} 