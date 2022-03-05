import "./CSS/LetsConnect.css";
import {SiLinkedin, SiGithub, SiFacebook} from "react-icons/si";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';





const LetsConnect = () => {
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_sy92yi6", "template_ov9t8k4", form.current, "glIDBU5mWXKVbZskw")
      .then((result) => {
        alert("Your message has been sent.  Thanks for connecting.");
      }, (error) => {
        alert("Looks like something went wrong.  Please try again.");
      });
      e.target.reset()
  };

  return (
    <div className="connect-form">
      <div className="form-container">
        <form ref={form} onSubmit={sendEmail}>

          <label>Name</label>
          <input type="text" name="name" />

          <label>Email</label>
          <input type="email" name="user_email" />

          <label>Message</label>
          <textarea name="message" />

          <button type="submit" value="Send" >Send</button>

          <div className="social">
              <div className="social-list">
                 <a className="linkedin" href="https://www.linkedin.com/in/tasha-l-egbuna/" rel="noreferrer" target="_blank"><SiLinkedin/></a>
                 <a className="github" href="https://www.github.com/tegbuna" rel="noreferrer" target="_blank"><SiGithub/></a>
                 <a className="linkedin" href="https://www.facebook.com/tasha.egbuna" rel="noreferrer" target="_blank"><SiFacebook/></a>
                 {/* <a className="github" href="/" rel="noreferrer" target="_blank"><SiGmail/></a> */}
              </div>
          </div>
        </form>
        </div>
      </div>
  );
};

export default LetsConnect