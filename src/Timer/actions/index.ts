import {ActionsUnion} from "../../App/types";
import {createAction} from "../../App/actions/helpers";

export enum TimeActionTypes {
    SET_START_TIME = 'TIMER/SET_START_TIME',
}

export const TimeActions = {
    setStartTime: (payload: number) => createAction(TimeActionTypes.SET_START_TIME, payload),
};

export type TimeAction = ActionsUnion<typeof TimeActions>;