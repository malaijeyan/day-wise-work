import { Component } from "react";
// import './Todo.css';
class Todo extends Component {
    constructor(props)
    {
        super(props);
        this.state = { tasks: [], newTask: "", url:"http://localhost:4000/todotask", newId:"0"};
        this.readTask = this.readTask.bind(this);
        this.createTask = this.createTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }
    readTask() 
    {
        fetch("http://localhost:4000/todotask")
        .then((response) => response.json())
        .then((data) => this.setState({ tasks:data }))
        // .catch(error => console.log("Error", error));
        console.log(this.state.tasks);
        // console.log(data);
       
    } 
    createTask(url,postData)
    {
        fetch(url,{
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "x-access-token": "token-value",
            },
            body: JSON.stringify(postData),
        })
        .then((resp) => resp.json())
        .then((data)=>{
            this.setState({tasks: [...this.state.tasks,data] });
            this.setState({newId:0});
            this.setState({newTask:""});
        })
        .catch((err)=>console.log(err));
    }
    
    updateTask(url,putData)
    {
        fetch(url,{
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(putData),
        })
        .then((resp) => resp.json)
        .then((data => {
            this.setState({tasks: [...this.state.tasks,data] });
            this.setState({newId:0});
            this.setState({newTask:""});
        }))
        .catch((err)=>console.log(err));

    }
    deleteTask()
    {

    }
    setNewTask(e) 
    {
        this.setState({ newTask: e.target.value });
    }
    render()
    {
        return(
            <div className="todo">
            <div>Day 17 Class-Saga CRUD Operation</div>
            <h2>TODO TASKS</h2>
            <li><input type="text" value={ this.state.newTask } onChange={(e)=>{this.setNewTask(e)}}></input>
            <button onClick={() => { this.setState({
                newid: Math.max(...this.state.tasks.map((task) => task.id)),});
                this.createTask( this.state.url,{
                    id: Number( this.state.newId ) + 1,
                    task: this.state.newTask,
                });}}>create</button>
            <button onClick={() => { this.readTask(); }}>Read</button></li>
            {
                this.state.newTask
            }            
            <ul>{ this.state.tasks.map(( tasks )=>(<li key={ tasks.id }> <input type="text"value={ tasks.task }></input> 
                <button onClick={() => { this.updateTask(); }}>Update</button>
                <button onClick={() => { this.deleteTask(); }}>Delete</button>
                </li>))}
                </ul>    
              
            </div>
        );
    }
}
export default Todofetch;