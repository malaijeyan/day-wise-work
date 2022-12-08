import React from 'react';
import {useState,useEffect} from "react";
function Register(){
    const[input,setInput] = useState({
        
        name:"",
        dob:"",
        gender:"",
        mobile:"",
        email:""

       
    });  

   useEffect(()=>{
        localStorage.setItem("form",JSON.stringify(input));
    },[input]);

    const handleChange=(e)=>{
        // const {name,input}=e.target;
        // setInput({...input,[name]:input});
        setInput({[e.target.name]:e.target.value})
        // const value=e.target.value;
        // setInput({...input,[e.target.name]:value})
        // input[name]=value;
        // setInput(input);
        console.log(input);
       
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        // alert(input.name);
        console.log(input);
    } 

    
    return(
        <div>
        <form >

            <h3>REGISTER HERE</h3>         

            {/* <label>NAME</label> */}
            <input value={input.name} onChange={(e)=>(handleChange(e))} type="text" name="name" placeholder='type your name here' required ></input><br></br><br></br>
            {/* <input value={name} onChange={(e)=>{reg.name}} type="text" name="name" placeholder='type your name here'  ></input><br></br><br></br> */}
            {/* <label>DOB</label> */}
            <input value={input.dob} onChange={(e)=>(handleChange(e))} type="date" name="dob" required ></input><br></br><br></br>
            {/* <label>GENDER</label> */}
            <input value={input.gender} onChange={(e)=>(handleChange(e))} type="text" name="gender" placeholder='male/female' required></input><br></br><br></br>
            {/* <label>MOBILE</label> */}
            <input value={input.mobile} onChange={(e)=>(handleChange(e))} type="text" name="mobile" placeholder='type your number here' required></input><br></br><br></br>
            {/* <label>Email</label> */}
            <input value={input.email} onChange={(e)=>(handleChange(e))} 
             type="email" name="email" placeholder='type your email here'required ></input><br></br><br></br>
        
            <button type="submit" onClick={(e)=>(handleSubmit(e))} >register</button>
        </form>
        </div>
    );
}

export default Register;
