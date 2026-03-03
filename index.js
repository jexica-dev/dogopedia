const API_KEY =
  'live_mGY0PLa87DEnvuHyKr0Jy5Zk95V44Vb3ZdArGkYPQ6sV1oRlAmGRwc2f59cyv6GU';

const dogList = document.getElementById('dogList');
const projectSection = document.getElementById('projects');

function loadDogLibrary() {
  dogList.innerHTML = '';

  fetch('https://api.thedogapi.com/v1/breeds', {
    headers: { 'x-api-key': API_KEY },
  })
    .then((response) => response.json())
    .then((data) => {
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
    })
    .catch((error) => ((console.error = 'Error:'), error));
}

function showDogDetails(breed) {
  projectSection.innerHTML = `
    <div class="detail-container">
    <img src="${breed.image.url}" alt="${breed.name}" class="detail-img" />
    <div class="detail-text">
      <h2>${breed.name}</h2>
      <p>
        <strong>Temperament:</strong> ${breed.temperament || 'Friendly'}
      </p>
      <p><strong>Life Span:</strong> ${breed.life_span}</p>
      <p><strong>Weight:</strong> ${breed.weight.imperial} lbs</p>
    <button id="backBtn" class="back-btn">back</button>

    </div>

  </div>
  `;
  const backBtn = document.getElementById('backBtn');
  backBtn.addEventListener('click', () => {
    location.reload();
  });
}

loadDogLibrary();
