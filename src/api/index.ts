// My testing Data Key
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
        'X-RapidAPI-Key': '9ac1369d29msh7ca84b20da21ec7p108284jsne37b8bb55b02'
    }
};

export async function fetchApi(url: string) {
    return fetch(url, options)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));
}; 