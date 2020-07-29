import { createSelector } from 'reselect';

export const flightsDataSelector = state => state.flights.flightsList;
export const filteredTextSelector = state => state.flights.filteredText;
export const scoreboardDepartureSelector = state => state.flights.departureActive;
export const scoreboardArrivalSelector = state => state.flights.arrivalActive;

export const filteredFlightsSelector = createSelector(
    [flightsDataSelector, filteredTextSelector],
    (flightsList, filteredText) =>
        flightsList.filter((elem) => {
            return (
                elem.flight.toLowerCase().includes(filteredText.toLowerCase()) ||
                elem.airlineName.toLowerCase().includes(filteredText.toLowerCase()) ||
                elem.destination.toLowerCase().includes(filteredText.toLowerCase())
            );
        })
)