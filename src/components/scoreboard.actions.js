import { fetchAirportData } from './scoreboard.gateway';

export const ARRIVAL_LIST_RECIEVED = 'SCOREBOARD/ARRIVAL_LIST_RECIEVED';
export const DEPARTURE_LIST_RECIEVED = 'SCOREBOARD/DEPARTURE_LIST_RECIEVED';


export const arrivalListRecieved = (arrival) => {
    return {
        type: ARRIVAL_LIST_RECIEVED,
        payload: {
            arrival,
        },
    };
};


export const departureListRecieved = (departure) => {
    return {
        type: DEPARTURE_LIST_RECIEVED,
        payload: {
            departure,
        },
    };
};

export const getArrivalList = () => {
    const thunkAction = (dispatch) => {
        fetchAirportData().then((data) => {
            dispatch(
                arrivalListRecieved(
                    data.body.arrival.map((elem) => {
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
}

export const getDepartureList = () => {
    const thunkAction = (dispatch) => {
        fetchAirportData().then((data) => {
            dispatch(
                departureListRecieved(
                    data.body.departure.map((elem) => {
                        return {
                            id: elem.ID,
                            terminal: elem.term,
                            localTime: elem.actual,
                            destination: elem['airportToID.name_en'],
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
}