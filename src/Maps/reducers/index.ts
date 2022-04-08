export interface IMapState {
    coordinates: Array<number>;
}

const initialState: IMapState = {
    coordinates: [55.849767, 37.438906]
}

export const mapReducer = (state = initialState, action = {}): IMapState => {
    return state;
}