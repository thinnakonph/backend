const bcrypt = require("bcryptjs");
const db = require("../models/db");
const jwt = require("jsonwebtoken");

// Register constroller
module.exports.register = async (req, res, next) => {
  const { username, password, confirmPassword, email } = req.body;
  try {
    if (!(username && password && confirmPassword)) {
      return next(new Error("Fulfill all inputs"));
    }
    const hashedPassword = await bcrypt.hash(password, 5);
    const data = {
      username,
      password: hashedPassword,
      email,
    };
    const xx = await db.user.create({ data });
    console.log(xx);

    res.json({ msg: "Register Successful" });
  } catch (err) {
    next(err);
  }
};

//Login Controller
module.exports.login = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    if (!(username.trim() && password.trim())) {
      throw new Error("The username or password is incorrect");
    }
    const user = await db.user.findFirstOrThrow({
      where: { username: username  },
    });

    const pwOk = await bcrypt.compare(password, user.password);
    if (!pwOk) {
      throw new Error("not  password");
    }
    const payload = { id: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.send({ token: token });
  } catch (err) {
    next(err);
  }
};




exports.getme = (req, res, next) => {
  res.json(req.user);
};
