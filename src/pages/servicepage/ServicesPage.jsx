import React from 'react'
import styles from "./ServicesPage.module.css"
import { FaCode } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
// import { IoBarChartOutline } from 'react-icons/io5';

const ServicesPage = () => {

  const navigate = useNavigate()

  return (
    <>
      <div id={styles.ServicesPage}>
        <h1>Our Skills</h1>
        <section className={styles.ServicesPage_card}>
            <div className={styles.card1}>
              <FaCode className={styles.icon} />
              <h2>Web Development</h2>
              <p>Web development involves creating, building, and maintaining websites and web applications, encompassing tasks like coding, design, and ensuring functionality and performance.</p>
              <button onClick={()=>navigate('/skillspage')} type="submit">Read More</button>
            </div>
            <div className={styles.card1}>
              <FaPencil className={styles.icon} />
              <h2>Manual Testing</h2>
              <p>Web development involves creating, building, and maintaining websites and web applications, encompassing tasks like coding, design, and ensuring functionality and performance.</p>
              <button onClick={()=>navigate('/testingskills')} type="submit">Read More</button>
            </div>
            <div className={styles.card1}>
              <FaDatabase className={styles.icon} />
              <h2>Database</h2>
              <p>Web development involves creating, building, and maintaining websites and web applications, encompassing tasks like coding, design, and ensuring functionality and performance.</p>
              <button  onClick={()=>navigate('/databaseSkills')} type="submit">Read More</button>
            </div>
        </section>
    </div>
    </>
    
  );
};

export default ServicesPage;