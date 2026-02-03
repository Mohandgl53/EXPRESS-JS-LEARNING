import express from 'express';
import { createUserValidationSchema } from './utils/validationSchema.mjs';
import { checkSchema, validationResult, matchedData } from 'express-validator';
const app = express()

const PORT = 3500

const users = [ 
    {id: 1, username: "hari"},
    {id: 2, username: "mari"},
    {id: 3, username: "vijay"},
    {id: 4, username: "ajay"},
    {id: 5, username: "anbu"}
]

const getIndexById = (req,res,next)=> {
    const id = parseInt(req.params.id);
    if (isNaN(id)){
        return res.status(400).send({msg:"Bad request, Invalid ID"})
    }
    const userIndex = users.findIndex(user=>user.id===id);
    if (userIndex === -1){
        return res.status(404).send({msg:"User Not Found"})
    }
    req.userIndex = userIndex;
    next();
}

app.get('/api/users',(req,res)=>{
    const {filter,value} = req.query;
    if (filter && value){
        return res.send(users.filter(user=> user[filter].toLowerCase().includes(value)))
    }
        res.send(users)
})

app.get('/api/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    if (isNaN(id)){
        return res.status(400).send({msg:"Bad request, Invalid ID"})
    }
    const user = users.find(user=>user.id===id)
    if (user){
        return res.send(user)
    }
    res.status(404).send({msg:"User Not Found"})
})

app.use(express.json())

app.post("/api/users",
    checkSchema(createUserValidationSchema),
    (req,res)=>{
    const result = validationResult(req);
    console.log(result)
    if (!result.isEmpty()){
        return res.status(400).send({error:result.array()})
    }
    const body = matchedData(req);
    const newUser = {id:users[users.length-1].id+1,...body}
    users.push(newUser);
    res.status(201).send(newUser);
})

app.put("/api/users/:id", getIndexById, (req,res)=> {
    const {body,userIndex} = req;
    users[userIndex] = {id: id, ...body};
    return res.status(200).send({msg:"User Data Updated"})
})

app.patch("/api/users/:id", getIndexById, (req,res)=> {
    const {body,userIndex} = req;
    users[userIndex] = {...users[userIndex],...body};
    return res.status(200).send({msg:"User Data Updated"})
})

app.delete("/api/users/:id" ,getIndexById ,(req,res)=> {
    const userIndex = req.userIndex;
    users.splice(userIndex,1);
    return res.send({msg:"User SuccessFully Deleted"})
})

app.listen(PORT,()=>{
    console.log(`App is Running on Port ${PORT}`)
})