const apiEndpoint = 'https://partners.api.skyscanner.net/apiservices/v3/flights/live/search/create';

const requestData = {
    "market": "US",
    "currency": "USD",
    "locale": "en-US",
    "originPlace": "SFO-sky",
    "destinationPlace": "LON-sky",
    "outboundDate": "2023-12-01",
    "adults": 1
};

fetch(apiEndpoint, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestData)
}).then(response => {
    // check if the request was successful (status code 2xx)
    if (response.ok) {
        // parse and log the json response
        return response.json();
    } else {
        // log an error message if the request was unsuccessful
        console.error(`Error: ${response.status}`);
    }
}).then(data => {
    // do something with the response data
    console.log('Response:', data);
}).catch(error => {
    // log any errors that occurred during the fetch
    console.error('Fetch error:', error);
});
