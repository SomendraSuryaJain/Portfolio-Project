import React, { useState } from 'react'
import styles from "./ContactPage.module.css"

const ContactPage = () => {
let [data, setData] = useState({
  username: "",
  email: "",
  phoneno: "",
  subject: "",
  textarea: ""
});

function handleChange(e){
  let {name, value} = e.target;
  setData({...data, [name]: value});
}

function formSubmit(e) {
  e.preventDefault();
  console.log(data);

  setData({
    username: "",
    email: "",
    phoneno: "",
    subject: "",
    textarea: ""
  });
}

  return (
    <>
      <div id={styles.ContactPage}>
      <h1>Contact Me!</h1>
      <form className={styles.form} onSubmit={formSubmit}>
        <div className={styles.formgroup}>
          <input type="text" placeholder="Full Name" name="username" value={data.username} onChange={handleChange}/>
          <input type="email" placeholder="E-mail" name="email" value={data.email} onChange={handleChange}/>
          <input type="phone" placeholder="Phone No" name="phoneno" value={data.phoneno} onChange={handleChange}/>
          <input type="text" placeholder="Subject" name="subject" value={data.subject} onChange={handleChange}/>
        </div>
          <textarea placeholder='Text message!' name="textarea" value={data.textarea} onChange={handleChange}></textarea>
          <button type="submit" >Send Message</button>
      </form>
    </div>
    </>
  );
};

export default ContactPage;