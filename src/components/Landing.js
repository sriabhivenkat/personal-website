import React from 'react';
import './Landing.css';
import {
    FaGithub, 
    FaLinkedin, 
    FaMedium, 
    FaPython,
    FaJs,
    FaCloud,
    FaReact,
    FaGitAlt,
    FaRobot,
    FaMicrosoft,
    FaCopyright,
} from "react-icons/fa"
import {IconContext} from "react-icons";
import { DiGoogleCloudPlatform, DiCode } from "react-icons/di";
import Polaroid from './Polaroid'
import SkillCont from './SkillCont';
import polaroid1 from '../assets/polaroid1.jpeg'
import logo512 from '../assets/logo512.png'
import { Link, Redirect } from 'react-router-dom';

function Landing() {
    return(
        <div>
            <div className="landingContainer1">
                <div className="column1">
                    <div>
                    <h1 style={{fontSize: 45, fontWeight: "bold"}}>sriabhi venkat.</h1>
                    <h4 style={{marginTop: -15, fontStyle: "italic", fontWeight: 400,}}>computer science.</h4>
                    <h4 style={{marginTop: -15, fontStyle: "italic", fontWeight: 400,}}>texas a&m engineering, class of 2024.</h4>
                    <h4 style={{marginTop: -15, fontStyle: "italic", fontWeight: 400,}}>craig and galen brown engineering honors student.</h4>
                    {/* <h3 style={{marginTop: -20, fontWeight: 400}}><i>all around cool guy </i>😎.</h3> */}
                    </div>
                </div>
                <div className="column2">
                    <Polaroid image={polaroid1} />
                </div>
            </div>
            {/* <div></div> */}
            <div className="landingContainer2">
                <h3>about me</h3>
                <div className="columnContainer">
                    <div className="rowContainer1">
                        <h1 style={{fontWeight: 600}}>check me out!</h1>
                        <div className="rowboss">
                            <IconContext.Provider value={{ style: {fontSize: '100px'}, color: ["black"]}}>
                                <a href="https://github.com/sriabhivenkat">
                                    <FaGithub/>
                                </a>
                                <a href="https://www.linkedin.com/in/sriabhi-venkataraman-a1087319a/">
                                    <FaLinkedin style={{marginLeft: 30}}/>
                                </a>
                                <a href="https://medium.com/@sriabhi01">
                                    <FaMedium style={{marginLeft: 30}}/>
                                </a>
                            </IconContext.Provider>
                        </div>
                    </div>
                    <div className="rowContainer2">
                        <h1 style={{fontWeight: 600}}>hey there!</h1>
                        <p style={{fontSize: 20}}>
                            i am a native houstonian who loves all things space! 
                            i love learning about our solar system and all the cool things that go into missions to mars and beyond. 
                            whenever i'm in college station, i try to go stargazing as much as possible.
                            i absolutely love reading. a book im reading right now is <i>Astrophysics for People in a Hurry</i>, by neil degrasse tyson.
                        </p>
                        <p style={{fontSize: 20}}>
                            i am an avid coder. it's one of my most favorite things to do. i'm always trying to find new things to build.
                            my areas of interest so far are web development and app development using react.js and react native.
                            i also am very interested in data science, whether it is using supervised algorithms to explain why data is distributed in certain ways
                            or predicting future outcomes. i am also extremely interested in deep learning. check out my github for all of the cool stuff i've built!
                        </p>
                        <p style={{fontSize: 20}}>
                            i'm still only just a rising sophomore computer science student here at texas a&m. i am suuuper excited about all the learning opportunities in store for me in the future, and where it will all take me.
                            
                        </p>
                    </div>
                </div>
            </div>
            <div className="landingContainer2">
                <h3>important skills</h3>
                <div className="columnContainer">
                    <IconContext.Provider value={{ style: {fontSize: '80px', color: "rgb(0, 123, 255)"}}}>
                        <div style={{display: "flex", flexDirection: "column", alignItems: 'center',}}>
                            <div className="parentComp">
                                <FaPython/>
                            </div>
                            <h5 style={{textAlign: "center"}}>Python</h5>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", alignItems: 'center',}}>
                            <div className="parentComp">
                                <FaJs/>
                            </div>
                            <h5 style={{textAlign: "center"}}>JavaScript</h5>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", alignItems: 'center',}}>
                            <div className="parentComp">
                                <DiGoogleCloudPlatform />
                            </div>
                            <h5 style={{textAlign: "center"}}>Google Cloud and Firebase</h5>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", alignItems: 'center',}}>
                            <div className="parentComp">
                                <FaReact/>
                            </div>
                            <h5 style={{textAlign: "center"}}>React and React Native</h5>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", alignItems: 'center',}}>
                            <div className="parentComp">
                                <FaGitAlt />
                            </div>
                            <h5 style={{textAlign: "center"}}>Git</h5>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", alignItems: 'center',}}>
                            <div className="parentComp">
                                <FaRobot />
                            </div>
                            <h5 style={{textAlign: "center"}}>Data Science and Deep Learning Algorithms</h5>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", alignItems: 'center',}}>
                            <div className="parentComp">
                                <FaMicrosoft />
                            </div>
                            <h5 style={{textAlign: "center"}}>Microsoft Azure</h5>
                        </div>
                        <div style={{display: "flex", flexDirection: "column", alignItems: 'center',}}>
                            <div className="parentComp">
                                <DiCode />
                            </div>
                            <h5 style={{textAlign: "center"}}>HTML5 and CSS</h5>
                        </div>
                    </IconContext.Provider>
                </div>

            </div>
        </div>
    )
}

export default Landing;