const { Router } = require("express");
const courseRouter = Router();

app.get("/course/purchase", function (req, res) {
    res.json({
        message: ""
    })
})



app.get("/course/preview", function (req, res) {
    res.json({
        message: "courses endpoint"
    })
})

module.exports = {
    courseRouter: courseRouter
}