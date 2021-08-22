import { v4 as uuidv4 } from 'uuid';

const reducer = (state,action)=>{
    switch(action.type){
        case "ADD" : return [...state,action.task]
        case "REMOVE" : return state.filter(todo=>todo.id != action.id)
        case "TOGGLE" : 
        return state.map(todo=>todo.id === action.id ? {...todo,done:!todo.done} : todo)
        case "EDIT" : return state.map(todo=>todo.id === action.id? {...todo,task:action.newTask}:todo)
        default:
            return state;
    }
}

export default reducer;

// how the action will be passed
// {type: "ADD", task: "Walk the Dog"}
// {type: "REMOVE", id: 1235}
// {type: "TOGGLE", id: 4567}
// {type: "EDIT", id: 8765, newTask: "learn React"}