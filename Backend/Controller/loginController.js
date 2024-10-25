const loginModel = require('../Models/loginModel');

exports.createLogin = async (req, res, next) => {
    try {
      const loginDetails = {
        username: req.body.username,
        email: req.body.email,
        password:req.body.password
      }
     
        const newLogin = new loginModel(loginDetails);
        await newLogin.save();
        res.status(200).json({
            status: "success",
            message: "Login successfully",
           

        });
    }

    catch (err) {
        res.status(400).json({
            status: "fail",
            message: "E-mail is required"
        });
    }

}