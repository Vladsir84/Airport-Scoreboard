import { fetchAirportData } from './scoreboard.gateway';

export const FLIGHTS_LIST_RECIEVED = 'FLIGHT_LIST_RECIEVED';

export const flightsListRecieved = (flightsList) => {
    return {
        type: FLIGHTS_LIST_RECIEVED,
        payload: {
            flightsList,
        },
    };
};


export const getFlightsList = () => {
    const thunkAction = function(dispatch) {
        fetchAirportData().then((data) => {
            dispatch(
                flightsListRecieved(
                    data.body.flightsList.map((elem) => {
                        return {
                            id: elem.ID,
                            terminal: elem.term,
                            localTime: elem.actual,
                            destination: elem['airportFromID.name_en'],
                            status: elem.status,
                            airlineLogo: elem.airline.en.logoName,
                            airlineName: elem.airline.en.name,
                            flight: elem.codeShareData[0].codeShare,
                        };
                    })
                )
            );
        });
    };
    return thunkAction;
};