const mongoose = require('mongoose');
require('dotenv').config();

const connectMyDb = () => {
  mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true});

  const db = mongoose.connection;
  db.on('error',() => console.log("veri tabanına bağlanırken hata oluştu"));
  db.once('open', function() {
    console.log("veri tabanına bağlanıldı");
  });
};

module.exports = {
  connectMyDb
}
