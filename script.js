function fetchDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random") // Call API
        .then(response => response.json()) // Convert response to JSON
        .then(data => {
            document.getElementById("dogImage").src = data.message; // Set image source
        })
        .catch(error => console.error("Error fetching dog image:", error)); // Handle errors
}

// Run function when the page loads
fetchDogImage();

// Add event listener to button to fetch a new image on click
document.getElementById("newDogButton").addEventListener("click", fetchDogImage);