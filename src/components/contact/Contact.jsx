import "./contact.css";
import Address from "../../img/address.png";
import GitHub from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Email from '../../img/email.png';
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qtbn0zt",
        "template_bvxjxxl",
        formRef.current,
        "mugqGBI46XwRprCi2"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={GitHub} alt="GitHub Logo" className="c-icon" />
              <a className="c-decor" href="https://github.com/Rbenney15"><button className="c-but">My GitHub Profile</button></a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Linkedin} alt="LinkedIn Logo" />
             <a className="c-decor" href="https://www.linkedin.com/in/robert-benney"><button className="c-but">My LinkedIn Profile</button></a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="Email Logo" />
             <a className="c-decor" href="rob.benney@gmail.com"><button className="c-but">My Email</button></a>
            </div>
            <div className="c-info-item">
              <img className="c-icon-add" src={Address} alt="Map icon" />
              Washington, D.C.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you!"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;