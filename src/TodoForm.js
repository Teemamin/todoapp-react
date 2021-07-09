import React from "react";
import useInputState from "./hooks/useInputState";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';


function TodoForm(props){
    const [val,handlevalchange,resetval] = useInputState("")
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.addTodo(val)
        resetval()

    }
    return(
        <Paper style={{margin:"1rem 0", padding:"0 1rem"}}>
            <form onSubmit={handleSubmit}>
                <TextField 
                    value={val}
                    onChange={handlevalchange}
                    margin="normal"
                    label="Add New Todo"
                    fullWidth
                />
            </form>
        </Paper>
    )

}

export default TodoForm