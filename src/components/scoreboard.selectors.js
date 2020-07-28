import { createSelector } from 'reselect';

export const flightsDataSelector = state => state.flights.flightsList;

export const filteredTextSelector = state => state.flights.filteredText;

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