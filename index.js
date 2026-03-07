const API_KEY =
  'live_mGY0PLa87DEnvuHyKr0Jy5Zk95V44Vb3ZdArGkYPQ6sV1oRlAmGRwc2f59cyv6GU';

// SETUP
const contentArea = document.getElementById('content-area');

// FOOTER
function createFooter() {
  const footer = document.createElement('footer');
  footer.style.padding = '2rem 0';
  footer.style.fontSize = '.85rem';
  footer.style.textAlign = 'center';
  document.body.appendChild(footer);

  const thisYear = new Date().getFullYear();
  const copyright = document.createElement('p');
  copyright.innerHTML = `&copy; JEXICA ${thisYear}. all rights reserved`;
  footer.appendChild(copyright);
}

//  ENDPOINT 1: Breeds Library
async function loadDogLibrary() {
  try {
    // Clear area and show loading state
    contentArea.innerHTML = '<ul id="dogList"><li>Loading breeds...</li></ul>';
    const dogList = document.getElementById('dogList');

    const response = await fetch('https://api.thedogapi.com/v1/breeds', {
      headers: { 'x-api-key': API_KEY },
    });
    const data = await response.json();

    dogList.innerHTML = ''; // Clear loading text
    data.sort((a, b) => a.name.localeCompare(b.name));

    data.forEach((breed) => {
      if (breed.image && breed.image.url) {
        const dogCard = document.createElement('li');
        dogCard.className = 'dog-card';
        dogCard.addEventListener('click', () => showDogDetails(breed));

        dogCard.innerHTML = `
                    <div class="dog-image-container">
                        <img src="${breed.image.url}" alt="${breed.name}">   
                    </div>
                    <p class="dog-name">${breed.name}</p>`;
        dogList.appendChild(dogCard);
      }
    });
  } catch (error) {
    console.error('Library Error:', error);
  }
}

//  DETAIL VIEW
function showDogDetails(breed) {
  contentArea.innerHTML = `
        <div class="detail-container">
            <img src="${breed.image.url}" alt="${breed.name}" class="detail-img" />
            <div class="detail-text">
                <h2>${breed.name}</h2>
                <p><strong>Temperament:</strong> ${breed.temperament || 'Friendly'}</p>
                <p><strong>Life Span:</strong> ${breed.life_span}</p>
                <p><strong>Weight:</strong> ${breed.weight.imperial} lbs</p>
                <button id="backBtn" class="back-btn">back</button>
            </div>
        </div>`;

  document.getElementById('backBtn').addEventListener('click', loadDogLibrary);
}

// ENDPOINT 2: Random Dog Image
async function loadRandomDog() {
  try {
    contentArea.innerHTML =
      '<h2>RANDOM DOG</h2><p>fetching a new friend...</p>';

    const response = await fetch('https://api.thedogapi.com/v1/images/search', {
      headers: { 'x-api-key': API_KEY },
    });
    const data = await response.json();

    // URL from the first item
    const dogImageUrl = data[0].url;

    contentArea.innerHTML = `
      <div class="fact-container" style="display: flex; flex-direction: column; align-items: center;">
        
        <img src="${dogImageUrl}" class="detail-img" />
        

      </div>`;
  } catch (error) {
    console.error('Error:', error);
    contentArea.innerHTML =
      '<p>Error loading image. Click Library to go back.</p>';
  }
}

// NAVIGATION & INITIALIZATION
function init() {
  createFooter();
  loadDogLibrary();

  const navLibrary = document.getElementById('nav-library');
  const navFacts = document.getElementById('nav-facts');
  if (navFacts) navFacts.addEventListener('click', loadRandomDog);

  if (navLibrary) navLibrary.addEventListener('click', loadDogLibrary);
  if (navFacts) navFacts.addEventListener('click', loadDogFact);
}

init();
