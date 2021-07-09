import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemtext from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';




function Todo(props){
    let style ={
        textDecoration: props.todo.done ? "line-through" : "none"
    }
    return(
        <ListItem>
            <Checkbox checked={props.todo.done}/>
            <ListItemtext style={style}>{props.task}</ListItemtext> 
            <ListItemSecondaryAction>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
                <IconButton>
                    <EditIcon/>
                </IconButton>
                
            </ListItemSecondaryAction>                
        </ListItem>
    )
}

export default Todo