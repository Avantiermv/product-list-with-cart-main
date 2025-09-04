import fs from 'fs';
import path from 'path';

const rawData = fs.readFileSync('./src/data/data.json', 'utf-8');
const produtos = JSON.parse(rawData);

const produtosComId = produtos.map((item, index) => ({
  id: index + 1,
  ...item
}));

fs.writeFileSync('./src/data/data.json', JSON.stringify(produtosComId, null, 2));
console.log('Arquivo atualizado com IDs!');
