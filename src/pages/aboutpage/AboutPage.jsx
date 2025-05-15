import React from 'react'
import styles from "./AboutPage.module.css"
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {

    const navigate = useNavigate()

    return (
        <div id={styles.AboutPage}>
            <div className={styles.AboutPage_img}>
                <div>
                    <img src="./11.jpg" alt="" />
                </div>
            </div>

            <div className={styles.AboutPage_Content}>
                <h1>About Me</h1>
                <h3>Full Stack Developer</h3>
                <p>
                Hi, I'm Somendra Surya Jain, a passionate MERN stack developer with a strong foundation in JavaScript, React.js, and backend development. I love building web applications that are efficient, scalable, and user-friendly. With expertise in C, HTML5, CSS3, Bootstrap, and Tailwind CSS, I continuously explore new technologies and improve my problem-solving skills.
                Currently, I'm enhancing my backend skills with Node.js and MongoDB while working on real-world projects. I enjoy collaborating on innovative ideas and contributing to open-source projects.
                </p>
                <div className={styles.AboutPage_btns}>
                    <button onClick={()=>navigate('/about')
                    } type="submit">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;