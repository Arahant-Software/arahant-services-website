const express = require("express");
const { createCallbackRequest } = require("../controllers/callbackController");

const router = express.Router();

router.post("/callback-request", createCallbackRequest);

module.exports = router;
