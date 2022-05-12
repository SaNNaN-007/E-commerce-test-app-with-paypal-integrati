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

<nav className='nav-color'>
    <div className="nav-wrapper">
    <div className='pad'>
      <Link to="/shop" className="brand-logo">Shopping App</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">

        <li className='paddd'>
        <button className='btn '>
          <Link to="#">
            <strong className='center'> Cart </strong>{' '}
            {props.countCartItems ? (
              <button className="badge">{props.countCartItems}</button>
            ) : (
              ' '
            )}  
          
          </Link>
          </button>
        </li>

        <li>
          {
            user ?
            <>
            <ul>
              <li><h2 className='center padd'> {user && user.email}</h2></li>
              <li><button className='btn' onClick={logout}> Log Out </button></li>
              </ul>
            </>
            :
            <Link to="/" className='btn'> Log In </Link>
          }
        </li>
        

      </ul>
      </div>
    </div>
    
  </nav>
  <hr />
      
      </>
  );
}