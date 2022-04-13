const express = require('express');
const router = express.Router();
const doctorController = require('../Controllers/Doctor-controller');

router.get("/", doctorController.getAllDoctor);
router.post("/addDoctor", doctorController.addDoctor);
router.get("/:id", doctorController.getById)

module.exports = router; 