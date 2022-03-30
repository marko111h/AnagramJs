const express = require('express')
const app = express()
const port = 20010
app.use(express.static('public'))
app.use(express.json({ limit: '1mb' }))

app.get('/', (req, res) => {
  res.send('Hello World, from express')
})

app.get('/anagram/:value1/:value2', (req, res) => {
  const one = req.params['value1']
  const two = req.params['value2']

  const x = one.toLowerCase().split('').sort().join('')
  const y = two.toLowerCase().split('').sort().join('')

  if (x.length === y.length) {
    for (i = 0; i < x.length; i++) {
      if (x[i] !== y[i]) {
        return res.send('nije Anagram!')
      }
    }
  } else {
    return res.send('Reci nisu iste duzine!')
  }

  return res.send('Anagram!!!!!')
})

app.post('/api', (req, res) => {
  console.log(req.body)
  req.json({
    status: 'success',
    latitude: lat,
    longitude: lon,
  })
})

app.post('/apia/:value1/:value2', (req, res) => {
  const one = req.params['value1']
  const two = req.params['value2']

  const x = one.toLowerCase().split('').sort().join('')
  const y = two.toLowerCase().split('').sort().join('')

  if (x.length === y.length) {
    for (i = 0; i < x.length; i++) {
      if (x[i] !== y[i]) {
        return res.send('nije Anagram!')
      }
    }
  } else {
    return res.send('Reci nisu iste duzine!')
  }

  return res.send('Anagram!!!!!')
})

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
)
