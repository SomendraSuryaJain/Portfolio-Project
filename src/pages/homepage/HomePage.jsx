import React from 'react'
import styles from "./HomePage.module.css";
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import AboutPage from '../aboutpage/AboutPage';
import ServicesPage from '../servicepage/ServicesPage';
import PortfolioPage from '../portfoliopage/PortfolioPage';
import ContactPage from '../contactpage/ContactPage';

// import { FaFacebook } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
    <section id={styles.HomePage}>
      <div className={styles.HomePage_Content}>
        <span>Hello, It's me</span>
        <h1>Somendra Surya Jain</h1>
        <h3>And I'm a Full Stack Developer</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
          excepturi unde enim. Vel molestiae ratione possimus consectetur magni
          ab magnam autem sint iusto sed at quos, error suscipit saepe eveniet!
          Repellendus, nulla perferendis laudantium natus exercitationem sed
          minus? Obcaecati pariatur voluptatibus amet corporis id deleniti
          repellat iure accusamus rerum tempora?
        </p>
        <div className={styles.HomePage_icons}>
          <span>
            <FaGithub />
          </span>
          <span>
            <FaFacebook />
          </span>
          <span>
            <FaLinkedin />
          </span>
          <span><FaLinkedin /></span>
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