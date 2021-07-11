import { useState,useEffect } from "react";

function UseLocalStorageState(key,defaultVal){
    //make piece of state,base off of value in localStorage usin the key passed or use the defaultval 
    const [state,setState] = useState(()=>{
        //the return of this function will set the inital value of state
        let val;
        try{
            val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
        }
        catch(e){
            val = defaultVal
        }
        return val
    })


    // use useEfffect to update localStorage when state chnages
    useEffect(()=>{
        window.localStorage.setItem(key, JSON.stringify(state))
    },[state])

    return [state,setState];
}

//how to use this hook when Imported:
//eg: const [todos,setTodos] = UseLocalStorageState("todos",[])

export default UseLocalStorageState;