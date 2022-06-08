const mongoose = require("mongoose");

const koderSchema = new mongoose.Schema({
  name: String,
  genero: String,
  edad: Number,
});
const Koder = mongoose.model("koders", koderSchema);

//Exportamos el modelo de koder
module.exports = Koder;
