const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const resenaSchema = new mongoose.Schema({
  skuProducto: {
    type: String,
    required: false
  },
  tipoDocumento: {
    type: String,
    required: false
  },
  numDocumento: {
    type: String,
    required: false
  },
  correo: {
    type: String,
    required: false
  },
  nombres: {
    type: String,
    required: false
  },
  apellidos: {
    type: String,
    required: false
  },
  detResena: {
    type: String,
    required: false
  },
  fecResena: {
    type: String,
    required: false
  },
  statusResena: {
    type: String,
    required: false
  },
  calificacionResena: {
    type: String,
    required: false
  },
  numPedido: {
    type: String,
    required: false
  },
  detProducto: {
    type: String,
    required: false
  },
  dominio: {
    type: String,
    required: false
  }
});

resenaSchema.plugin(mongoosePaginate);

module.exports.resenaModel= mongoose.model("resena", resenaSchema, "resena");