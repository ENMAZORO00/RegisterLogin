import React,{useState} from "react";


export const Register = (props)=>{
   const [form,setForm] = useState({});
   
   const handleForm = (e)=>{
     setForm({
        ...form,
        [e.target.name]:e.target.value
     })
   }
    const handleSubmit =async(e)=>{
        e.preventDefault();
        const response = await fetch('http://localhost:8080/demo',{
            method:'POST',
            body:JSON.stringify(form),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const data= await response.json();
        console.log(response);
        
    }

    return(
        <div className="auth-form-container">
            <h2>Register Form</h2>
        <form  onSubmit={handleSubmit} className="register-form">
            <label for="name">Name</label>
            <input  onChange={handleForm} type="name" placeholder="Name" id="name" name="name"/>
            <label for="phone">Phone Number</label>
            <input  onChange={handleForm} type="number" placeholder="phone number" id="phone" name="phone"/>
            <label for="email">Email</label>
            <input  onChange={handleForm} type="email" placeholder="youremail@gmail.com" id="email" name="email"/>
            <label for="password">Password</label>
            <input  onChange={handleForm} type="password" placeholder="***********" id="password" name="password"/>
            <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Already have an account? Log IN here.</button>
        </div>
    )
}