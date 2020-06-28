import { FLIGHTS_LIST_RECIEVED } from './scoreboard.actions';

const initialState = {
    flightsList: '',
};

const flightsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FLIGHTS_LIST_RECIEVED:
            return {
                ...state,
                flightsList: action.payload.flightList,
            };
        default:
            return state;
    }
}

export default flightsReducer;