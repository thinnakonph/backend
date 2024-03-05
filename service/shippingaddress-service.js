const db = require("../models/db");

exports.createshippingAddress = (
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
  isMainAddress
) => {
  return db.shippingAddress.create({
    data: {
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
    },
  });
};
// get profile
exports.getShippingAddress = async () => {
  try {
    const allShippingAddress = await db.shippingAddress.findMany();
    return allShippingAddress;
  } catch (err) {
    throw err;
  }
};

// Update Product
exports.updateShippingAddress = async (
  ShippingAddressId,
  updatedShippingAddress
) => {
  try {
    await db.shippingAddress.update({
      where: { id: ShippingAddressId },
      data: updatedShippingAddress,
    });
  } catch (err) {
    throw err;
  }
};

// Delete Product
exports.deleteShippingAddress = async (ShippingAddressId) => {
  try {
    await db.shippingAddress.delete({
      where: { id: ShippingAddressId },
    });
  } catch (err) {
    throw err;
  }
};
