const express = require('express');
const route = express.Router();
const shippingaddresscontroller = require('../controllers/shippingAddress-controler');
const authenticate = require('../middlewares/authenticate');

route.post('/shippingAddress/:userId',shippingaddresscontroller.createshippingAddress);

route.get('/shippingAddress',shippingaddresscontroller.getshippingAddress);

route.put('/update/:shippingaddressId',shippingaddresscontroller.updateshippingAddress);

route.delete('/delete/:shippingaddress',shippingaddresscontroller.deleteShippingAddress)

module.exports = route