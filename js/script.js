console.log("script.js loaded");

const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=PxIse2jVAb5ZFYHH1L3ULM4L8X2FrGP9&q=chemistry&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

// let images = fetch(endpoint);
// console.log(images);

// declares an async funcion so it can use await and always returns a Promise
async function getGiphyURLs() {
    // sends an HTTP GET request and pauses until the server responds
    // response is a Response object w headers and body stream that hasn't been read yet
    const response = await fetch(endpoint);
    // reads the Response object body and parses it as JSON into a JS object
    const data = await response.json();
    console.log(data);
    // reads the data JSON and stores the image URLs in a list
    const images = [];
    for (let i = 0; i <= 25; i++) {
        images[i] = data[0].images.fixed_height_small.url
    }
    // preview the images array in the console
    console.log(images);

    return images
}

const gifContainer = document.querySelector("#gif-container");

const button = document.querySelector("#fetch-gif-btn");

button.addEventListener("click", function() {
    getGiphyURLs();
    gifContainer.innerHTML += `<img src="${IMAGE_URL_GOES_HERE}" class="col-3 mb-3">`;
});


