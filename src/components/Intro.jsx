import React from "react";
import './Intro.css';
import propic from '../contents/humanface.jpg';
import Resume from '../contents/ShwejanPeddi_Resume.pdf'
import {motion} from 'framer-motion'

function Intro(){
    function viewResume(){
        window.open(Resume);
    }
    return(
        <div className="intro">
            
            <motion.div
                    initial={{x:-100, opacity:0,}}
                    whileInView = {{x:0,opacity:1}}
                    transition={{duration:0.5,ease:"easeOut"}}
                    className="intro-heading"
                >
                <h1>About me</h1>
            </motion.div>
            
            <motion.div 
                initial={{x:100, opacity:0,}}
                whileInView = {{x:0,opacity:1}}
                transition={{duration:0.5,ease:"easeOut"}}
                className="aboutme">
                <div className="aboutmecard">
                    <div className="card1">
                        <div className="card1img">
                            <img className="myimage" src={propic}></img>
                        </div>
                        <div className="card1desc">
                            <ul>
                                <p>Name : Shwejan Peddi</p>
                                <p>Profile : Software Developer/ Web Developer</p>
                                <p>Email : speddi@hawk.iit.edu</p>
                                <p>Current Location : Chicago, Illinois</p>
                                <button type="button" onClick={viewResume} className="about-resume-button">View Resume</button>
                            </ul>
                        </div>
                    </div>
                    <div className="card2">
                        <p>Hello, I'm Shwejan Peddi</p>
                        <p>
                        As an aspiring computer science engineer pursuing an MS degree, I am currently seeking opportunities for Spring Co-op 2024
                        and Full-time SDE roles from Summer 2024. With a strong academic background, extensive hands-on experience in web development,
                        AI technologies, and data structures, and a deep passion for technology, I am highly motivated to contribute to a dynamic
                        and innovative company that values creativity, teamwork, and growth.
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                initial={{x:-100, opacity:0,}}
                whileInView = {{x:0,opacity:1}}
                transition={{duration:0.5,ease:"easeOut"}}
                className="intro-edu">
                <h2>Education</h2>
                <hr/>
                <div className="iit-box">
                    <div>
                        <p>Illinois Institute of Technology</p>
                    </div>
                    <div>
                        <p>Aug 2022 - May 2024</p>
                    </div>
                </div>
                <p>Masters in Computer Science</p>
                <hr/>
                <div className="iit-box">
                    <div>
                        <p>Indian Institute of Information Technology Kottayam</p>
                    </div>
                    <div>
                        <p>Aug 2018 - May 2022</p>
                    </div>
                </div>
                <p>Bachelors in Computer Science and Engineering</p>
                <hr/>
            </motion.div>
        </div>
    )
}


export default Intro;