import React from "react";
import useToggle from "./hooks/useToggle";
import EditTodoForm from "./EditTodoForm";
import ListItem from '@material-ui/core/ListItem';
import ListItemtext from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';




function Todo(props){
    const [isEditting,toggle] = useToggle(false)
    let style ={
        textDecoration: props.todo.done ? "line-through" : "none"
    }
   const deleteTodo = ()=>{
        props.handleDelete(props.todo.id)
    }
    const toggleIsEditting = ()=>{
        toggle()
    }

    return(
        <ListItem style={{height:"64px"}}>
            {isEditting ? <EditTodoForm editTodo={props.editTodo} id={props.todo.id}
                task={props.todo.task}
                toggleIsEditting={toggleIsEditting}
            /> : 
            <>
            <Checkbox checked={props.todo.done} onClick={()=>props.toggleTodos(props.todo.id)}/>
            <ListItemtext style={style}>{props.task}</ListItemtext> 
            <ListItemSecondaryAction>
                <IconButton onClick={deleteTodo}>
                    <DeleteIcon/>
                </IconButton>
                <IconButton onClick={toggle}>
                    <EditIcon/>
                </IconButton>
                
            </ListItemSecondaryAction>    
            </>
            }            
        </ListItem>
    )
}

export default Todo