import React from 'react';
import styles from "./Navbar.module.css";
import { NavLink, useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div onClick={() => navigate('/')} className={styles.logo}>MyPortfolio</div>
        <ul className={styles.navbarList}>
          <li><NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink></li>
          <li><NavLink to="/skills" className={({ isActive }) => isActive ? styles.active : ''}>Skills</NavLink></li>
          <li><NavLink to="/projects" className={({ isActive }) => isActive ? styles.active : ''}>Projects</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ''}>Contact</NavLink></li>
        </ul>
        <div><IoMenu className={styles.menu_icon} />
          <div className={styles.Dropdown}>
            <ul className={styles.sublist}>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="skills">Skills</NavLink></li>
              <li><NavLink to="/projects">Project</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
