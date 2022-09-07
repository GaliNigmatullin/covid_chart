import axios from 'axios';

class ChartService {
    apiURL = 'https://api.covidtracking.com/v1/states/ca/daily.json';
    fetchData = async () => {
        const response = await axios.get(this.apiURL)
        return response.data
    }
}

export default ChartService


// .reverse().map(data=>({
//     //date: (''+ data.date).slice(4,6) + '/' + (''+ data.date).slice(0,4), //20220101
//     date: data.date,
//     positive: data.positive,
//     death: +data.death,
//     recovered: data.recovered
// })) 
// class MarvelService {
//     _apiBase = 'https://gateway.marvel.com:443/v1/public/';
//     // ЗДЕСЬ БУДЕТ ВАШ КЛЮЧ, ЭТОТ КЛЮЧ МОЖЕТ НЕ РАБОТАТЬ
//     _apiKey = 'apikey=c5d6fc8b83116d92ed468ce36bac6c62';

//     getResource = async (url) => {
//         let res = await fetch(url);
    
//         if (!res.ok) {
//             throw new Error(`Could not fetch ${url}, status: ${res.status}`);
//         }
    
//         return await res.json();
//     }

//     getAllCharacters = () => {
//         return this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
//     }

//     getCharacter = (id) => {
//         return this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
//     }
// }

// export default MarvelService;