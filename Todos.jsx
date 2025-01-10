

export function Todos({todos}){
    console.log(todos);
    return <div>
        <div>Todo List</div>
        {todos.map(function(todo){
            return <div>

                {todo?.title}<br></br>
                {todo?.description}<br></br>
                

         </div>
        })}
    </div>
}