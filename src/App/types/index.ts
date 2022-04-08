type FunctionType = (...args: any[]) => void;
type ActionCreatorsMapObject = {[actionCreator: string]: FunctionType};

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;