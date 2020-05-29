const db = require('../models')
const Tutorial = db.tutorial
const Op = db.sequelizeConfig.Op

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // validate if empty
    if (!req.body.title || !req.body.description) {
        res.status(400).send({
            message: "Content cannot be empty!"
        })
    } else {
        Tutorial.create({
            title: req.body.title,
            description: req.body.description,
            published: req.body.published ? req.body.published : false
        }).then(data => {
            res.send(data)
        }).catch(err => {
            res.status(500).send({
                mesesage: err.mesesage || "Some error occurred while creating the Tutorial."
            })
        })
    }
};

// Retrieve all or retrieve with title query param Tutorials from the database.
exports.findAll = (req, res) => {
    let title = req.query.title;
    let condition = title ? {title: {[Op.like]: `%${title}%`}} : null

    Tutorial.findAll({where: condition})
        .then(data => {
            res.send(data)
        }).catch(err => {
        res.status(500).send({
            mesesage: err.mesesage || "Some error occurred while getting all Tutorial."
        })
    })
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    Tutorial.findByPk(req.params.id)
        .then(data => {
            res.send(data)
        }).catch(err => {
        res.status(500).send({
            message: err.mesesage || "Some error occurred while getting the Tutorial."
        })
    })
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    Tutorial.update(req.body, {
        where: {id: req.params.id}
    }).then(data => {
        res.send({
            message: "update was successfully"
        })
    }).catch(err => {
        res.status(500).send({
            message: err.mesesage || "Some error occurred while getting the Tutorial."
        })
    })
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    Tutorial.destroy({
        where: {id: req.params.id}
    }).then(data => {
        res.send({
            data: data,
            message: "delete was successfully"
        })
    }).catch(err => {
        res.status(500).send({
            message: "Some error occurred while deleting the Tutorial"
        })
    })
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};
