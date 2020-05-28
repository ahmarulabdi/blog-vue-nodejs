module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller")

    let router = require("express").Router()

    app.use("/api/tutorials", router)
}
