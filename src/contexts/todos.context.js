import React,{createContext,useReducer} from "react";
import useTodoState from "../hooks/useTodoState";
import reducer from "../reducers/todo.reducer";

const defaultTodos = [
    {id:1, task: "Learn React", done:false},
    {id:1, task: "Get a job", done:true},

]

export const TodosContext = createContext();

function TodosProvider(props){
    const [todos,dispatch] = useReducer(reducer,defaultTodos)

    return(
        <TodosContext.Provider value={{todos,dispatch}}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosProvider
