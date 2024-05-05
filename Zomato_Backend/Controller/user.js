const { response } = require('express');
const User = require('../Model/userDB')

exports.postSignup = (req,res) => {
    const {email,password,name} = req.body;

    const userObject = new User ({
        email,
        password,
        name
    });

    userObject.save()
        .then(response => {
            res.status(200).json({
                message: 'User Details Saved Successfully',
                signup: response
            })
        })

        .catch(err => {
            res.status(500).json({error: err})
        })
}

exports.postLogin = (req,res) => {
    const {email,password} = req.body;

    User.find({
        email,
        password
    })
    .then(response => {
        if(response.length > 0){
            res.status(200).json({
                message: 'User Details Fetched Successfully',
                login: response,
                isAutheticated: true
            })
        }
        else{
            res.status(200).json({
                message: 'User Details Not Found',
                login: response,
                isAutheticated: false
            })
        }
    })

    .catch(err => {
        res.status(500).json({error: err})
    })
}