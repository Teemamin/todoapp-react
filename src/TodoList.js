import React from "react";
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemtext from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';





function TodoList(props){

    return(
        <Paper>
            <List>
                {props.todos.map(itm=>
                        <>
                            <ListItem key={itm.id}>
                                <ListItemtext>{itm.task}</ListItemtext>
                            </ListItem>
                            <Divider/>
                        </>

                    
                )}
                
            </List>

        </Paper>
    )

}

export default TodoList