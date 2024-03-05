const db = require("../models/db")
const productService = require("../service/product-service");


//product create
module.exports.cerateproduct = async (req, res, next) => {
  const { userId } = req.params;
  const { productName, stock, title, unit, price, detail } = req.body;
  try {
    if (!(stock && title && unit && price && detail)) {
      return next(new Error("กรุณากรอกข้อมูลให้ครบ"));
    }

    const data = {
      productName,
      stock,
      title,
      unit,
      price,
      detail,
      userId: Number(userId),
    };
    const xx = await db.product.create({ data });
    console.log(xx);
    res.json({ msg: "คุณได้เพิ่มสินค้าแล้ว" });
  } catch (error) {
    next(error);
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const allProducts = await productService.getProduct();
    res.json(allProducts);
  } catch (err) {
    next(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  const productId = parseInt(req.params.productId);
  const updatedProduct = req.body;
  try {
      await productService.updateProduct(productId, updatedProduct);
      res.json({ message: "Update Product Success" });
  } catch (err) {
      next(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  const productId = parseInt(req.params.productId);
  try {
      await productService.deleteProduct(productId);
      res.json({ message: "Delete Product Success" });
  } catch (err) {
      next(err);
  }
}
