const express = require("express");
const router = express.Router();
const { submitService } = require("../controllers/serviceController");

router.post("/", submitService);

module.exports = router;