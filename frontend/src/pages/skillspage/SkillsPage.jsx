import React from 'react'
import styles from "./SkillsPage.module.css"
import { FaCss3Alt, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiExpress, SiJsonwebtokens } from 'react-icons/si';
import { useNavigate } from 'react-router-dom'

const SkillsPage = () => {

  const navigate = useNavigate()

  return (
    <>
      <div id={styles.SkillsPage}>
        <h1>Frontend Skills</h1>
        <section className={styles.SkillsPage_card}>
          <div className={styles.card1}>
            <FaHtml5 className={styles.icon} />
            <h2>HTML</h2>
            <p>Structure of web pages using semantic elements.</p>
          </div>
          <div className={styles.card1}>
            <FaCss3Alt className={styles.icon} />
            <h2>CSS</h2>
            <p>Styling and layout for modern web pages.</p>
          </div>
          <div className={styles.card1}>
            <FaJs className={styles.icon} />
            <h2>JavaScript</h2>
            <p>Interactive behavior and dynamic content.</p>
          </div>
          <div className={styles.card1}>
            <FaReact className={styles.icon} />
            <h2>React.js</h2>
            <p>Build interactive UI's with component-based architecture.</p>
          </div>
        </section>

        <h1>Backend Skills</h1>
        <section className={styles.SkillsPage_card}>
          <div className={styles.card1}>
            <FaNodeJs className={styles.icon} />
            <h2>Node.js</h2>
            <p>Server-side javaScript for scalable application.</p>
          </div>
          <div className={styles.card1}>
            <SiExpress className={styles.icon} />
            <h2>Express.js</h2>
            <p>Minimalist web framework for Node.js.</p>
          </div>
          <div className={styles.card1}>
            <SiJsonwebtokens className={styles.icon} />
            <h2>JWT</h2>
            <p>Secure authentication using JSON Web Tokens.</p>
          </div>
        </section>
        <div className={styles.btn}>
          <button onClick={() => navigate('/skills')}>Back!</button>
        </div>
      </div>
    </>
  );
};

export default SkillsPage;