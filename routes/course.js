const { Router } = require("express");
const courseRouter = Router();

courseRouter.get("/purchase", function (req, res) {
    res.json({
        message: ""
    })
})



courseRouter.get("/preview", function (req, res) {
    res.json({
        message: "courses endpoint"
    })
})

module.exports = {
    courseRouter: courseRouter
}