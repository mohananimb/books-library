const express = require("express")
const cors = require("cors")

require("./db/mongoose")
const userRouter = require("./routes/user")
const booksRouter = require("./routes/books")
const app = express()

const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(booksRouter)


app.listen(port, () => {
    console.log(`Server Started on port ${port}`);
})