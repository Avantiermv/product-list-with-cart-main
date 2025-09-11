import fs from 'fs';
import path from 'path';

const rawData = fs.readFileSync('./src/data/data.json', 'utf-8');
const produtos = JSON.parse(rawData);

const produtosComId = produtos.map((item, index) => {
  const nwimage = {
    thumbnail: item.image.thumbnail.replace('.assets/', ''),
    mobile: item.image.mobile.replace('./assets', ''),
    tablet: item.image.tablet.replace('./assets', ''),
    desktop: item.image.desktop.replace('./assets', '')
  };

  return{
    id: index + 1,
    ...item,
    image: nwimage
  };
});

fs.writeFileSync('./src/data/data.json', JSON.stringify(produtosComId, null, 2));
console.log('Arquivo atualizado com IDs!');
