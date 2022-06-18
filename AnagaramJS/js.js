const form = document.getElementById("foruum");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

function myFunction() {
  const firstWord = window.document.getElementById("prvaRec").value;
  const secoundWord = window.document.getElementById("drugaRec").value;
  const api_url = `http://localhost:20010/anagram/:${firstWord}/:${secoundWord}`;

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
      document.getElementById("daLiJeAnagaram").innerHTML =
        "Error reading data";
    });
}
