import React from 'react'
import styles from "./TestingSkills.module.css"
import { useNavigate } from 'react-router-dom';

const TestingSkills = () => {

 const navigate = useNavigate();
  return (
    <>
                  <div id={styles.TestingSkills}>
                    <h1>Testing Skills</h1>
                    <section className={styles.TestingSkills_card}>
                        <div className={styles.card1}>
                          <h2>Functional Testing</h2>
                          <p>Functional testing is a type of software testing that verifies that the system behaves according to the specified requirements by checking its functions and features.</p>
                        </div>
                        <div className={styles.card1}>
                          <h2>Black Box Testing</h2>
                          <p>Black box testing is a software testing method where the tester evaluates the functionality of an application without knowing its internal code or structure, focusing only on inputs and expected outputs.</p>
                        </div>
                        <div className={styles.card1}>
                          <h2>Regression Testing</h2>
                          <p>Regression testing is a type of software testing that ensures new code changes haven't broken existing functionality in the application.</p>
                        </div>
                        <div className={styles.card1}>
                          <h2>Smoke Testing</h2>
                          <p>Smoke testing is a quick, basic check to see if the main functions of an application work properly after a build, before doing more detailed testing.</p>
                        </div>
                        <div className={styles.card1}>
                          <h2>Sanity Testing</h2>
                          <p>Sanity testing is a focused check to verify that specific functionality or bug fixes work correctly, without doing a full regression test.</p>
                        </div>
                        <div className={styles.card1}>
                          <h2>Re-testing</h2>
                          <p>Re-testing is the process of testing a specific bug or issue again after it has been fixed to ensure the fix works correctly.</p>
                        </div>
                        <div className={styles.card1}>
                          <h2>Monkey Testing</h2>
                          <p>Monkey testing is a type of random testing where the application is tested with random inputs or actions to see if it crashes or behaves unexpectedly.</p>
                        </div>
                        <div className={styles.card1}>
                          <h2>Bug Life Cycle</h2>
                          <p>The bug life cycle is the process a defect goes through from identification to closure, including stages like New, Assigned, In Progress, Fixed, Retested, and Closed.</p>
                        </div>
                    </section>
                    <div className={styles.btn}>
                      <button onClick={()=>navigate('/skills')}>Back!</button>
                    </div>
                  </div>
        </>
  );
};

export default TestingSkills;