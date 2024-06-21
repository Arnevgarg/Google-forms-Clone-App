import express from 'express';
import bodyParser from 'body-parser';
import formRoutes from './routes/formRoutes';

const app = express();
app.use(bodyParser.json());

app.use('/forms', formRoutes);

app.get('/ping', (req, res) => {
  res.json(true);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
