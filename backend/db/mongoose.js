const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/books-library-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Connected DB");
})