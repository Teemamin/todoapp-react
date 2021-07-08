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
        <Paper>
            <form onSubmit={handleSubmit}>
                <TextField value={val} onChange={handlevalchange}/>
            </form>
        </Paper>
    )

}

export default TodoForm