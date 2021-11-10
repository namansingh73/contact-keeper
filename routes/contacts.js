const express = require('express');
const User = require('../models/User');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const Contact = require('../models/Contact');

const router = express.Router();

router.get('/',auth,async (req,res)=>{
    try{
        const contacts = await Contact.find({user:req.user.id}).sort({date:-1});
        res.json({
            contacts
        });
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/',[auth,[
    check('name','Name is required').not().isEmpty()
]],async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return res.status(400).json({
            errors : errors.array()
        });
    }
    const {name,email,phone,type} = req.body;
    try{

        const contact = new Contact({
            name,
            email,
            phone,
            type,
            user:req.user.id
        });

        await contact.save();

        res.json({
            contact
        });
    }catch(err){
        console.log(err.message);
        res.status(500).send('Server error');
    }
});

router.put('/:id',(req,res)=>{
    res.send('Edit the contact');
}); 

router.delete('/:id',(req,res)=>{
    res.send('Delete the contact');
});

module.exports = router;