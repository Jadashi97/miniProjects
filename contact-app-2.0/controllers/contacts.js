const Contact = require('../models/Contacts'); //it grabs the schema models set up in models

// @des Get all contacts
// @route Get /api/v1/contacts
// @access Public

exports.getContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.find();

        return res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts
        })

    } catch (err) {
        return res.status(500).json({
            success: false, 
            error: 'Server Error'
        })
        
    }
}

//@desc Add all contacts
//@route POST /api/v1/contacts
//@access Public

exports.addContacts = async (req, res, next) =>{
    try {
        const {text, phone, email} = req.body;

        const contact = await Contact.create(req.body);

        return res.status(201).json({
            success: true,
            data: contact
        })

    } catch (err) {

        if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            });
        } else{
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })
        }
        
    }
}
