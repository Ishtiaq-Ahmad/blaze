import {combineReducers} from 'redux';
import {ReducerData} from './ReducerData';

const reducers = combineReducers({
    allProducts: ReducerData,
})

export default reducers