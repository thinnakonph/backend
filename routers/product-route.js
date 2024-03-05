const express =require('express');
const route = express.Router();
const productcontroller = require('../controllers/product-controller');
const authenticate = require('../middlewares/authenticate');
//สร้างสินค้า
route.post('/product/:userId',productcontroller.cerateproduct);
//เรียก สิ้นค้าขึ้นมาดู
route.get('/allproduct',productcontroller.getProduct);
//อัปเดต สินค้า หรือ แก้ไข
route.put('/update/:productId',productcontroller.updateProduct);
//ลบ สินค้า
route.delete('/delete/:productId',productcontroller.deleteProduct);

module.exports = route