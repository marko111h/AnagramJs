const express = require('express');
const app = express();
const port = 20010;
const cors = require('cors');

app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));
app.use(
  cors({
    origin: '*',
  })
);

app.get('/', (req, res) => {
  res.send('Hello World, from express');
});

app.get('/anagram/:value1/:value2', (req, res) => {
  const one = req.params['value1'];
  const two = req.params['value2'];

  const x = one.toLowerCase().split('').sort().join('');
  const y = two.toLowerCase().split('').sort().join('');
  if (x === y) {
    return res.send('Anagram!!!!!');
  } else {
    return res.send('nije Anagram!');
  }
});

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
