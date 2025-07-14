// src/components/TodoList.js
import React, { useState } from 'react';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  return (
    <div className="bg-green-100 p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-2">To-Do List</h2>
      <input
        type="text"
        value={task}
        placeholder="Add task..."
        onChange={(e) => setTask(e.target.value)}
        className="border p-2 mr-2 rounded"
      />
      <button onClick={addTask} className="bg-green-500 text-white px-3 py-1 rounded">Add</button>
      <ul className="mt-3 list-disc list-inside">
        {todos.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
