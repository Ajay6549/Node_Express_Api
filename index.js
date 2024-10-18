//node and exprss all about routing 

//basically this file  use for the server set up 

import express from 'express'
import bodyParser from 'body-parser';  //this allowes us to take incomming post request body
import userRoutes from './routes/user.js'

const app=express(); // hole application relay on this app
const PORT=5000;
app.use(bodyParser.json())  //this function allowed to pass data in out application in the json form 

app.use('/user',userRoutes)

app.listen(PORT,()=>console.log(`server running on this post : http://localhost:${PORT}`))  //this will allowed to run the application o

app.get('/' ,(req,res)=>{

    console.log("TEST")

    res.send(" Home Page ")

})




//what we are gooing to do handle user in Data base 
//  [GET] /user    //find all user
//  [POST] /user    //create user 
//  [GET]  /user      //find user details
//  [DELETE] /user:id     //delete a user 
//  [PATCH]  /user/:id   //update users 


