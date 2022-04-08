import {createStore, combineReducers} from 'redux';
import {mapReducer} from "../Maps/reducers";
import {timeReducer} from "../Timer/reducers";

export const reducers = combineReducers({
    map: mapReducer,
    timer: timeReducer
});

type ReducerType = typeof reducers;
export type AppStateType = ReturnType<ReducerType>;

const store = createStore(reducers);

// @ts-ignore
window.store = store;

export default store;
