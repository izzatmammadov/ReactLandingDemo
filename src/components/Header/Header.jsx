import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navigate = useNavigate()
  return (
    <nav className="navbar text-light d-flex justify-content-between px-5 py-2 align-items-center bg-secondary">
        <div className=''><img style={{width:"80px", borderTopRightRadius:"50%", borderBottomLeftRadius:"50%"}} src="https://images-platform.99static.com//EJ1CS_OYaOdtZJyI8jGvIZrl1XQ=/489x489:1552x1552/fit-in/500x500/99designs-contests-attachments/79/79168/attachment_79168569" alt="" /></div>
        <ul style={{borderTopLeftRadius:"20px", borderBottomRightRadius:"20px"}} className='d-flex justify-content-around align-items-center bg-dark p-2 m-0 w-50'>
            <li onClick={()=>{navigate("/")}} className='nav-link fs-5'>HOME</li>
            <li onClick={()=>{navigate("/about")}} className='nav-link fs-5'>ABOUT</li>
            <li onClick={()=>{navigate("/service")}} className='nav-link fs-5'>SERVICE</li>
            <li onClick={()=>{navigate("/contact")}} className='nav-link fs-5'>CONTACT</li>
        </ul>
</nav>
  )
}
