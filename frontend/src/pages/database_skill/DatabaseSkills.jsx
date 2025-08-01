import React from 'react'
import styles from "./DatabaseSkills.module.css"
import { FaDatabase } from 'react-icons/fa';
import { TbFileTypeSql } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const DatabaseSkills = () => {

 const navigate = useNavigate()

  return (
    <>
      <div id={styles.DatabaseSkills}>
        <h1>Database Skills</h1>
        <section className={styles.DatabaseSkills_card}>
          <div className={styles.card1}>
            <FaDatabase className={styles.icon} />
            <h2>MongoDB</h2>
            <p>MongoDB is a NoSQL database that stores data in a flexible, JSON-like format called BSON.</p>
          </div>
          <div className={styles.card1}>
            <TbFileTypeSql className={styles.icon} />
            <h2>SQL</h2>
            <p>SQL is a standard language used to manage and manipulate relational databases, where data is stored in tables format.</p>
          </div>
        </section>
        <div className={styles.btn}>
          <button onClick={() => navigate('/skills')}>Back!</button>
        </div>
      </div>
    </>
  );
};

export default DatabaseSkills;