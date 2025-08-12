const UserMOdel = require("../models/user")

const allUsers = async (req, res) => {
    try {
        const userId = req.userData._id
        const users = await UserMOdel.find({
            _id: { $ne: userId }
        }).select("-password -email");
        if (!users) {
            throw new Error("no user found")
        }
        res.status(200).json({ data: users })
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

module.exports = {
    allUsers
}