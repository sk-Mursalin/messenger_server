const UserMOdel = require("../models/user")

const viewProfile = async (req, res) => {
    try {
        const userEmail = req.userData.email
        const profile = await UserMOdel.findOne({ email: userEmail }).select("-password -email")
        if (!profile) {
            throw new Error("user not found")
        }
        res.status(200).json({ data: profile })
    } catch (err) {
        res.status(401).json({ message: err.message })
    }
}

module.exports = {
    viewProfile
}