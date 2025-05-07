import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('server is helthy');
});

app.listen(4000, () => {
  console.log('Server is running on port 3000');
});