module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller")

    let router = require("express").Router()

    // Create a new Tutorial
    router.get('/', tutorials.findAll)
        .post("/", tutorials.create)
        .get('/:id', tutorials.findOne)
        .put("/:id", tutorials.update)
        .delete("/:id", tutorials.delete)

    app.use("/api/tutorials", router)
}
