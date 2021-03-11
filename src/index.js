const express = require('express');

const app = express();

app.use(express.json())

app.get('/', (request, response) => {
  return response.json({ messages: 'Hello Word' });
})


app.listen(3333, () => {
  console.log('server started on port 3333')
})

// console.log("Hello World")