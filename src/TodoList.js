import React from "react";
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from "./Todo"





function TodoList(props){
    if(props.todos.length)
        return(
            <Paper>
                <List>
                    {props.todos.map(itm=>
                            <>
                                    <Todo task={itm.task}
                                    todo={itm}
                                    key={itm.id}
                                    handleDelete={props.handleDelete}
                                    toggleTodos={props.toggleTodos}
                                    editTodo={props.editTodo}
                                    />
                            
                                <Divider/>
                            </>

                        
                    )}
                    
                </List>

            </Paper>
        )
    return null

}

export default TodoList