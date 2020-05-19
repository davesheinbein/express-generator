const todoDB = require('../models/todo');

function index(req, res, next) {
    res.render('todos/index', {
        todos: todoDB.getAll()
    })
 }

function show(req, res, next){
    console.log(req.params, "<-- req.params")
    res.render('todos/show', {
        todo: todoDB.getOne(req.params.id)
    })
}

  module.exports = {
      index,
      show
  }