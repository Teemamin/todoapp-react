import React,{useEffect,useContext} from "react";
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
import TodosProvider from "./contexts/todos.context";



function TodoApp() {
    // const initialTodos = [{id:1,task:"Learn React",done:false}]
    // const {todos,addTodo,handleDelete,toggleTodos,editTodo} = useTodoState(initialTodos);
    let style={
        padding : 0,
        margin : 0,
        height : "100vh",
        backgroundColor : "#fafafa"
    }

  return (
    <TodosProvider>
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
                <TodoForm addTodo/>
                <TodoList/>
            </Grid>
        </Grid>
    </Paper>
    </TodosProvider>
  );
}

export default TodoApp;
