import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {

    const todosMap = ( todo ) => {
      return  (
            <TodoItem todo = { todo } />
        )
    }

    return ( 
        <div className = "list" >
            {
                todos.map ( todosMap )
            }
        </div>
    )
}

export default TodoList;