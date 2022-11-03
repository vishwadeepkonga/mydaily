import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react'
import Todo from './components/Todo';
import 'bootstrap/dist/css/bootstrap.min.css';
import todocss from './components/Todo.css'


const getDatafromLS=()=>{
  const data=localStorage.getItem('Todos')
  if(data)
  {
    return JSON.parse(data)
  }
  else{
    return []
  }
}

function App() {
  
    const[todos,setTodo]=useState(getDatafromLS())
    const[title,setTitle]=useState('')
    const[username,setUsername]=useState('')
    const[description,setDescription]=useState('')
    const[enddate,setEnddate]=useState('')
    const[isEditing,setisEditing]=useState(false)
    const[editId,setEditid]=useState(null)
   
    const handleSubmit=(e)=>{
       e.preventDefault();
   
   let todo={
       title,
       username,
       description,
       enddate:new Date(enddate)
   }
   if(!isEditing){
    setTodo([...todos,todo])
  }
  else{
    EditTodovalues(editId)
  }
  setTitle('')
  setDescription('')
  setEnddate('')
  setUsername('')
    }

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])
   const deleteTodo=(id)=>{
    let filteredTodo=todos.filter((item,index)=>index!==id)
    setTodo(filteredTodo)
   }
   const EditTodo=(id)=>{
    setisEditing(true)
setEditid(id)
    }
    const EditTodovalues=(id)=>{
       
      let currentTodo=todos.find((item,index)=>index===id)
      
      currentTodo.title=title
      currentTodo.username=username
      currentTodo.description=description
      currentTodo.enddate=enddate
    
      let filteredTodo=todos.filter((item,index)=>index!==id)
      console.log(filteredTodo);
      setTodo([...filteredTodo,currentTodo])
  
   setisEditing(false)
    }
    
       return(
           <div>
                       <div>
                       <form onSubmit={handleSubmit} className='form-container'>
               <input type='text' onChange={(e)=>setTitle(e.target.value)} value={title}></input>
               <input type='text' onChange={(e)=>setUsername(e.target.value)} value={username}></input>
               <input type='text' onChange={(e)=>setDescription(e.target.value)} value={description}></input>
               <input type='date' onChange={(e)=>setEnddate(e.target.value)} value={enddate}></input>
               <button type='submit' >{ isEditing ?'EDIT':'ADD'}</button>
                
              </form>
   
               </div>
               <Todo todos={todos} deleteTodo={deleteTodo} EditTodo={EditTodo}/>
               
           </div>
     );
}

export default App;
