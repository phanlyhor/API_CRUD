const express = require('express')
const router = express.Router()

const {getUser} = require('../controller/userController') 
const {createUser} = require('../controller/userController') 
const {updateUser} = require('../controller/userController') 
const {deleteUser} = require('../controller/userController') 

// Route for getting all user
router.get('/getAlluser' , getUser)

// Route for creating  user
router.post('/createUser' , createUser)

// Route for creating  user
router.put('/updateUser/:id' , updateUser)

// Route for delete user
router.delete('/deleteUser/:id', deleteUser);


module.exports = router