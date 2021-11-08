const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Get contacts of the user');
});

router.post('/',(req,res)=>{
    res.send('Add new contact');
});

router.put('/:id',(req,res)=>{
    res.send('Edit the contact');
}); 

router.delete('/:id',(req,res)=>{
    res.send('Delete the contact');
});

module.exports = router;