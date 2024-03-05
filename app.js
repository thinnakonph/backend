require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const notFoud = require("./middlewares/noFoud");
const errormidleware = require("./middlewares/error");
const autRout = require("./routers/auth-router");
const shippingAddressRoute = require("./routers/shippingAddress-route");
const productRoute = require("./routers/product-route");
const profileRoute = require("./routers/profile-route");

app.use(cors());
app.use(express.json());

//service
app.use("/auth", autRout);
app.use("/shippingAddress", shippingAddressRoute);
app.use("/product", productRoute);
app.use("/profile",profileRoute);

// notFoud
app.use(notFoud);

//error
app.use(errormidleware);

let port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server run on PORT :", port));
