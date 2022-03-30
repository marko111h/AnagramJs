const form = document.getElementById('foruum')
function handleForm(event) {
  event.preventDefault()
}
form.addEventListener('submit', handleForm)
const rez = 0
function myFunction() {
  const x = document.getElementById('prvaRec').value
  const y = document.getElementById('drugaRec').value

  const data = { username: 'example' }
  const api_url = 'http://localhost:20010/anagram/:value1/:value2'
  //console.log(fetch('http://localhost:20010/anagram'))

  fetch('http://example.com/movies.json')
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((data) => {
      // Work with JSON data here
      console.log(data)
    })
    .catch((err) => {
      // Do something for an error here
      console.log('Error Reading data ' + err)
    })
  /*async function getapi(url) {
    const response = await fetch(url)

    var data = await response.json()
    console.log(data)
  }
  getapi(api_url)
*/
  /* fetch('/localhost:20010/apia/:value1/:value2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.error('Error', error)
    })
}

/*const data = { asd, asd }
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
  fetch('/api', options)
}*/
}
