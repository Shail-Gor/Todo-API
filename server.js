var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
    id: 1,
    descrption: 'Meet mom for lunch',
    completed: false
}, {
    id: 2,
    descrption: 'Go to market',
    completed: false
},{
    id: 3,
    descrption: 'Go to Ahmedabad',
    completed: true
}];

app.get('/', function (req, res) {
    res.send('Todo API Root');
});

// GET /todo's
app.get('/todos', function (req, res) {
    res.json(todos);
});

// GET /todo's/:id
app.get('/todos/:id', function (req, res) {
    var todoId = parseInt(req.params.id, 10);
    var matchedTodo;

    todos.forEach(function(todo) {
        if ( todoId === todo.id){
            matchedTodo = todo;
        }
    });

    if (matchedTodo){
        res.json(matchedTodo);
    }else{
        res.status(404).send();
    }

    // res.send('Asking for todo with id of ' + req.params.id);
});

app.listen(PORT, function () {
    console.log('Express listening on port ' + PORT);
});