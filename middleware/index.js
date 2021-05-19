const express = require("express");
const auth = require("./auth");
const router = express.Router();
const verification = require("./verification");

// buat endpoint url untuk registrasi
router.post("/api/v1/registrasi", auth.registrasi);
router.post("/api/v1/login", auth.login);

//route perlu JWT
router.get("/api/v1/dashboard", verification(), auth.dashboard);
module.exports = router;
