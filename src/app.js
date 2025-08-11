const express = require("express");
const cookieParser = require("cookie-parser")
const dbConnection = require("./config/dataBaseConfig");
const authRoute = require("./routes/auth");
const userRouter = require("./routes/user");
const cors = require("cors");
const profileRouter = require("./routes/profile");

const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json());
app.use(cookieParser());
app.use("/", authRoute);
app.use("/", userRouter);
app.use("/", profileRouter)


dbConnection().then(() => {
    console.log("db connection is successfully made");
    app.listen(7000, () => {
        console.log("app is running on port 7000....");
    });
}).catch(() => {
    console.log("db connection failed");
});
