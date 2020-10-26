const User = require("../schemas/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ErrorHandler } = require("../util/ErrorHandler");

require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES = process.env.JWT_EXPIRES;
const JWT_EXPIRATION_NUM = process.env.JWT_EXPIRATION_NUM;
const NODE_ENV = process.env.NODE_ENV;

const encryptPW = async (password) => {
  return await bcrypt.hash(password, 12);
};

const makeJwt = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES,
  });
};

const sendToken = (user, statusCode, req, res) => {
  const token = makeJwt(user._id);
  const options = {
    expires: new Date(Date.now() + JWT_EXPIRATION_NUM),
    secure: NODE_ENV === "production" ? true : false,
    httpOnly: NODE_ENV === "production",
  };
  res.cookie("jwt", token, options);

  res.status(statusCode).json({
    status: "success",
    token,
    user,
  });
};

exports.signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new ErrorHandler(400, "Please enter email and password"));
    }
    if (password.length < 8) {
      return next(
        new ErrorHandler(401, "Password must be at least 8 charecters")
      );
    }
    const pw = await encryptPW(password);
    const newUser = await User.create({
      email,
      password: pw,
    });
    newUser.password = null;
    sendToken(newUser, 201, req, res);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new ErrorHandler(400, "Incorrect email or password"));
    }
    const compared = await bcrypt.compare(password, user.password);
    user.password = null;
    if (!compared) {
      return next(new ErrorHandler(400, "Incorrect email or password"));
    }
    sendToken(user, 200, req, res);
  } catch (err) {
    next(err);
  }
};

exports.logout = async (req, res, next) => {
  try {
    const options = {
      expires: new Date(Date.now + 10000),
      secure: NODE_ENV === "production",
      httpOnly: NODE_ENV === "production",
    };
    res.cookie("jwt", "expiredtoken", options);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    return next(err);
  }
};
