import React from 'react'
import styles from "./AboutPage.module.css"

const AboutPage = () => {
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
                    excepturi unde enim. Vel molestiae ratione possimus consectetur magni
                    ab magnam autem sint iusto sed at quos, error suscipit saepe eveniet!
                    Repellendus, nulla perferendis laudantium natus exercitationem sed
                    minus? Obcaecati pariatur voluptatibus amet corporis id deleniti
                    repellat iure accusamus rerum tempora?
                </p>
                <div className={styles.AboutPage_btns}>
                    <button type="submit">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;