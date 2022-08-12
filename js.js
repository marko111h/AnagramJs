const form = document.getElementById("foruum");
function handleForm(event) {
  event.preventDefault();
  myFunction();
}
form.addEventListener("submit", handleForm);

function myFunction() {
  const firstWord = document.getElementById("prvaRec").value;
  const secoundWord = document.getElementById("drugaRec").value;
  const api_url = `https://v-anagram.vercel.app/anagram/:${firstWord}/:${secoundWord}`;

  fetch(api_url, {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      console.log(response);
      return response.text();
    })
    .then((text) => {
      console.log(text);
      document.getElementById("daLiJeAnagaram").innerHTML = text;
    })
    .catch((err) => {
      console.log("Error Reading data " + err);
    });
}
