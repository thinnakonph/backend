const express = require("express");
const router = express.Router();
const authcontroller = require("../controllers/auth-controller");
const authenticate = require("../middlewares/authenticate");

router.post("/login", authcontroller.login);
router.post("/register", authcontroller.register);
router.get("/me", authenticate, authcontroller.getme);

module.exports = router;
