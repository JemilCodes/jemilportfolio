import React, { useState } from "react";
import "./Resume.css";
import { FaCircle } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
// import { MdOutlineColorLens } from "react-icons/md";

export default function Resume() {
  const [route, setRoute] = useState("edu");

  const routeToggler = (route) => {
    if (route === "edu") {
      setRoute("edu");
    }
    if (route === "sum") {
      setRoute("sum");
    }
    if (route === "skill") {
      setRoute("skill");
    }
    if (route === "project") {
      setRoute("project");
    }
  };

  return (
    <div className="resume-wrapper" id="Resume">
      <div className="resume-header">
        <h1>Resume</h1>
        <h5>
          My Formal Bio Details <br></br>{" "}
        </h5>
        <div className="line-wrapper">
          {" "}
          <div className="inner-line">
            <div className="about-line"></div>{" "}
          </div>{" "}
        </div>
      </div>

      <div className="resume-content-wrapper">
        <div className="resume-notation-wrapper">
          <div className="resume-notation-flex ">
            <div className="resume-icon">
              <FaUserGraduate color="aliceblue" size="1.1em" />
            </div>
            <div
              style={{
                backgroundColor: route === "edu" ? "rgb(14, 14, 36)" : null,
                color: route === "edu" ? "aliceblue" : null,
              }}
              onClick={() => routeToggler("edu")}
              className="resume-notation-name"
            >
              Education
            </div>
          </div>

          <div className="resume-notation-flex ">
            <div className="resume-icon">
              <FaHistory color="aliceblue" size="1.1em" />
            </div>
            <div
              style={{
                backgroundColor: route === "sum" ? "rgb(14, 14, 36)" : null,
                color: route === "sum" ? "aliceblue" : null,
              }}
              onClick={() => routeToggler("sum")}
              className="resume-notation-name"
            >
              Work History
            </div>
          </div>

          <div className="resume-notation-flex ">
            <div className="resume-icon">
              <FaDesktop color="aliceblue" size="1.1em" />
            </div>
            <div
              style={{
                backgroundColor: route === "skill" ? "rgb(14, 14, 36)" : null,
                color: route === "skill" ? "aliceblue" : null,
              }}
              onClick={() => routeToggler("skill")}
              className="resume-notation-name"
            >
              Programming Skills
            </div>
          </div>
          <div className="resume-notation-flex ">
            <div className="resume-icon">
              <FaChartBar color="aliceblue" size="1.1em" />
            </div>
            <div
              style={{
                backgroundColor: route === "project" ? "rgb(14, 14, 36)" : null,
                color: route === "project" ? "aliceblue" : null,
              }}
              onClick={() => routeToggler("project")}
              className="resume-notation-name"
            >
              Projects
            </div>
          </div>
        </div>
        <div className="scroll">
          {route === "edu" && (
            <div className="education-wrapper">
              <div className="edu-wrapper">
                <div>
                  <h5>
                    {" "}
                    <FaCircle color="rgb(255, 68, 0)" size="0.8em" /> Federal
                    University of Technology,Minna
                  </h5>
                  <h6>Studying Telecommunication Enginering</h6>
                </div>
                <div className="date">2019-present</div>
              </div>

              <div className="edu-wrapper">
                <div>
                  <h5>
                    {" "}
                    <FaCircle color="rgb(255, 68, 0)" size="0.8em" /> High
                    School
                  </h5>
                  <h6> Government Secondary School karshi,Abuja</h6>
                </div>
                <div className="date">2016-2019</div>
              </div>

              <div className="edu-wrapper">
                <div>
                  <h5>
                    {" "}
                    <FaCircle color="rgb(255, 68, 0)" size="0.8em" /> Junior
                    School
                  </h5>
                  <h6> Junior Secondary School karu,Abuja</h6>
                </div>
                <div className="date">2013-2016</div>
              </div>

              <div className="edu-wrapper">
                <div>
                  <h5>
                    {" "}
                    <FaCircle color="rgb(255, 68, 0)" size="0.8em" /> Primary
                    School
                  </h5>
                  <h6> Precious Foundation Nursery and Primary Schhol</h6>
                </div>
                <div className="date">2007-2013</div>
              </div>
            </div>
          )}

          {route === "sum" && (
            <div className="work-content-wrapper">
              <div className="sum-wrapper">
                <div className="sum-header">
                  <div>
                    <h4>
                      {" "}
                      <FaCircle color="rgb(255, 68, 0)" size="0.7em" /> Jemil
                      Tech
                    </h4>
                    <h6>Fullstack Web Developer</h6>
                  </div>
                  <div className="date">2019-2024</div>
                </div>

                <li>
                  {" "}
                  <FaCircle color="rgb(255, 68, 0)" size="0.8em" /> React Expert
                </li>
                <li>
                  {" "}
                  <FaCircle color="rgb(255, 68, 0)" size="0.8em" /> Freelancer
                  with 3+ years of experience..
                </li>
                <li>
                  {" "}
                  <FaCircle color="rgb(255, 68, 0)" size="0.8em" /> New Karu
                  Fct,abuja.
                </li>
                <li>
                  {" "}
                  <FaCircle color="rgb(255, 68, 0)" size="0.8em" />{" "}
                  +2349060156930
                </li>
                <li>
                  {" "}
                  <FaCircle color="rgb(255, 68, 0)" size="0.8em" />{" "}
                  jemiluishaqodoba@gmail.com
                </li>
              </div>
            </div>
          )}

          {route === "skill" && (
            <div className="skill-wrapper">
              <div className="skill-wrapper">
                <div className="level-content-wrapper">
                  <div className="level-wrapper">
                    <div className="percentage-wrapper">
                      <div className="level-percentage">
                        <h5>HTML</h5>
                        <h5>90%</h5>
                      </div>
                      <div className="html-level">
                        <div className="in-html-level"></div>
                      </div>
                    </div>

                    <div className="percentage-wrapper">
                      <div className="level-percentage">
                        <h5>CSS</h5>
                        <h5>70%</h5>
                      </div>
                      <div className="css-level">
                        <div className="in-css-level"></div>
                      </div>
                    </div>

                    <div className="percentage-wrapper">
                      <div className="level-percentage">
                        <h5>JAVASCRIPT</h5>
                        <h5>80%</h5>
                      </div>
                      <div className="javascript-level">
                        <div className="in-javascript-level"></div>
                      </div>
                    </div>
                  </div>

                  <div className="second-level-wrapper">
                    <div className="percentage-wrapper">
                      <div className="level-percentage">
                        <h5>REACT</h5>
                        <h5> 80%</h5>
                      </div>
                      <div className="react-level">
                        <div className="in-react-level"></div>
                      </div>
                    </div>
                    <div className="percentage-wrapper">
                      <div className="level-percentage">
                        <h5>Node JS</h5> <h5>50%</h5>
                      </div>
                      <div className="node-level">
                        <div className="in-node-level"></div>
                      </div>
                    </div>
                    <div className="percentage-wrapper">
                      <div className="level-percentage">
                        <h5>WORDPRESS</h5>
                        <h5>70%</h5>
                      </div>
                      <div className="wordpress-level">
                        <div className="in-wordpress-level"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {route === "project" && (
            <div className="project-wrapper" id="Project">
              <div className="project-content-wrapper">
                <div>
                  <h5>Personal Portofolio Website</h5>
                  <h6>Technologies Used: React JS, Font awsome</h6>
                  <div className="p-content">
                    <p>
                      A Personal Portofolio Website to showcase all my details
                      and project at one space
                    </p>
                    <a href="https://jemilweb.herokuapp.com/">
                      click me to visit this project
                    </a>
                    <div className="text-div p-float">2021-2022</div>
                  </div>
                </div>
                <div>
                  <h5>AI-WORLD</h5>
                  <h6>
                    Technologies Used: React JS, Node Js, Express Js, Clarifai
                    API, ts-particle JS,Mongo Db, Mongoose, Face-api.js,
                  </h6>
                  <div className="p-content">
                    <p>
                      An awesome Website that detects the faces in any image
                    </p>
                    <a href="https://aiworldbyjemil.herokuapp.com/">
                      click me to visit this project
                    </a>
                    <div className="text-div p-float">2021-2022</div>
                  </div>
                </div>

                <div>
                  <h5>Tenzies Game</h5>
                  <h6>Technologies Used: React JS, Nanoid, React Confetti</h6>
                  <div className="p-content">
                    <p>Tenzies Game is a clone of the real Tenzies App</p>
                    <a href="https://tenziesbyjemil.herokuapp.com/">
                      click me to visit this project
                    </a>
                    <div className="text-div p-float">2021-2022</div>
                  </div>
                </div>

                <div>
                  <h5>Super Gradient Generator</h5>
                  <h6>Technologies Used: React Js</h6>
                  <div className="p-content">
                    <p>
                      An Incredible Application for picking any colour gradient
                      of your choice{" "}
                    </p>
                    <a href="https://css-gradient-picker-by-jemil.herokuapp.com/">
                      click me to visit this project
                    </a>
                    <div className="text-div p-float">2020-2021</div>
                  </div>
                </div>
                <div>
                  <h5>Robots Friend App</h5>
                  <h6>Technologies Used: React JS</h6>
                  <div className="p-content">
                    <p>
                      A Fun App that has an incredible search engine
                      functionality{" "}
                    </p>
                    <a href="https://robofriends-by-jemil.herokuapp.com/">
                      click me to visit this project
                    </a>
                    <div className="text-div p-float">2020-2021</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
