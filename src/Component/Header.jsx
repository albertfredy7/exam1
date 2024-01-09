import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      
        <Navbar.Brand href="/">
            <div className='d-flex  justify-content-center align-items-center'>
                <img src="https://www.kindpng.com/picc/m/399-3992452_project-management-insights-and-data-and-insights-icon.png" fluid width={100} alt="" />
                <h2>Product Management</h2>
            </div>
        </Navbar.Brand>
        
      
    </Navbar>
    </div>
  )
}

export default Header