let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router()

let OrderRegisterSchema = require('../../models/Order')

//CRUD

//CREATE
//localhost:5000/orderRegister/create
router.route('/create').post((req, res, next) => {
    OrderRegisterSchem.create(req, body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//READ ORDER
//localhost:5000/orderRegister
router.route('/').get((req, res) => {
    OrderRegisterSchema.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//READ ORDER
//localhost:5000/orderRegister/1
router.route('/').get((req, res) => {
    OrderRegisterSchema.findByID((req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    }))
})

//Update Order
//localhost:5000/orderRegister/edit/1
router.route('edit/:id').put((req, res) => {
    OrderRegisterSchema.findByIDandUpdate(req.params.id, {
        $set: req.body,
    },
        
        (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data) 
        }
    })
})

//Delete Order
//localhost:5000/orderRegister/delete/1
router.route('delete/:id').delete((req, res) => {
    OrderRegisterSchema.findByIDandRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json ({
                msg: data
        
        })
       }
    })
})
module.exports = router

