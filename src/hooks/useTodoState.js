import UseLocalStorageState from "./useLocalStorageState"

export default initialTodos=>{
    const [todos,settodos] = UseLocalStorageState("todos",initialTodos)

    const addTodo = (newTodo)=>{
        settodos([...todos,newTodo])
    }
    const handleDelete = (id)=>{
        let updatedTodo = todos.filter(todo=>todo.id != id)
        settodos(updatedTodo)
    }
    const toggleTodos = (id)=>{
        let updatedTodo = todos.map(todo=>{
            if(todo.id === id){
               return {...todo,done:!todo.done}
            }
            return todo
        })
        settodos(updatedTodo)
    }
    
    const editTodo =(id,newTask)=>{
        let updated = todos.map(todo=>todo.id === id? {...todo,task:newTask}:todo)
        settodos(updated)

    }

    return{
        todos,
        addTodo: addTodo,
        handleDelete : handleDelete,
        toggleTodos : toggleTodos,
        editTodo : editTodo
        
    }


}




