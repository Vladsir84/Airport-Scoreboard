const baseUrl = 'https://api.iev.aero/api/flights';


export const fetchAirportData = () =>
    fetch(`${baseUrl}`)
    .then(response => response.json());
        // {
        // if (response.ok) {
        //     return response.json();
        // }
        // throw new Error("Failed to download")
    // });
    
