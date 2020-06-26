import { fetchAirportData } from "./scoreboard.gateway";

export const FLIGHTS_LIST_RECIEVED = 'FLIGHT_LIST_RECIEVED';

export const flightsListRecieved = (flightsList) => {
    return {
        type: FLIGHTS_LIST_RECIEVED,
        payload: {
            flightsList,
        },
    };

};

export const getFlightsList = (elem) => {
    return function (dispatch) {
        fetchAirportData(elem)
            .then(flightsList => {
                dispatch(flightsListRecieved(flightsList));
            });
    }

};

