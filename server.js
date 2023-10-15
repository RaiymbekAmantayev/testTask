const express = require('express')
    // const cors = require('cors')


const app = express()

// middleware

app.use(express.json())
    // app.use(cors());
app.use(express.urlencoded({ extended: true }))
    // app.use('/Images', express.static('./Images'))

// routers
const UserRouter = require('./router/UserRouter')
const ActionRouter = require('./router/ActionsRouter')
app.use('/api/users', UserRouter)
app.use('/api/actions', ActionRouter)
    //static Images Folder




//port

const PORT = process.env.PORT || 3001

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})