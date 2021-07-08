import {useState} from "react";

export default  (initialVal)=> {
  const[inputtx,setinputtxt]=useState(initialVal)
  const handleChange=(e)=>{
     setinputtxt(e.target.value)
   }

  const restinput =()=>{
    setinputtxt("")
  }

  return [inputtx,handleChange,restinput]

}