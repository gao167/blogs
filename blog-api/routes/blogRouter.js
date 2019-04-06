var express = require('express');
var router = express.Router();
const Blog = require('../models/blogModel')
/* GET users listing. */
// const data = [
//     { id: 1, name: 'Blog 1' },
//     { id: 2, name: 'Blog 2' },
//     { id: 3, name: 'Blog 3' },
//     { id: 4, name: 'Blog 4' },
//     { id: 5, name: 'Blog 5' },
//     { id: 6, name: 'Blog 6' },
//     { id: 7, name: 'Blog 7' },
//     { id: 8, name: 'Blog 8' },
// ]


/* GET home page. */
router.route('/')
    .get((req, res,next) =>{
        Blog.find({},(err,blogs)=>{
            if(err){
                return next(err)
            }
            res.json(blogs)
        })
    })
    .post((req, res, next)=> {
        const {name} = req.body
        const newBlog = new Blog({
            name: name
        })
        newBlog.save((err,doc) =>{
            if(err){
                return next(err)
            }
            res.json(doc)
        })
    })

router.route('/:id')
    .get((req, res, next)=>{
        res.json(req.doc)
    })
    .post((req, res, next)=>{
        res.send('Post')
    })
    .delete((req, res, next)=>{
        req.doc.remove()
            .then(()=>res.end())
            .catch((err)=>next(err))
    })
    .put((req, res, next)=>{
        const {name} = req.body
        req.doc.updateOne({name: name},(err, raw)=> {
            if(err){
                return next(err)
            }
            res.end()
            console.log('Update blog thành công')
        })
    })

router.param('id',(req, res, next, id)=>{
    Blog.findOne({_id : id},(err, doc)=> {
        if(err){
            return next(err)
        }
        if(!doc){
            return next(new Error('Không tồn tại id của blog này!'))
        }
        req.doc = doc
        next()
    })
})

module.exports = router;