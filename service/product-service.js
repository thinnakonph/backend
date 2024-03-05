const db = require("../models/db")


exports.createProduct = (productName, stock, title, unit, price, detail) =>{
    return db.product.create({
      data : {
        productName,
        stock,
        title,
        unit,
        price,
        detail
      }
    })
  }
// get profile
  exports.getProduct = async () => {
    try {
      const allProducts = await db.product.findMany();
      return allProducts;
    } catch (err) {
      throw err;
    }
  };

// Update Product
exports.updateProduct = async (productId, updatedProduct) => {
  try {
    await db.product.update({
      where: { id: productId },
      data: updatedProduct,
    });
  } catch (err) {
    throw err;
  }
};

// Delete Product
exports.deleteProduct = async (productId) => {
  try {
    await db.product.delete({
      where: { id: productId },
    });
  } catch (err) {
    throw err;
  }
};