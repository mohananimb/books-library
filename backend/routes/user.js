const express = require("express")
const router = new express.Router();
const User = require("../models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

router.post("/users/add", async (req, res) => {
    const existUser = await User.findOne({ email: req.body.email })

    if (existUser) {
        return res.status(401).send("email already exists")
    }

    const user = await new User(req.body)
    try {
        const token = await jwt.sign({ _id: user._id.toString() }, "thisisuserapi")
        await user.save()
        res.send({ user: user._id })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post("/users/login", async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        })

        if (!user) {
            return res.status(400).send("Unregistered User")
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password)

        if (!isMatch) {
            return res.status(400).send("Invalid Password")
        }

        const token = jwt.sign({ _id: user._id.toString() }, "thisisuserapi")
        res.header("auth-token", token).send({ token: token })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get("/users", async (req, res) => {
    try {
        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(401).send(e)
    }
})

router.get("/users/:id", async (req, res) => {
    try {
        const singleUser = await User.findById(req.params.id)
        if (!singleUser) {
            return res.status(404).send()
        }
        res.send(singleUser)
    } catch (e) {
        res.status(500).send()
    }

})

router.patch("/users/:id", async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ["email", "password"]
    const isValid = updates.every(update => allowedUpdates.includes(update))

    if (!isValid) {
        res.status(400).send()
        return {
            error: "Invalid Updates"
        }
    }
    try {
        const user = await User.findById(req.params.id)

        updates.forEach(update => user[update] = req.body[update])
        await user.save()
        if (!user) {
            return res.status(400).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.status(404).send()
        }

        res.send(user)

    } catch (e) {
        res.status(400).send(e)
    }
})

router.post("/users/logout", async (req, res) => {
    try {

    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router