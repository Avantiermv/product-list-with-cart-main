import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { router } from './src/routes/routes.js';
import { pushDessertTotal, removeDessertTotal, getDessertCount, getSingleItemId } from './src/data/allproductsstock.js';
import { totalmem } from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const app = express(); 

app.use(express.json());
app.get('/api/data/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'data', 'data.json'));
});
app.post('/api/add-dessert', (req, res) => {
    const dessert = req.body;
    pushDessertTotal(dessert);
    res.status(200).json({
        totalItems: getDessertCount(),
        singleItem: getSingleItemId(dessert.id)
    });
});
app.delete('/api/remove-dessert', (req, res) => {
    const dessert = req.body;
    removeDessertTotal(dessert);
    res.status(200).json({
        totalItems: getDessertCount(),
        singleItem: getSingleItemId(dessert.id)
    });
});

app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use('/', router);

app.listen(3000, () => {
    console.log("App rodando na porta 3000!");
    console.log("http://localhost:3000");
});