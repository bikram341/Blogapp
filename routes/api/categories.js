const express = require('express');
const router = express.Router();
const category =  require('../../model/categories');

router.post('/add',(req,res) => {
	category.create({name:req.body.name})
	.then(new_post => res.json(new_post))
	.catch(err => res.sendStatus(404))
});

router.get('/',(req,res) => {
	category.findAll()
	.then(new_post => res.json(new_post))
	.catch(err => res.sendStatus(404))
});

module.exports = router;