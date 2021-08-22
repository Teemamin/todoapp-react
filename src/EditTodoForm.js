import React,{useContext} from "react";
import TextField from '@material-ui/core/TextField';
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./contexts/todos.context";



function EditTodoForm(props){
    const [val,handlevalchange,resetval] = useInputState(props.task)
    const {dispatch} = useContext(TodosContext);
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch({type:"EDIT",id:props.id, newTask:val})
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