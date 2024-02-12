const api_key =
  "live_giPVs1sO5rpWpBhFrYIEKGymNemqy6fMJXLJnvd9kMO3tRINAeIVXJvgSBIh8S0f";

import { createAndAppend } from "./script.js";

export async function getImages(val) {
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
