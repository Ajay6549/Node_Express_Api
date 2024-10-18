import express from "express";

import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const rouer = express.Router();

let users = [
//   {
//     firstName: "Kayle",
//     lastName: "Mekile",
//     Age: 43,
//   },

//   {
//     firstName: "John",
//     lastName: "Kanady",
//     Age: 33,
//   },

];

rouer.get("/", (req, res) => {

    console.log(users)

     res.json(users)

  // console.log("hello from user page ")

//   res.send("hello from userpage  " ,users);
});



rouer.post('/',(req,res)=>{
   

     const user=req.body

     const userId =uuidv4();

     users.push({...user,userId})


    res.send("Sucessfully store the data in Array ")


})


//get the user based on spacific id 
rouer.get('/:id',(req,res)=>{

    const {id}=req.params;    //getting id from url 

    console.log("getting user url -___________________--------" ,id)
  
    const foundUser = users.find((user)=>user.userId===id)

    
     res.send(foundUser)
         

 
})


//delete request based on thenid 

rouer.delete('/:id',(req,res)=>{

    const {id}=req.params; 


   users=users.filter((user)=>user.userId !==id)

    res.send(`users with id ${id} has been deleted `)

})


rouer

export default rouer;

