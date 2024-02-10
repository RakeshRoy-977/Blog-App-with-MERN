const AuthModel = require("../Models/Auth_Model");
const bcrypt = require("bcryptjs");

const signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const CheckUser = await AuthModel.findOne({ email });
    if (CheckUser) {
      return res.json(`User Already Exists`);
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const User = await AuthModel.create({
      name,
      email,
      password: hashPassword,
      blogs: [],
    });

    return res.json(User);
  } catch (error) {
    console.log({ error: error.message });
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    //checking User
    const CheckUser = await AuthModel.findOne({ email });

    if (!CheckUser) {
      return res.json(`User Doesn't Exist`);
    }

    //comparePass
    const comparePass = await bcrypt.compare(password, CheckUser.password);
    if (!comparePass) {
      return res.json(`wrong credentials`);
    }

    return res.json({ CheckUser });
  } catch (error) {
    console.log({ error: error.message });
  }
};

module.exports = { signUp, login };
