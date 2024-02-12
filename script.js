import { upvote } from "./upvote.js";

const url = "https://api.thecatapi.com/v1/images/search";
const api_key =
  "live_giPVs1sO5rpWpBhFrYIEKGymNemqy6fMJXLJnvd9kMO3tRINAeIVXJvgSBIh8S0f";
let userInput = document.getElementById("userInput");
const container = document.getElementById("container");

button.addEventListener("click", () => {
  container.innerHTML = "";
  console.log(userInput.value);
  getImages(userInput.value);
});

// async function getImage() {
//   try {
//     const response = await fetch(url, {
//       headers: {
//         "x-api-key": api_key,
//       },
//     });
//     const json = await response.json();
//     createAndAppend(json[0].url);
//     // let pic = document.createElement("img");
//     // pic.src = `${json[0].url}`;
//     // document.getElementById("container").appendChild(pic);
//   } catch (err) {
//     console.log(err);
//   }
// }

function createAndAppend(imgObj) {
  let picContainer = document.createElement("div");
  document.getElementById("container").appendChild(picContainer);

  let pic = document.createElement("img");
  picContainer.appendChild(pic);

  let upvoteButton = document.createElement("button");
  upvoteButton.innerHTML = "upvote";
  picContainer.appendChild(upvoteButton);

  upvoteButton.addEventListener("click", () => {
    upvote(imgObj.id);
  });

  pic.src = imgObj.url;
}

async function getImages(val) {
  let multiUrl = `https://api.thecatapi.com/v1/images/search?limit=${val}`;
  try {
    const response = await fetch(multiUrl, {
      headers: {
        "x-api-key": api_key,
      },
    });
    let json = await response.json();
    json = json.slice(0, parseInt(val));
    for (let picture of json) {
      createAndAppend(picture);
    }
    // createAndAppend(json[0].url);
    // let pic = document.createElement("img");
    // pic.src = `${json[0].url}`;
    // document.getElementById("container").appendChild(pic);
  } catch (err) {
    console.log(err);
  }
}
