const mongoose = require("mongoose")
const validator = require("validator")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 6
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        validate(val) {
            if (!validator.isEmail(val)) {
                throw new Error("Invalid Email")
            }
        }
    },
    password: {
        type: String,
        trim: true,
        min: 8,
        require: true,
    },

    favorites: []

    // tokens: [{
    //     token: {
    //         type: String,
    //         required: true
    //     }
    // }]
})

userSchema.pre("save", async function (next) {
    const user = this

    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = mongoose.model("User", userSchema)

module.exports = User