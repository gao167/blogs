var express = require('express');
var router = express.Router();

const userRouter = require('./userRouter')
const categoryRouter = require('./categoryRouter')
const blogRouter = require('./blogRouter')

router.use('/users',userRouter)
router.use('/categoris',categoryRouter)
router.use('/blogs',blogRouter)


module.exports = router;
