const Chat = require("../models/chat");

const chat = async (req, res) => {
    const { targetUserId } = req.params;
    const userId = req.userData._id;

    try {
        let chat = await Chat.findOne({
            participants: { $all: [userId, targetUserId] },
        }).populate({
            path: "messages.senderId",
            select: "firstName lastName",
        });
        if (!chat) {
            chat = new Chat({
                participants: [userId, targetUserId],
                messages: [],
            });
            await chat.save();
        }
        res.status(200).json(chat);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

module.exports = chat