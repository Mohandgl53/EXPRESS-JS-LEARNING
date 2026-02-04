import {Router} from "express";
import { getParamsId } from "../utils/middlewares.mjs";
import {products} from '../utils/constants.mjs'

const router = Router()

router.get('/api/products',(req,res)=>{
    req.session.visited = true;
    console.log(req.session.id);
    const {filter,value} = req.query;
    if (filter && value){
        return res.send(products.filter(user=> user[filter].toLowerCase().includes(value)))
    }
        res.send(products)
})

router.get('/api/products/:id', getParamsId,(req,res)=>{
    const id = req.id;
    const user = products.find(user=>user.id===id)
    if (user){
        return res.send(user)
    }
    res.status(404).send({msg:"User Not Found"})
})

export default router;