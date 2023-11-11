import React from "react";

const Header = () => {
  return (
    <nav>
      <NavContenet />
    </nav>
  );
};

const NavContenet = () => (
  <>
    <h2>Chandan.</h2>
    <div>
      <a href="#home">Home</a>
      <a href="#work">Work</a>
      <a href="#timeline">Experience</a>
      <a href="#services">Services</a>
      <a href="#testimonial">Testimonial</a>
      <a href="#contact">Contact</a>
    </div>
    <a href="mailto:chandanpatro789@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
