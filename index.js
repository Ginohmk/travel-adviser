import { travelJson } from './travel_recommendation.js';

const searcBtn = document.querySelector('#search-btn');
const clearBtn = document.querySelector('#clear-btn');
const searchInput = document.querySelector('#search-input');
const ParentSearchValue = document.querySelector('#search-value-con');

let searchInputHolder;
let searchResult = [];

// Dynamic render Search val
const renderSearchResult = (data, userInput) => {
  let innerSearchValue;

  if (data.length === 0) {
    alert(
      'Result not found, you can search for beaches, countries and temples'
    );
    innerSearchValue = ``;
  } else {
    let displayValue = [...data];

    if (userInput === 'countries') {
      displayValue = [];
      let val = data.map(({ cities }) => cities);
      val.forEach((el) => el.forEach((elInner) => displayValue.push(elInner)));
    }

    innerSearchValue = displayValue.map(
      ({ name, id, imageUrl, description }) => `
     <div class="search-value__item">
     <div class="search-value__item-img-con">
       <img src=${imageUrl} alt=${name} />
     </div>

     <div class="search-value__item-content">
       <h3>${name}</h3>
       <p>
         ${description}
       </p>
       <a href="#" class="search-value__item-btn">view</a>
     </div>
   </div>
`
    );
  }
  ParentSearchValue.innerHTML = innerSearchValue;
};

searchInput.addEventListener('input', (event) => {
  searchInputHolder = event.target;
});

searcBtn.addEventListener('click', () => {
  // Search for match in travelJson
  searchResult = [];
  let userInput = searchInputHolder.value.trim().toLowerCase();

  if (userInput !== '') {
    Object.entries(travelJson).forEach(([key, value]) => {
      if (key === userInput) {
        searchResult.push({ [key]: value });
      }
    });

    let data = searchResult.length > 0 ? searchResult[0][`${userInput}`] : [];

    renderSearchResult(data, userInput);
  } else {
    alert('Search input is empty!!');
  }
});

clearBtn.addEventListener('click', () => {
  searchInputHolder.value = '';
  searchResult = [];
  renderSearchResult([]);
});
