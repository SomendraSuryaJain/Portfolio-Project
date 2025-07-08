import React from 'react'
import styles from "./PortfolioPage.module.css"

const PortfolioPage = () => {
  return (
    <>
      <div id={styles.header}>
      <h1>Latest Projects</h1>
      <div id={styles.card}>
      <section className={styles.sec}>
        <img src="./Project 6.jpg" alt="" />
          <div className={styles.project_data}>
            <h1>Portfolio</h1>
            <div className={styles.project_language}>
              <ul>
                  <li>React.js</li>
                  <li>Routing</li>
                  <li>CSS 3</li>
                  <li>HTML 5</li>
              </ul>
            </div>
            <div className={styles.project_link}>
              <a href="https://github.com/SomendraSuryaJain/Portfolio-Project" target="_blank">View Code</a>
              <a href="">Go to Site</a>
            </div>
          </div>
        </section>
        <section className={styles.sec}>
          <img src="./Project1.jpg" alt="image" />
          <div className={styles.project_data}>
            <h1>Login/SignUp Authentication</h1>
            <div className={styles.project_language}>
              <ul>
                <li>React.js</li>
                <li>Axios</li>
                <li>CSS3</li>
                <li>HTML 5</li>
              </ul>
            </div>
            <div className={styles.project_link}>
              <a href="https://github.com/SomendraSuryaJain/Login_SignUp-Authentication" target="_blank">View Code</a>
              <a href="">Go to Site</a>
            </div>
          </div>
        </section>
        <section className={styles.sec}>
          <img src="./Project 2.jpg" alt="" />
          <div className={styles.project_data}>
            <h1>User Hive/CRUD Operation</h1>
            <div className={styles.project_language}>
              <ul>
                  <li>React.js</li>
                  <li>Axios</li>
                  <li>CSS 3</li>
                  <li>HTML 5</li>
              </ul>
            </div>
            <div className={styles.project_link}>
              <a href="https://github.com/SomendraSuryaJain/User-hive" target="_blank">View Code</a>
              <a href="">Go to Site</a>
            </div>
          </div>
        </section>
        <section className={styles.sec}>
          <img src="./Project 4.jpg" alt="" />
          <div className={styles.project_data}>
            <h1>Dashboard</h1>
            <div className={styles.project_language}>
              <ul>
                  <li>React.js</li>
                  <li>JS</li>
                  <li>CSS 3</li>
                  <li>HTML 5</li>
              </ul>
            </div>
            <div className={styles.project_link}>
              <a href="">View Code</a>
              <a href="">Go to Site</a>
            </div>
          </div>
        </section>
        <section className={styles.sec}>
          <img src="./Project 5.jpg" alt="" />
          <div className={styles.project_data}>
            <h1>Todo App</h1>
            <div className={styles.project_language}>
              <ul>
                  <li>React.js</li>
                  <li>JS</li>
                  <li>CSS 3</li>
                  <li>HTML 5</li>
              </ul>
            </div>
            <div className={styles.project_link}>
              <a href="https://github.com/SomendraSuryaJain/TODO-App" target="_blank">View Code</a>
              <a href="">Go to Site</a>
            </div>
          </div>
        </section>
        <section className={styles.sec}>
          <img src="./Project 3.jpg" alt="" />
          <div className={styles.project_data}>
            <h1>Calculator</h1>
            <div className={styles.project_language}>
              <ul>
                  <li>React.js</li>
                  <li>JS</li>
                  <li>CSS 3</li>
                  <li>HTML 5</li>
              </ul>
            </div>
            <div className={styles.project_link}>
              <a href="">View Code</a>
              <a href="">Go to Site</a>
            </div>
          </div>
        </section>          
      </div>
    </div> 
    </> 
  );
};

export default PortfolioPage;