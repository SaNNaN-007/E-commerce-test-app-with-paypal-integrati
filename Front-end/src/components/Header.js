import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header(props) {

  const navigate = useNavigate();

  let user = JSON.parse(localStorage.getItem("user-info"));

  function logout() {
    localStorage.clear();
    navigate("/")
  }

  return (
    <>
      <div className='block-header row logo'>
       <p>Shopping Cart</p>
      </div>

       <div className='block-header row'>
       <Link to="#">
          <strong> <button className='btn'> Cart </button> </strong>{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ' '
          )}  
        
        </Link>
        <hr />
        
        {
          user ?
          <h1 className='center '> {user && user.email} <button className='btn' onClick={logout}> Log out </button></h1>
          :
          <Link to="/"><button className='btn btn-large'> Log In </button></Link>
        }
      </div>

      </>
  );
}