import {useState} from 'react'
import './App.css'
// import React from 'react'
import {v4} from 'uuid'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

function id() {
  return v4()
}

function App() {
  
  const [todos, setTodos] = useState([
    {
      id: id(),
      text: 'Learn JS',
      isCompleted: false      
    },
    {
      id: id(),
      text: 'Learn CSS',
      isCompleted: false    
    },
    {
      id: id(),
      text: 'Learn React',
      isCompleted: false      
    }
  ])

  return (
    <div className="App">
      <header>
        <h1 className="todoAppTitle">todos</h1>
      </header>

      <TodoForm onAdd={(text) => {
        if (text !== '' && text !== ' ') {
          setTodos([
            ...todos,
            {
              id: id(),
              text: text,
              isCompleted: false
            }
          ])
        }
      }} />
      <TodoList
        todos={todos} 
        onDelete={(todo) => {
          setTodos(todos.filter((t) => t.id !== todo.id))
        }}
        onChange={(newTodo) => {
          setTodos(todos.map((todo) => {
            if (todo.id === newTodo.id) {
              return newTodo
            } else {
              return todo
            }
          }))
        }}
      />
      <TodoFooter todos={todos} onClearCompleted={() => {
        setTodos(todos.filter(todo => !todo.isCompleted))
      }} />
    </div>
  )
}

export default App