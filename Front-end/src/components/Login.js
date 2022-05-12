import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function login() {
    let user = {email,password};
    let result = await fetch("http://localhost:3000/api/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
      },
      body:JSON.stringify(user)
  })
  result = await result.json(); 
  console.log(result)
  localStorage.setItem("user-info",JSON.stringify(result))
  navigate("/shop")
}




  return (
    <div className='container'>
      <div className='container'>
        <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
        <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
        
          <h1>Login</h1>

        <div className='col-sm-6 offset-sm-3'>
          
          <input 
          type="text" 
          placeholder='Email' 
          className='form-control'
          onChange={(e) => setEmail(e.target.value)}  
          required
          />

          <br/>

          <input 
          type="password" 
          placeholder='Password' 
          className='form-control'
          onChange={(e) => setPassword(e.target.value)}
          required
          />

          <br/>

          <button className='btn btn-primary' type="submit" onClick={login}>Login</button>

      </div>
    </div>
  </div>
)}
export default Login




