import { ARRIVAL_LIST_RECIEVED, DEPARTURE_LIST_RECIEVED, FILTERED_TEXT } from './scoreboard.actions';

const initialState = {
    flightsList: [],
    filteredText: '',
};

const flightsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ARRIVAL_LIST_RECIEVED:
            {
                return {
                    ...state,
                    flightsList: action.payload.arrival,
                };
            }

        case DEPARTURE_LIST_RECIEVED:
            {
                return {
                    ...state,
                    flightsList: action.payload.departure,
                };
            }

        case FILTERED_TEXT:
            {
                return {
                    ...state,
                    filteredText: action.payload.text,
                };
            }


        default:
            return state;
    }
};

export default flightsReducer;