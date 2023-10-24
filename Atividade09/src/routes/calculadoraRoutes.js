const express = require("express");
const router = express.Router();

const calculadoraController = require("../controller/calculadoraController");

router.get("/calculadora", calculadoraController.indexCalculadora);
router.post("/calcular", calculadoraController.calcular);

module.exports = router;
