const api_key =
  "live_giPVs1sO5rpWpBhFrYIEKGymNemqy6fMJXLJnvd9kMO3tRINAeIVXJvgSBIh8S0f";

export async function upvote(num) {
  const response = await fetch(`https://api.thecatapi.com/v1/votes`, {
    method: "POST",
    headers: {
      "x-api-key": api_key,
    },
    body: {
      image_id: num,
      value: 1,
    },
  }).then(alert("Thanks for the vote!"));
}
