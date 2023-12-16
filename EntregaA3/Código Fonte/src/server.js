import express from 'express';
import bodyParser from 'body-parser';
import router from './Routes.js'


const app = express();
app.use(bodyParser.json());

app.use(router);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});
