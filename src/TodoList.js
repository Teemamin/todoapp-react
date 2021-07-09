import React from "react";
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemtext from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Todo from "./Todo"





function TodoList(props){

    return(
        <Paper>
            <List>
                {props.todos.map(itm=>
                        <>
                                <Todo task={itm.task} todo={itm} key={itm.id}/>
                          
                            <Divider/>
                        </>

                    
                )}
                
            </List>

        </Paper>
    )

}

export default TodoList