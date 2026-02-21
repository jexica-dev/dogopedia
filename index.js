const API_KEY =
  'live_mGY0PLa87DEnvuHyKr0Jy5Zk95V44Vb3ZdArGkYPQ6sV1oRlAmGRwc2f59cyv6GU';

const dogList = document.getElementById('dogList');

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
