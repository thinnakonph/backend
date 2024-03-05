const db = require("../models/db");
const shippingAddress = require('../service/shippingaddress-service')

//shippingAddress create
module.exports.createshippingAddress = async (req, res, next) => {
  const { userId } = req.params;
  const {
    firstName,
    lastName,
    identityNumber,
    email,
    phone,
    address,
    province,
    subDistrict,
    district,
    postalCode,
    isMainAddress,
  } = req.body;
  try {
    if (
      !(
        firstName &&
        lastName &&
        identityNumber &&
        email &&
        phone &&
        address &&
        province &&
        subDistrict &&
        district &&
        postalCode &&
        isMainAddress
      )
    ) {
      return next(new Error("กรุณากรอกข้อมูลให้ครบ"));
    }
    const data = {
      firstName,
      lastName,
      identityNumber,
      email,
      phone,
      address,
      province,
      subDistrict,
      district,
      postalCode,
      isMainAddress: String(isMainAddress),
      userId: Number(userId),
    };
    const xx = await db.shippingAddress.create({ data });
    console.log(xx);
    res.json({ msg: "addShippingAddress Successful" });
  } catch (err) {
    next(err);
  }
};

exports.getshippingAddress = async (req, res, next) => {
  try {
    const allshippingAddress = await shippingAddress.getShippingAddress();
    res.json(allshippingAddress);
  } catch (err) {
    next(err);
  }
};

exports.updateshippingAddress = async (req, res, next) => {
  const shippingAddressId = parseInt(req.params.shippingAddressId);
  const updatedshippingAddress = req.body;
  try {
      await shippingAddress.updateShippingAddress(shippingAddressId, updatedshippingAddress);
      res.json({ message: "Update Product Success" });
  } catch (err) {
      next(err);
  }
};

exports.deleteShippingAddress = async (req, res, next) => {
  const shippingAddressId = parseInt(req.params.shippingAddressId);
  try {
      await shippingAddress.deleteShippingAddress(shippingAddressId);
      res.json({ message: "Delete Product Success" });
  } catch (err) {
      next(err);
  }
}