import React, { useState } from "react";
import "./ContactMe.css";
import formimg from "../../assets/Home/mailz.jpeg";
import emailjs from "emailjs-com";

import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Result = () => {
  return (
    <div className="send-popup">
      <p>Your Message has been Sent Successfully!!!</p>
    </div>
  );
};

export default function ContactMe() {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zqjbuue",
        "template_3nvqk0j",
        e.target,
        "user_CWIwvNIUxFwULumCybJGY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 5000);
  return (
    <div className="contactme-wrapper" id="ContactMe">
      <div className="contactme-header">
        <h1>ContactMe</h1>
        <h5>Let's Keep in Touch</h5>
        <div className="line-wrapper">
          {" "}
          <div className="contact-line">
            <div className="about-line"></div>{" "}
          </div>{" "}
        </div>
      </div>

      <div className="content-wrapper">
        <h2>Let's Get In Touch</h2>

        <div className="colz">
          <div className="colz-icon">
            <a href="https://www.facebook.com/jemilu.ishaq.3">
              <FaFacebook size="2em" color="white" />
            </a>
            <a href="https://www.instagram.com/jemiluishaq277 ">
              <FaInstagram size="2em" color="white" />
            </a>
            <a href="https://twitter.com/JemiluIshaq">
              <FaTwitterSquare size="2em" color="white" />
            </a>
            <a href="https://github.com/JemilCodes?tab=repositories">
              <FaGithub size="2em" color="white" />
            </a>
            <a href="https://www.linkedin.com/in/jemiliu-ishaq-a65706238/">
              <FaLinkedin size="2em" color="white" />
            </a>
          </div>
        </div>

        <div className="inner-content">
          <div className="img-container">
            <h5 className="content-h5">Send Your Mails Here !!</h5>
            <span> {result ? <Result /> : null} </span>
            <img src={formimg} alt="no internet connection" className="mailz" />
          </div>
          <form className="form-wrapper" onSubmit={sendEmail}>
            <label>Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Your Name..."
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email...."
              required
            />

            <label>Message</label>
            <textarea
              required
              className="btn-message"
              name="message"
              rows="4"
              placeholder="Your Message...."
            />
            <input className="send-btn" type="submit" value="Send " />
          </form>
        </div>
      </div>
    </div>
  );
}
