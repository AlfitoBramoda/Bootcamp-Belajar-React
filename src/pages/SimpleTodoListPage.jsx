// SimpleTodoList.jsx - A basic todo list component
import { useState } from 'react';

function SimpleTodoList() {
    // State to store our todos
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    // Function to add a new todo
    const addTodo = () => {
        if (inputValue.trim() !== '') {
        setTodos([...todos, { id: Date.now(), text: inputValue }]);
        setInputValue(''); // Clear the input
        }
    };

    // Function to delete a todo
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
        <h2>My Todo List</h2>
        
        {/* Input section */}
        <div>
            <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a new todo..."
            />
            <button onClick={addTodo}>Add Todo</button>
        </div>

        {/* Todo list */}
        <ul>
            {todos.map(todo => (
            <li key={todo.id}>
                {todo.text}
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default SimpleTodoList;