import React, {useState} from 'react';
import '../Todo.css';


function Todo({ todo, index, completeTodo, removeTodo }){
    return(
        <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => removeTodo(index)}>X</button>
            </div>
        </div>
    )
}


function TodoForm({addTodo}) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value)
        setValue("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={e => setValue(e.target.value)} />
        </form>
    )
}


function Master() {
    const [todos, setTodos] = useState([
        {
            text: "Learn ReactJs",
            isCompleted : false
        },
        {
            text: "Task Week 1",
            isCompleted : true
        },
        {
            text: "Build WaysHub APP",
            isCompleted : false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text}];
        setTodos(newTodos)
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos)
    };  

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos)
    }

    return(
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo
                    key={index}
                    index={index}
                    todo={todo}
                    completeTodo={completeTodo}
                    removeTodo={removeTodo}
                    />
                ))}

                <TodoForm addTodo={addTodo} />
            </div>
        </div>
    )
}

export default Master