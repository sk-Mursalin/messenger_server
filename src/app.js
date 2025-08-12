const express = require("express");
const cookieParser = require("cookie-parser")
const dbConnection = require("./config/dataBaseConfig");
const authRoute = require("./routes/auth");
const userRouter = require("./routes/user");
const cors = require("cors");
const http = require("http");
const profileRouter = require("./routes/profile");
const initSocket = require("./config/socketConfig");
const chatRouter = require("./routes/chat");

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json());
app.use(cookieParser());
app.use("/", authRoute);
app.use("/", userRouter);
app.use("/", profileRouter);
app.use("/", chatRouter);

const server = http.createServer(app);
initSocket(server);

dbConnection().then(() => {
    console.log("db connection is successfully made");
    server.listen(7000, () => {
        console.log("app is running on port 7000....");
    });
}).catch(() => {
    console.log("db connection failed");
});
