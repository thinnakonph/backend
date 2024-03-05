const db = require('../models/db');

exports.createProfile = (firstName, lastName, email, phone, address, country) =>{
    return db.profile.create({
      data : {
        firstName,
        lastName,
        email,
        phone,
        address,
        country,
      }
    })
  }

  // get profile
  exports.getProfile = async () => {
    try {
      const allprofiles = await db.profile.findMany();
      return allprofiles;
    } catch (err) {
      throw err;
    }
  };

// Update profile
exports.updateProfile = async (profileId, updatedProfile) => {
  try {
    await db.profile.update({
      where: { id: profileId },
      data: updatedProfile,
    });
  } catch (err) {
    throw err;
  }
};

// Delete Product
exports.deleteProfile = async (profileId) => {
  try {
    await db.product.delete({
      where: { id: profileId },
    });
  } catch (err) {
    throw err;
  }
};