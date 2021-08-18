import React,{createContext} from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
    {id:1, task: "Learn React", done:false},
    {id:1, task: "Get a job", done:true},

]

export const TodosContext = createContext();

function TodosProvider(props){
    const{todos,addTodo,handleDelete,toggleTodos,editTodo} = useTodoState(defaultTodos)

    return(
        <TodosContext.Provider value={{todos,addTodo,handleDelete,toggleTodos,editTodo}}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosProvider
