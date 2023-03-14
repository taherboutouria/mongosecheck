const express = require('express');
const { GetDataUSers, AddedUSer, UpdateUsers, DeleteUsers } = require('../Controllers/UserController');
const router = express.Router();
const User = require('../Modals/UserModal')


router.post('/',AddedUSer)


router.get ('/',GetDataUSers)


router.put('/:id',UpdateUsers)



router.delete('/:id',DeleteUsers)


module.exports = router