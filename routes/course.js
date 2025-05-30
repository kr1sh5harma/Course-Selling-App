const { Router } = require("express");
const courseRouter = Router();

courseRouter.get("/course/purchase", function (req, res) {
    res.json({
        message: ""
    })
})



courseRouter.get("/course/preview", function (req, res) {
    res.json({
        message: "courses endpoint"
    })
})

module.exports = {
    courseRouter: courseRouter
}