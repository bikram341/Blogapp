const express = require('express');
const router = express.Router();
const Posts = require('../../model/posts');

router.post('/',(req,res) => {
	Posts.create({title:req.body.title,body:req.body.body})
	.then(new_post => res.json(new_post))
	.catch(err => res.sendStatus(404))
});

router.get('/',(req,res)=>{ 
	Posts.findAll()
	.then(allPosts => res.json(allPosts))
	.catch(err => res.sendStatus(404))
});

router.get('/:post_id',(req,res) => {
	const post_id = parseInt(req.params.post_id);
	if(Number.isInteger(post_id))
	{
		Posts.findOne({where: {id: post_id}})
		.then(post =>{
				if(post == null)
				{
					reject(); 
				}
				else
				{
					res.json(post);
				}
			}
		)
		.catch(err => res.sendStatus(404))
	}
	else{
		//res.sendStatus(500);
		res.status(500).send({success: false});
	}
	
});

router.get('/recent-posts/:num',(req,res) => {
	const num = parseInt(req.params.num);
	Posts.findAll({
      order: [["createdAt", "DESC"]],
      limit: num
    })
	.then(posts => res.json(posts))
	.catch(err => res.sendStatus())
});

router.put('/:post_id',(req,res) => {
	const post_id = parseInt(req.params.post_id);
	Posts.update(req.body, { where: { id: post_id } })
	.then(post => res.json(post))
	.catch(err => res.sendStatus(404))
});

router.delete('/:post_id',(req,res) => {
	const post_id = parseInt(req.params.post_id);
	Posts.destroy({ where: { id: post_id } })
	.then(posts => res.json(posts))
	.catch(err => res.sendStatus())
});
module.exports = router;