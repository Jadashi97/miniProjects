const express = require('express');
const router = express.Router(); //this requires express Router to allow application endpoints to respond to clients 
const {getContacts, addContacts, deleteContacts, updateContact} = require('../controllers/contacts');


router
    .route('/')
    .get(getContacts)
    .post(addContacts)

router
    .route('/:id')
    .delete(deleteContacts)
    .put(updateContact)


module.exports = router;