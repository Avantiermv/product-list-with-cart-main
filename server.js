import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { router } from './src/routes/routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const app = express();


app.get('/api/data/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'data', 'data.json'));
});
app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use('/', router);

app.listen(3000, () => {
    console.log("App rodando na porta 3000!");
    console.log("http://localhost:3000");
});