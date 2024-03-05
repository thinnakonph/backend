const db = require("../models/db");
const profileService = require('../service/profile-service')

//profile create
module.exports.createProfile = async (req, res, next) => {
  const { userId } = req.params;
  const { firstName, lastName, email, phone, address, country } = req.body;
  try {
    if (!firstName || !lastName || !email || !phone || !address || !country) {
      return next(new Error("กรุณากรอกข้อมูลให้ครบ"));
    }
    const data = {
      firstName,
      lastName,
      email,
      phone,
      address,
      country,
      userId: Number(userId),
    };
    const xx = await db.profile.create({ data });
    console.log(xx);
    res.json({ msg: "เพิ่มข้อมูลเสร็จสิ้น" });
  } catch (error) {
    next(error);
  }
};

exports.getProfile = async (req, res, next) => {
  try {
    const allprofile = await profileService.getProfile();
    res.json(allprofile);
  } catch (err) {
    next(err);
  }
};
