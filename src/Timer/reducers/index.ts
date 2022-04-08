import {TimeAction, TimeActionTypes} from "../actions";

export interface ITimeState {
    startTime: number;
}

const initialState: ITimeState = {
    startTime: 0
}

export const timeReducer = (state = initialState, action: TimeAction): ITimeState => {
    switch (action.type) {
        case TimeActionTypes.SET_START_TIME:
            return {
                ...state,
                startTime: action.payload
            }
        default:
            return state;
    }
}