let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router()

let registerSchema = require('../models/Register')

// CRUD

// Create
//localhost:5000/users/create
router.route('/create').post((req, res, next) => {
    console.log(req.body)
    registerSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Read Users
//localhost:5000/users/
router.route('/').get((req, res) => {
    registerSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Read Users
//localhost:5000/users/1
router.route('/:id').get((req, res, next) => {
    registerSchema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update Users
//localhost:5000/users/edit/2
router.route('/edit/:id').put((req, res, next) => {
    registerSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log('Student updated successfully !')
            res.json(data)
        }
    })
})

// Delete Users
//localhost:5000/users/delete/2
router.route('/delete/:id').delete((req, res, next) => {
    registerSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json({
                message: data
            })
        }
    })
})

module.exports = router