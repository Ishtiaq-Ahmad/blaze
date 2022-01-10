import {ActionTypes} from '../actionTypes';

const initialState = {
  name:'ahmad',
  gridOpen: true,
}

export const ReducerData = (state = initialState, {type, payload}) => {
  
    switch(type) {
        case ActionTypes.SET_DATA:
        return {...state, name: payload};
        
        case ActionTypes.GRID_OPEN_CLOSE:
        return{
          ...state,
          gridOpen: !state.gridOpen,
        }
        default:
        return state;
    }
} 