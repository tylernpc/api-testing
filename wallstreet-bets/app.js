const apiEndpoint = 'https://tradestie.com/api/v1/apps/reddit';

async function fetchRedditSentiment(date = '') {
    try {
        const url = date ? `$(apiEndpoint)?date=${date}` : apiEndpoint;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`)
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

fetchRedditSentiment();
