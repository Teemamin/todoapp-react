import React,{useContext} from "react";
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { TodosContext } from "./contexts/todos.context";
import Todo from "./Todo"





function TodoList(props){
    const {todos} = useContext(TodosContext);
    if(todos.length)
        return(
            <Paper>
                <List>
                    {todos.map(itm=>
                            <>
                                    <Todo task={itm.task}
                                    todo={itm}
                                    key={itm.id}/>
                                <Divider/>
                            </>
                    )}
                    
                </List>

            </Paper>
        )
    return null

}

export default TodoList