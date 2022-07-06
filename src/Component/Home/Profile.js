import React, { Component } from "react";
import Typical from "react-typical";
import "./Profile.css";
import { Link } from "react-scroll";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

class Profile extends Component {
  handleclick = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    function clicked() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");

      document.querySelectorAll(".list").forEach((n) =>
        n.addEventListener("click", () => {
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
        })
      );
    }
    clicked();
  };
  render() {
    return (
      <div>
        <div className="nav-wrapper">
          <h1 className="mobile-header">JemilPortofolio</h1>
          <h1 className="mobile-header mobile-header-toggle">JemilWeb</h1>

          <ul className="nav-menu">
            <Link
              className="list"
              activeclass="active"
              to="Home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Home
            </Link>
            <Link
              className="list"
              activeclass="active"
              to="AboutMe"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              AboutMe
            </Link>
            <Link
              className="list"
              activeclass="active"
              to="Resume"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Resume
            </Link>
            <Link
              className="list"
              activeclass="active"
              to="Testimonial"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Testimonial
            </Link>
            <Link
              className="list"
              activeclass="active"
              to="ContactMe"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              ContactMe
            </Link>
          </ul>

          <div className="hamburger" onClick={this.handleclick}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

        <div className="profile-container">
          <div className="profile-parent">
            <div className="profile-details">
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
              <div className="profile-details-name">
                <span>
                  {""}
                  Hello, I am <span className="highlighted-text">Jemil</span>
                </span>
              </div>
              <div className="profile-details-role">
                <span>
                  {" "}
                  <h1>
                    {" "}
                    <Typical
                      loop={Infinity}
                      steps={[
                        "Talented Dev",
                        1000,
                        "Full Stack Dev",
                        1000,
                        "A freelancer",
                        1000,
                        "React  Dev",
                        1000,
                        "I am a student",
                        1000,
                      ]}
                    />
                  </h1>
                  <span className="profile-role-tagline">
                    building website is my passion
                  </span>
                </span>
              </div>
              <div className="profile-options">
                <Link
                  activeclass="active"
                  to="ContactMe"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <button className="btn primary-btn">
                    {""}
                    Hire Me{""}
                  </button>
                </Link>

                <a href="jemilcv.pdf" download="jemilcv.pdf">
                  <button className="btn highlighted-btn">Get Resume</button>
                </a>
              </div>
            </div>
            <div className="profile-picture">
              <div className="profile-picture-background"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
