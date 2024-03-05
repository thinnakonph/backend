const express = require("express");
const route = express.Router();
const profilecontroller = require("../controllers/profile-controler");
const authenticate = require("../middlewares/authenticate");

route.post("/profile/:userId", profilecontroller.createProfile);
// เรียก Profile ขึ้นมาดู
route.get("/showprofile",profilecontroller.createProfile);
//อัปเดต Profile หรือ แก้ไข
// route.post("/updateprofile/:profileId", profilecontroller.updateprofile);

module.exports = route;
