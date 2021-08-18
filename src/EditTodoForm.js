import React,{useContext} from "react";
import TextField from '@material-ui/core/TextField';
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./contexts/todos.context";



function EditTodoForm(props){
    const [val,handlevalchange,resetval] = useInputState(props.task)
    const {editTodo} = useContext(TodosContext);
    const handleSubmit = (e)=>{
        e.preventDefault()
        editTodo(props.id,val)
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