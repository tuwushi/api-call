const loadCatButton = document.getElementById('load-cat');
const catImage = document.getElementById('cat-image');
const catName = document.getElementById('cat-name');
const catOrigin = document.getElementById('cat-origin');
const catDescription = document.getElementById('cat-description');

const API_URL = 'https://api.thecatapi.com/v1/breeds';

async function fetchRandomCat() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    
    // Get a random cat breed from the list
    const randomBreed = data[Math.floor(Math.random() * data.length)];

    // Display cat info
    catImage.src = randomBreed.image ? randomBreed.image.url : '';
    catImage.style.display = randomBreed.image ? 'block' : 'none';
    catName.textContent = `Name: ${randomBreed.name}`;
    catOrigin.textContent = `Origin: ${randomBreed.origin}`;
    catDescription.textContent = `Description: ${randomBreed.description}`;
  } catch (error) {
    console.error("Error fetching cat data:", error);
  }
}

// Load a new cat when the button is clicked
loadCatButton.addEventListener('click', fetchRandomCat);

// Load a random cat on initial page load
fetchRandomCat();