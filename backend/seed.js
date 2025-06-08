const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Record = require('./models/Record');
let data = require('./data.json');

dotenv.config();


data = data.map(item => ({
  ...item,


  RapidCharge: item.RapidCharge?.toLowerCase() === 'yes',


  FastCharge_KmH:
    item.FastCharge_KmH === '-' || item.FastCharge_KmH === ''
      ? null
      : Number(item.FastCharge_KmH),


  Brand: item.Brand?.trim(),
  Model: item.Model?.trim(),
}));

async function seedDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Record.deleteMany();
    await Record.insertMany(data);

    console.log('✅ Database seeded successfully!');
    process.exit();
  } catch (err) {
    console.error('❌ Error seeding the database:', err);
    process.exit(1);
  }
}

seedDB();
