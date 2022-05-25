import React from 'react';
import { Link } from 'react-router-dom';
import  '../Style.css';

const Nav = () => {
  return (
    <div className='nav__container'>
            <div><Link to= "/home" style={{textDecoration: 'none', color: 'white'}}>HOME</Link> </div>
            <div><Link to= "/student" style={{textDecoration: 'none', color: 'white'}}>Student</Link></div>
            <div><Link to= "/contact" style={{textDecoration: 'none', color: 'white'}} >Contact</Link> </div>
    </div>
  )
}

export default Nav;