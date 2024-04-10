import React from 'react';
import { Link } from 'react-router-dom';

function NavBar({ scrollToSkills, scrollToProjects, scrollToContact, toggleArtwork }) {
  const handleSkill = () => {
    scrollToSkills();
    console.log("Scrolling to skills...");
  };

  const handleProjects = () => {
    scrollToProjects();
    console.log("Scrolling to projects...");
  };

  const handleContact = () => {
    scrollToContact();
    console.log("Scrolling to contact...");
  };

  const handleArtwork = () => {
    toggleArtwork();
    console.log("Toggling artwork...");
  };

  return (
    <nav>
      <ul>
        <li><Link to="/skills" onClick={handleSkill}>Skills</Link></li>
        <li><Link to="/projects" onClick={handleProjects}>Projects</Link></li>
        <li><Link to="/contact" onClick={handleContact}>Contact</Link></li>
      </ul>
      <Link className='artwork' to="/Artworks" onClick={handleArtwork}>Artwork</Link>
    </nav>
  );
}

export default NavBar;
