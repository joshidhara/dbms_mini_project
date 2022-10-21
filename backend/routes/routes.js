//routes the requests coming to server
const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')

router.post('/register',(request,response) => {
    const {fullnamevar,usernamevar,emailvar,passwordvar}=request.body
    console.log("body here")
    signUpTemplateCopy.findOne({email:emailvar},(err,user)=>{
        if(user)
        {
            response.send({message:"User already registered"})
        }
        else
        {
            const signedUpUser = new signUpTemplateCopy({
                fullName:fullnamevar,
                username:usernamevar,
                email:emailvar,
                password:passwordvar,// to do: change it using bicrypt
            })
        
            signedUpUser.save()
            .then(Data =>{
                response.json(Data) //if successful then send this response
            })
            .catch(error =>{
                response.json(error) //if successful then send this response
            })
        }
    })
   

})//from body of post rew grab these
// new instance of signUpTemplateCopy ie our schema so for every sign up schema is created
//path where request is made, callback fucntion
//here we have only post signup requests to the sever

router.post('/login',(request,response)=>{
    const {fullnamevar,usernamevar,emailvar,passwordvar}=request.body
    signUpTemplateCopy.findOne({email:emailvar},(err,user)=>{
        if(user)
        {
            if(passwordvar===user.password)
            {
                response.send({message:"login successfull",user:user})
            }
            else
            {
                response.send({message:"Password did not match"})
            }
        }
        else
        {
            response.send("User not registered")
        }
    })
}) 

module.exports = router 