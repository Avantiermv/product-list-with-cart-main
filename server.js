import express from 'express';
import path from 'path';
import { router } from './src/routes/routes.js';

export const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use('/', router);

app.listen(3000, () => {
    console.log("App rodando na porta 3000!");
    console.log("http://localhost:3000");
});