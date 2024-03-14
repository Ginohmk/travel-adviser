import travelJson from './travel_recommendation_api.json';

const searcBtn = document.querySelector('#search-btn');
const clearBtn = document.querySelector('#clear-btn');
const searchInput = document.querySelector('#search-input');

let searchInputHolder = '';
let searchResult = [];

searchInput.addEventListener('input', (event) => {
  searchInputHolder = event.target.value;
});

searcBtn.addEventListener('click', () => {
  // Search for match in travelJson

  console.log(' Hello ');

  searchResult = Object.entries(travelJson).forEach((key) => {
    if (key === searchInputHolder.toLowerCase()) return { [key]: value };
  });

  console.log(searchResult, ' Search result ');
});
