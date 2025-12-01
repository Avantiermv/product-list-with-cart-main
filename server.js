import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { pushDessertTotal, removeDessertTotal, getDessertCount, getSingleItemId, getAddToTotalPrice, getRemoveToTotalPrice, getDessertName, getDessertPrice, getDessertPriceRemovedAdded, getDessertCountInTheArray, getDessertPriceInTheArray, getDessertSingleTotalPrice, clearCart} from './src/data/allproductsstock.js';
import { dessertAddedArray, totalPrice} from './src/data/allproductsstock.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const app = express(); 

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

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
app.get('/api/desserts', (req, res) => {
    if(dessertAddedArray.length === 0){
        return res.status(404).json({error: "Without items"});
    }

    const counts = getDessertCountInTheArray(dessertAddedArray);
    const prices = getDessertPriceInTheArray(dessertAddedArray);
    const totalPriceItems = getDessertSingleTotalPrice(dessertAddedArray);

    const dessert = dessertAddedArray.map(dessert => ({
        image: dessert.image.thumbnail,
        name: dessert.name,
        count: counts[dessert.id],
        price: prices[dessert.id],
        totalPriceItem: totalPriceItems[dessert.id]
    }));

    res.status(200).json({
        desserts: dessert,
        totalPrice: totalPrice
    });
});

app.post('/api/start-new-order', (req, res) => {
    clearCart();
    res.status(200).json({message: "Starting a new order..."});
});


export default app;