import { useState } from "react";
import Time from "./date/Time";
import TodoForm from "./todo/TodoForm";
import TodoList from "./todo/TodoList";
import './style/App.css';

function App() {
  const [ todos, setTodos ] = useState( [] );
  const [ isOpen, setIsOpen ] = useState( false );

  const onSend = ( text ) => {
    setTodos( [
        ...todos, 
         text
      ]
    )
  }
  const changeContainer = e => setIsOpen(!isOpen);    
  
  const stopProp = (e) => e.stopPropagation();

if (!isOpen ){ return(
  <div className = "App"  onClick = { changeContainer } >
  <div id = "container1" onClick = { stopProp } >
    <TodoForm
      onSend = { onSend }
    />
    <TodoList
      todos = { todos }
    />
  </div>
  </div>
)
} else {
  return (
    <div className = "App"  onClick = { changeContainer } >
          <div id ="container2"  onClick = { stopProp } >
            <Time />
            </div> 
      
    </div>
  )}
}

export default App;

