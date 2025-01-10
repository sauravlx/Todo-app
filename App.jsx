import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import { CreateTodo } from './components/CreateTodo'
import {Todos} from './components/Todos'


function App() {
  const [todos, setTodos] = useState([]);
    useEffect(()=>{

    }, [todos] );

    const handleClick = (title,description) =>{
      let a= { };
          a.title=title;
          a.description=description;
          console.log(a);
          let arr = todos;
          arr.push(a);
          setTodos(arr);
          
      console.log("clicked");
  }


  return (
    <div>
      <CreateTodo handleClick={handleClick}> </CreateTodo>
     {/* <Todos todos = {todos}></Todos> */}

      <div>
        <div>Todo List</div>
        {todos.map(function(todo){
            return <div>
              

                {todo?.title}<br></br>
                {todo?.description}<br></br>
                

         </div>
        })}
    </div>

    </div>
  )
}

export default App
