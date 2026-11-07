console.log("script.js loaded");

// const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=PxIse2jVAb5ZFYHH1L3ULM4L8X2FrGP9&q=" + searchInput + "&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

// declares an async function so it can use await and always returns a Promise
async function getGiphyURLs() {
    const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=PxIse2jVAb5ZFYHH1L3ULM4L8X2FrGP9&q=" + searchInput.value + "&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";
    // sends an HTTP GET request and pauses until the server responds
    // response is a Response object w headers and body stream that hasn't been read yet
    const response = await fetch(endpoint);
    // reads the Response object body and parses it as JSON into a JS object
    const data = await response.json();
    // preview the JSON in the console
    console.log(data);
    // reads the data JSON and iteratively stores each image URL to the imagesURLs array
    const imagesURLs = [];
    for (let i = 0; i < data.data.length; i++) {
        imagesURLs.push(data.data[i].images.fixed_height_small.url);
    }
    // preview the imagesURLs array in the console
    console.log(imagesURLs);

    // returns the imagesURLs array
    return imagesURLs;
}

const searchInput = document.querySelector("#search-input");

const gifContainer = document.querySelector("#gif-container");

const button = document.querySelector("#fetch-gif-btn");

// event handler calls async function so it can use await
button.addEventListener("click", async function() { 
    console.log(searchInput.value);
    // calls the function and pauses until the server responds
    const images = await getGiphyURLs();
    for (let i = 0; i < images.length; i++) {
        gifContainer.innerHTML += `<img src="${images[i]}" class="col-3 mb-3">`;
    };
});

