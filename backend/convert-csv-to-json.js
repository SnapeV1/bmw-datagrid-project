const fs = require('fs');
const csv = require('csvtojson');

const inputFilePath = './Data.csv';  
const outputFilePath = './data.json'; 

csv()
  .fromFile(inputFilePath)
  .then((jsonObj) => {
    fs.writeFileSync(outputFilePath, JSON.stringify(jsonObj, null, 2), 'utf-8');
    console.log('✅ CSV converted to JSON and saved to data.json');
  })
  .catch((err) => {
    console.error('❌ Error converting CSV to JSON:', err);
  });
