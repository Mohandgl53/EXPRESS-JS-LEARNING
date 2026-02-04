import express from 'express';
import Router from './routes/router.mjs'
import cookieParser from 'cookie-parser';
import session from "express-session";

const app = express()
app.use(express.json());
app.use(cookieParser("HEllo"));
app.use(
    session({
        secret: "romba secret",
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 60000 * 60
        }
    }));
app.use(Router);

const PORT = 3500

app.get("/", (req, res) => {
    res.cookie("user", "Admin", { maxAge: 60000 * 60, signed: true })
    console.log(req.session.id);
    req.sessionStore.get(req.session.id, (err, sessionData)=> {
        if (err){
            console.log(err);
        }
        else{
            console.log(sessionData);
        }
    })
    res.send("Root");
})

app.listen(PORT, () => {
    console.log(`App is Running on Port ${PORT}`)
})