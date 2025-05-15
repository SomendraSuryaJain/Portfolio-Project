import React from 'react'
import styles from "./HomePage.module.css";
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import AboutPage from '../aboutpage/AboutPage';
import ServicesPage from '../servicepage/ServicesPage';
import PortfolioPage from '../portfoliopage/PortfolioPage';
import ContactPage from '../contactpage/ContactPage';
import { FaSquareInstagram } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
    <section id={styles.HomePage}>
      <div className={styles.HomePage_Content}>
        <span>Hello, It's me</span>
        <h1>Somendra Surya Jain</h1>
        <h3>And I'm a MERN Stack Developer</h3>
        <p>
        Hi, I'm Somendra Surya Jain, a passionate MERN stack developer with a strong foundation in JavaScript, React.js, and backend development. I love building web applications that are efficient, scalable, and user-friendly. With expertise in C, HTML5, CSS3, Bootstrap, and Tailwind CSS, I continuously explore new technologies and improve my problem-solving skills.

        Currently, I'm enhancing my backend skills with Node.js and MongoDB while working on real-world projects. I enjoy collaborating on innovative ideas and contributing to open-source projects.
        </p>
        <div className={styles.HomePage_icons}>
          <span>
            <Link to="https://github.com/SomendraSuryaJain" target="_blank"><FaGithub /></Link>
          </span>
          <span>
            <Link to="https://www.linkedin.com/in/somendra-surya-jain-5a922621a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><FaLinkedin /></Link>
          </span>
          <span>
           <Link to="https://www.instagram.com/somendra_surya_jain?igsh=MjZ3aXowN2toODF2" target="_blank"> <FaSquareInstagram /></Link>
          </span>
          <span>
            <Link to="https://www.facebook.com/share/16CK6AT92D/" target="_blank"><FaFacebook /></Link>
          </span>
        </div>
        <div className={styles.HomePage_btns}>
          <a className={styles.download} href="../Assets/Biodata_Somendra Surya Jain.docs" download>Download CV
          <FaDownload />
          </a>
        </div>
      </div>

      <div className={styles.HomePage_img}>
        <div>
          <img src="./11.jpg" alt="" />
        </div>
      </div>
      
    </section>
    <AboutPage/>
    <ServicesPage />
    <PortfolioPage />
    <ContactPage />
    </>
  );
};

export default HomePage;


{/* <button><a href="../Assets/Biodata_Somendra Surya Jain.docs" download>Download CV
          <FaDownload />
          </a></button> */}