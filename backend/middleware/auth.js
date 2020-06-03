const jwt = require("jsonwebtoken")
const User = require("../models/User")

const auth = async (req, res, next) => {
    const token = req.header("Authorization")
    
    if (!token) {
        return res.status(401).send("Access Denied")
    }

    try {
        const verified = jwt.verify(token, "thisisuserapi")
        const user = await User.findOne({
            _id: verified._id
        })

        if (!user) {
            return res.status(404).send("Not Found")
        }

        req.user = user
        next()
    } catch (e) {
        res.status(400).send("Invalid Token")
    }
}

module.exports = auth
