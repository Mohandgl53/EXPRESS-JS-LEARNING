import { Router } from "express";
import { createUserValidationSchema } from '../utils/validationSchema.mjs';
import { checkSchema, validationResult, matchedData } from 'express-validator';
import { getIndexById, getParamsId } from "../utils/middlewares.mjs";
import { users } from '../utils/constants.mjs'

const router = Router();

router.get('/api/users', (req, res) => {
    console.log(req.cookies)
    if (req.cookies.user && req.cookies.user === "Admin") {
        const { filter, value } = req.query;
        if (filter && value) {
            return res.send(users.filter(user => user[filter].toLowerCase().includes(value)))
        }
        return res.send(users)
    }
    else{
        res.send({msg: "You are not an Admin"})
    }
})

router.get('/api/users/:id', getParamsId, (req, res) => {
    const id = req.id;
    const user = users.find(user => user.id === id)
    if (user) {
        return res.send(user)
    }
    res.status(404).send({ msg: "User Not Found" })
})

router.post("/api/users",
    checkSchema(createUserValidationSchema),
    (req, res) => {
        const result = validationResult(req);
        console.log(result)
        if (!result.isEmpty()) {
            return res.status(400).send({ error: result.array() })
        }
        const body = matchedData(req);
        const newUser = { id: users[users.length - 1].id + 1, ...body }
        users.push(newUser);
        res.status(201).send(newUser);
    })

router.put("/api/users/:id", getIndexById, (req, res) => {
    const { body, userIndex, id } = req;
    users[userIndex] = { id: id, ...body };
    return res.status(200).send({ msg: "User Data Updated" })
})

router.patch("/api/users/:id", getIndexById, (req, res) => {
    const { body, userIndex } = req;
    users[userIndex] = { ...users[userIndex], ...body };
    return res.status(200).send({ msg: "User Data Updated" })
})

router.delete("/api/users/:id", getIndexById, (req, res) => {
    const userIndex = req.userIndex;
    users.splice(userIndex, 1);
    return res.send({ msg: "User SuccessFully Deleted" })
})

export default router;