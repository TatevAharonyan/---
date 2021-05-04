import { useState } from "react";

function TodoForm({ onSend }) {
    const  [text, setText ] = useState( "" );
    
    const changeInputText = (e) => {
        setText( e.target.value );
    }

    const formSubmit = ( e ) => {
        e.preventDefault();
        if ( text !== "" ) onSend( text );
        setText( "" )
    }

    return (
        <form onSubmit = { formSubmit } className = "form" >
            <input typr = "textarea" value = {text} onChange = { changeInputText } placeholder = "Add to text..." />
            <button> Send </button>
        </form>
    )
}
export default TodoForm;