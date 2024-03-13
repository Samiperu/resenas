const express = require("express");
const controller = require("./controller");

const router = express.Router();

// get all users
router.get("/obtener-resenas-general", controller.obtener_resenas_general);
router.post("/obtener-resenas-busqueda", controller.obtener_resenas_busqueda);
router.get("/obtener-resenas-producto", controller.obtener_resenas_producto);
router.get("/obtener-resenas-status", controller.obtener_resenas_status);
router.get("/obtener-resenas-cliente", controller.obtener_resenas_cliente);
router.get("/obtener-resenas-dominio", controller.obtener_resenas_dominio);
router.get("/obtener-resenas-resumen", controller.obtener_resenas_resumen);
router.post("/procesardata", controller.procesardata);
module.exports = router;
