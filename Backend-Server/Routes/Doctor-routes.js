const express = require('express');
const router = express.Router();
const doctorController = require('../Controllers/Doctor-controller');

router.get("/", doctorController.getAllDoctor);
router.post("/", doctorController.getById);
router.get("/:id", doctorController.addDoctor)

module.exports = router; 