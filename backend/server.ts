import express from 'express';
import router from './routes/index';
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/v1',router)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});