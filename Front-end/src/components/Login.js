import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {



    const [formData,setFormData]=useState({})
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(formData)
      login();
    }


    const navigate = useNavigate();

    async function login() {
      
      let result = await fetch("http://localhost:3000/api/login",{
          method:"POST",
          headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(formData)
    })
    // .catch(error => { console.log(error.message)});
  
    result = await result.json(); 
    console.log(result)
    localStorage.setItem("user-info",JSON.stringify(result))
    navigate("/shop") 
    
  }




  return (

    <div className="login-box">
      <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="user-box">
            <input 
            type="email"
            name="email" 
            onChange={handleChange}
            required
            />
            <label>Email</label>
          </div>
          
          
          <div className="user-box">
            <input 
            type="password" 
            name="password" 
            onChange={handleChange}
            required
            />
            <label>Password</label>
          </div>


          <a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <button type='submit' className='btn'>Submit</button>
          </a>
        </form>
</div>
    
  )
}


