🚀 Express.js Backend Learning – Concepts, Functions & Modules Used

This repository documents my learning of Express.js backend development, clearly explaining what each concept does, along with the important functions and modules used.

📌 Express Apps

What it does:
Creates a backend server to handle client requests and send responses.

Modules / Functions used:

express() – creates an Express application

app.listen() – starts the server

app.get() – handles GET requests

req – request object

res – response object

🧩 Middlewares

What it does:
Runs code between receiving a request and sending a response.

Modules / Functions used:

app.use() – applies middleware

express.json() – parses JSON request body

express.urlencoded() – parses form data

next() – passes control to next middleware

🔗 Route Parameters

What it does:
Handles dynamic URLs using values in the route path.

Modules / Functions used:

app.get('/users/:id')

req.params – accesses route parameters

🔍 Query Parameters

What it does:
Handles optional data sent in the URL.

Modules / Functions used:

req.query – reads query string values

Example URL: /users?role=admin

📤 POST Request

What it does:
Sends data from client to server to create resources.

Modules / Functions used:

app.post()

req.body – reads data sent in request

express.json() – required to parse body

🔄 PUT Request

What it does:
Updates an entire resource.

Modules / Functions used:

app.put()

req.params

req.body

🩹 PATCH & 🗑️ DELETE Requests

What it does:
PATCH updates part of data, DELETE removes data.

Modules / Functions used:

app.patch()

app.delete()

req.params

res.status()

🧠 getById Middleware

What it does:
Fetches data by ID before route execution.

Modules / Functions used:

Custom middleware function

req.params.id

next() – passes fetched data

res.status() – handles errors

✅ Validation

What it does:
Ensures incoming data is correct and safe.

Modules / Functions used:

if conditions / custom logic

res.status(400)

return res.json()

(Optional libraries like express-validator can also be used)

🛣️ Routes

What it does:
Organizes API endpoints into separate files.

Modules / Functions used:

express.Router()

router.get()

router.post()

module.exports

app.use('/api', router)

🍪 Cookies

What it does:
Stores small data in the browser.

Modules / Functions used:

cookie-parser

res.cookie()

req.cookies

🧾 Sessions

What it does:
Stores user data on the server.

Modules / Functions used:

express-session

session()

req.session

req.session.destroy()

🔐 Passport.js

What it does:
Handles authentication and login flow.

Modules / Functions used:

passport

passport.initialize()

passport.session()

passport.use()

passport.serializeUser()

passport.deserializeUser()

🗄️ Mongoose

What it does:
Connects Express with MongoDB.

Modules / Functions used:

mongoose.connect()

mongoose.Schema()

mongoose.model()

.find()

.findById()

.save()

.findByIdAndUpdate()

.findByIdAndDelete()

🔑 Password Encryption

What it does:
Protects user passwords.

Modules / Functions used:

bcrypt

bcrypt.hash()

bcrypt.compare()

🌐 OAuth 2.0 (Google Login)

What it does:
Allows login using Google account securely.

Modules / Functions used:

passport-google-oauth20

GoogleStrategy

passport.authenticate('google')

OAuth callback routes

🎯 Skills Gained

Built RESTful APIs

Implemented authentication systems

Secured user data

Structured scalable backend apps

Used industry-standard libraries

🛠️ Tech Stack

Node.js

Express.js

MongoDB

Mongoose

Passport.js

bcrypt

OAuth 2.0
