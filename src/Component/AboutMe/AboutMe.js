import React from "react";
import { Link } from "react-scroll";
import { FaCircle } from "react-icons/fa";

import "./AboutMe.css";
import aboutimg from "../../assets/Home/jj.jpg";

export default function AboutMe() {
  return (
    <div className="aboutme" id="AboutMe">
      <div className="aboutme-header">
        <h1>About Me</h1>
        <h6>
          Why choose me ? <br></br>
          <div className="line-wrapper">
            {" "}
            <div className="inner-line">
              <div className="about-line"></div>{" "}
            </div>{" "}
          </div>
        </h6>
      </div>
      <div className="content-container">
        <img className="abt-img" src={aboutimg} alt="no internet connection" />

        <div className="text-wrapper">
          <p>
            Full stack web developer with background knowledge of mern stacks
            with redux, along with a passion for building application with
            utmost efficiency, strong professional willing to be an asset of an
            organization.
          </p>

          <h4> Here are Few highlights about me:</h4>

          <div className="list-wrapper">
            <div className="circle-icon-2"></div>
            <li>
              {" "}
              <FaCircle color=" rgb(255, 68, 0)" size="0.8em" /> Full stack web
              development
            </li>
          </div>
          <div className="list-wrapper">
            <div className="circle-icon-2"></div>
            <li>
              {" "}
              <FaCircle color=" rgb(255, 68, 0)" size="0.8em" /> Interactive
              front end as per design
            </li>
          </div>
          <div className="list-wrapper">
            <div className="circle-icon"></div>
            <li>
              {" "}
              <FaCircle color=" rgb(255, 68, 0)" size="0.8em" /> Redux for state
              Management
            </li>
          </div>
          <div className="list-wrapper">
            <div className="circle-icon"></div>
            <li>
              {" "}
              <FaCircle color=" rgb(255, 68, 0)" size="0.8em" /> React Js
            </li>
          </div>
          <div className="list-wrapper">
            <div className="circle-icon"></div>
            <li>
              {" "}
              <FaCircle color=" rgb(255, 68, 0)" size="0.8em" /> Wordpress
            </li>
          </div>
          <div className="list-wrapper">
            <div className="circle-icon"></div>
            <li>
              {" "}
              <FaCircle color=" rgb(255, 68, 0)" size="0.8em" /> Node Js
            </li>
          </div>
          <div className="list-wrapper">
            <div className="circle-icon"></div>
            <li>
              {" "}
              <FaCircle color=" rgb(255, 68, 0)" size="0.8em" /> Managing
              database (Mongo Db)
            </li>
          </div>

          <br></br>
          <div className="profile-options abtnd">
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
              <button className="btn highlighted-btn ">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
