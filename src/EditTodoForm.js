import React from "react";
import TextField from '@material-ui/core/TextField';
import useInputState from "./hooks/useInputState";



function EditTodoForm(props){
    const [val,handlevalchange,resetval] = useInputState(props.task)
    const handleSubmit = (e)=>{
        e.preventDefault()
        props.editTodo(props.id,val)
        resetval();
        props.toggleIsEditting()
    }
    return(
        <form onSubmit={handleSubmit}
            style={{marginLeft:"1rem", width:"50%"}}
        >
            <TextField 
                        value={val}
                        onChange={handlevalchange}
                        margin="normal"
                        label="Edit Todo"
                        fullWidth
                        autoFocus
            />
        </form>
    )
}

export default EditTodoForm;