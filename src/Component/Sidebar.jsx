import React from 'react';
import { Nav } from 'react-bootstrap';

function Sidebar() {
    return (
        <Nav className="flex-column bg-dark col-1 " style={{ width: '300px',height:"100vh", padding: '15px', borderRight: '1px solid #dee2e6'}}>
            <Nav.Link className='text-light' href="#home"> <i class="fa-solid fa-bars"></i> Dashboard</Nav.Link>
            <Nav.Link className='text-light' href="#about"><i class="fa-solid fa-file-code"></i> Products</Nav.Link>
            
        </Nav>
    );
}

export default Sidebar;
