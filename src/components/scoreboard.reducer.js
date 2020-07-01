import { ARRIVAL_LIST_RECIEVED, DEPARTURE_LIST_RECIEVED } from './scoreboard.actions';

const initialState = {
    flightsList: [],
    flightsArrivalList: false,
    flightsDepartureList: false,
};

const flightsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ARRIVAL_LIST_RECIEVED:
            {
                return {
                    ...state,
                    flightsList: action.payload.arrival,
                    flightsArrivalList: true,
                    flightsDepartureList: false,
                };
            }

        case DEPARTURE_LIST_RECIEVED:
            {
                return {
                    ...state,
                    flightsList: action.payload.departure,
                    flightsArrivalList: false,
                    flightsDepartureList: true,
                };
            }

        default:
            return state;
    }
};

export default flightsReducer;