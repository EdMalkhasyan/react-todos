import TodoItem from "./TodoItem"

function TodoList({todos, onChange, onDelete}) {
  return <div style={{overflowY: 'auto', maxHeight: 255}}>
    {
      todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onChange={onChange}
            onDelete={onDelete}
          />
        )
      })
    }
  </div>
}

export default TodoList