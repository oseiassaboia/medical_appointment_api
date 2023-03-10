import express from 'express'

const app = express()

const hostname = '127.0.0.1';
const port = 3333;

app.get('/', (req, res) => {
  return res.send('Hello World')
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})
