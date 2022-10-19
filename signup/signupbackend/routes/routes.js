//routes the requests coming to server
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')

router.post('/signup',(request,response) => {
    const signedUpUser = new signUpTemplateCopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password,
    })

    signedUpUser.save()
    .then(Data =>{
        response.json(data) //if successful then send this response
    })
    .catch(error =>{
        response.json(data) //if successful then send this response
    })

})//from body of post rew grab these
// new instance of signUpTemplateCopy ie our schema so for every sign up schema is created
//path where request is made, callback fucntion
//here we have only post signup requests to the sever

module.exports = router 