const { Router } = require("express");
const userRouter = Router();

userRouter.post("/signup", function (req, res) {
    res.json({
        message: "signup endpoint"
    })
})


userRouter.post("/signin", function (req, res) {
    res.json({
        message: "signin endpoint"
    })
})


userRouter.get("/purchases", function (req, res) {
    res.json({
        message: "your purchases"
    })
})



module.exports = {
    userRouter: userRouter
}
