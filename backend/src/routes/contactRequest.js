const express = require("express");
const { createContactRequest } = require("../controllers/contactController");

const router = express.Router();

router.post("/contact-request", createContactRequest);

module.exports = router;
