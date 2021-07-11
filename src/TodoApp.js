import React,{useState} from "react";
import TodoList from "./TodoList"
import TodoForm from "./TodoForm";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
    const initialTodos = [
        {id:1,task:"HTML I",done:true},
        {id:2,task:"CSS",done:false},
        {id:3,task:"Responsive design",done:true},
        {id:4,task:"Git",done:false},
        {id:5,task:"JavaScript I",done:true}
        ];
    const [todos,settodos] = useState(initialTodos)
    let style={
        padding : 0,
        margin : 0,
        height : "100vh",
        backgroundColor : "#fafafa"
    }
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
  return (
    <Paper style={style}>
        <AppBar position="static">
        <Toolbar>
            <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
            </IconButton>
            <Typography variant="h6">
            News
            </Typography>
            <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
        <Grid container justifyContent="center" style={{margin:"1rem 0"}}>
            <Grid item xs={11} md={8} lg={4}>
                <h1>Todo Items</h1>
                <TodoForm addTodo={addTodo}/>
                <TodoList todos={todos} handleDelete={handleDelete} 
                    toggleTodos={toggleTodos}
                    editTodo={editTodo}
                />
            </Grid>
        </Grid>
    </Paper>
  );
}

export default TodoApp;
