const express = require("express");
const router = express.Router();

const { fetchLists} = require("../controllers/listController");

router.get("/" ,fetchLists);

module.exports = router;