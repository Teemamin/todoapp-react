import React,{useState} from "react";
import useInputState from "./hooks/useInputState";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { v4 as uuidv4 } from 'uuid';
import Checkbox from '@material-ui/core/Checkbox';

function TodoForm(props){
    const [val,handlevalchange,resetval] = useInputState("")
    const [done,setdone] = useState(true)

    const handleSubmit = (e)=>{
        e.preventDefault();
        let data = {
            id : uuidv4(),
            task: val,
            done : done
        }
        props.addTodo(data)
        resetval()

    }
    const handleChange = (event) => {
        setdone( event.target.checked);
      };
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
                <Checkbox
                    checked={done}
                    onChange={handleChange}
                    name="done"
                    color="primary"
                />
            </form>
        </Paper>
    )

}

export default TodoForm