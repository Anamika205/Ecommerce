const mongoose = require('mongoose');
const SigninModel = require('../Models/signinModel')

exports.AddnewAdmin = async (req, res) => {
    try {
        const adminDetails = {
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            phone: req.body.phone,
            address: req.body.address,
            gender: req.body.gender
         }
        const newAdmin = SigninModel(adminDetails);
        const savedetails = await newAdmin.save();
        res.status(200).json({
            message:"Add new Admin Successfully",
            status:"Success",
            data:savedetails
        })
    }
  
    catch {
        res.status(400).json({
            message:"Does not Add Admin",
            status:"Fail"
        })
    }
}