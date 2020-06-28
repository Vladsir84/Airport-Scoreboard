import moment from 'moment';

const baseUrl = 'https://api.iev.aero/api/flights';

const date = moment().format('DD-MM-YYYY');

export const fetchAirportData = () =>
    fetch(`${baseUrl}/${date}`)
    .then((response) => response.json());