import React from 'react'
import './Navbar.css'

const Navbar = () => {
  
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='navbar'>
      <ul className='nav-menu'>
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("project")}>Project</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar