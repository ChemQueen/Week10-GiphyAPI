console.log("script.js loaded");

const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=PxIse2jVAb5ZFYHH1L3ULM4L8X2FrGP9&q=chemistry&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

// let images = fetch(endpoint);
// console.log(images);

// declares an async funcion so it can use await and always returns a Promise
async function getGiphy() {
    // send an HTTP GET request and pauses until the server responds
    // response is a Response object w headers and body stream that hasn't been read yet
    const response = await fetch(endpoint);
    // reads the Response object body and parses it as JSON into a JS object
    const images = await response.json();
    console.log(images);
}

getGiphy()

