const express = require("express")
const router = new express.Router();
const Books = require("../models/Books")
const auth = require("../middleware/auth")

router.post("/books/add", async (req, res) => {
    try {
        const book = new Books(req.body)
        await book.save()
        res.send(book)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get("/books", async (req, res) => {
    try {
        const books = await Books.find({})
        if (!books) {
            return res.status(404).send("Not Found")
        }
        res.send(books)

    } catch (e) {
        res.status(400).send()
        
    }
})

router.get("/favortite-books", auth, async (req, res) => {
    const { favorites } = req.user
    try {
        const books = await Books.find().where("favorites").in(favorites).exec()

        if (!books) {
            return res.status(404).send("Not added any favorites")
        }
        res.send(books)
    } catch (e) {
        res.status(400).send()
    }
})

router.delete("/favorite-books/:id", auth, async (req, res) => {
    const { favorites } = req.user
    try {
        const user = req.user
        const index = favorites.indexOf(req.params.id)
        favorites.splice(index, 1)
        await user.save()
        res.send(user)
    } catch (e) {
        res.status(404).send()
    }
})

router.post("/favorite-books/:id", auth, async (req, res) => {
    const { favorites } = req.user
    try {
        const user = req.user
        favorites.push(req.params.id)
        await user.save()
        res.send(user)

    } catch (e) {
        res.status(400).send("Err")
    }
})

router.get("/books/:id", async (req, res) => {
    try {
        const book = await Books.findById(req.params.id)
        if (!book) {
            return res.status(404).send("Not Found")
        }

        res.send(book)
    } catch (e) {
        res.status(400).send(e)
    }

})

router.delete("/books/:id", async (req, res) => {
    try {
        const book = await Books.findByIdAndDelete(req.params.id)
        if (!book) {
            return res.status(404).send("Book not found")
        }

        res.send(book)
    } catch (e) {
        res.status(400).send(e)
    }
})
module.exports = router