import { useState } from "react";


export function CreateTodo(props){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleTitle = (e) => {
             setTitle(e.target.value);
             console.log(props);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
}
    const handleClick = () =>{
        props.handleClick(title, description);
    }

    return <div class="Todo">
        <input type = "text" onChange={handleTitle} placeholder="title"></input><br></br>


        <input type= "text" onChange={handleDescription} placeholder="description"></input><br></br>

        <button onClick ={handleClick} > Add </button>

    </div>
}