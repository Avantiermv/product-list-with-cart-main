import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { pushDessertTotal, removeDessertTotal, getDessertCount, getSingleItemId, getAddToTotalPrice, getRemoveToTotalPrice, getDessertName, getDessertPrice, getDessertPriceRemovedAdded } from './src/data/allproductsstock.js';

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
        singleItem: getSingleItemId(dessert.id),
        totalPrice: getAddToTotalPrice(),
        dessertName: getDessertName(dessert.name),
        dessertPrice: getDessertPrice(dessert.price),
        dessertPriceTotalAdded: getDessertPriceRemovedAdded(dessert.price)
    });
});
app.delete('/api/remove-dessert', (req, res) => {
    const dessert = req.body;
    removeDessertTotal(dessert);
    const updatedPrice = getRemoveToTotalPrice();
    const updatedSingleDessertPrice = getDessertPriceRemovedAdded(dessert.price);
    res.status(200).json({
        totalItems: getDessertCount(),
        singleItem: getSingleItemId(dessert.id),
        dessertName: getDessertName(dessert.name),
        totalPrice: updatedPrice,
        dessertPriceTotalRemoved: updatedSingleDessertPrice
    });
});

app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));

app.listen(3000, () => {
    console.log("App rodando na porta 3000!");
    console.log("http://localhost:3000");
});