import { useState } from "react";

const Listbyevent =()=>{
const [getTask,setGetTask]= useState(false)

    const todoList=[
        {id:1,task:"Buy Grocery"},
        {id:2,task:"Meet Friends"},
        {id:3,task:"Attend Family Function"},
        {id:4,task:"Watck New Movie"},
        {id:5,task:"Pay eB Bill"},
    ];
    return(<div>
        <h2>Todo List</h2>
        <button onClick={()=>(setGetTask(!getTask))}>Read</button>
        {getTask&&
        (<ul>
            {todoList.map(
                (task)=>(<li key={task.id}>{task.task}</li>)
            )}
        </ul>)
        }
    </div>);
}
export default Listbyevent;