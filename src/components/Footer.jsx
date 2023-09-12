import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaPhone} from "react-icons/fa";
import { useForm, ValidationError } from '@formspree/react';
import {motion} from 'framer-motion';
import Rocket from '../assets/rocket.png';

function Footer(){

    const [formData, setFormData] = React.useState({
        name : "",
        email :"",
        subject : "",
    })

    const [state, handleSubmit] = useForm("xjvqobpr");

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setFormData((prevFormData)=>{
            return {...prevFormData,
            [name] : value
            }
        })
    }

    function clearForm(event){
        event.preventDefault();        
        handleSubmit(event);
        setFormData(()=>{
            return {
                name :"",
                email:"",
                subject:""
            }
        })
    }

    const emailAddress = 'speddi@hawk.iit.edu';
    return(
        <motion.div 
            initial={{y:100, opacity:0,}}
            whileInView = {{y:0,opacity:1}}
            transition={{duration:1,ease:"easeOut"}}
            className="footer">       
            <div className="contact-section">
                <div className="contact-message">
                    {/* <h1>Let's chat. Tell me about your project.</h1> */}
                    <h1>I'm All Ears! Send Me a Message</h1>
                    <p>Let's create something together.</p>
                    <div className="mailbox">
                        <p><FaPhone/>&ensp;Call me at</p>
                        <span>(+1) 312-973-8583</span>
                    </div>
                    <div className="mailbox">   
                        <p><FontAwesomeIcon icon={faEnvelope} />&ensp;Mail me at</p>
                        <a href={`mailto:${emailAddress}`}><span>speddi@hawk.iit.edu</span></a>
                    </div>
                    <div className="contact-icons">
                        <a href="https://www.linkedin.com/in/shwejan-peddi/" className="contact-icon"><div><FaLinkedin/></div></a>
                        <a href="https://github.com/Shwejansrv/" className="contact-icon">
                        <div><FaGithub/></div>
                        </a>
                        <a href="https://twitter.com/ShwejanP" className="contact-icon"><div><FaTwitter/></div></a>
                        <a href={`mailto:${emailAddress}`} className="contact-icon"><div><FaEnvelope/></div></a>
                    </div>
                </div>
                <div className="contact-form">
                    <h2>Send me a message 🚀</h2>
                    <form onSubmit={clearForm}>
                        <input 
                            type="text" 
                            placeholder="Full name"
                            className="form--input"
                            name = "name"
                            onChange={handleChange}
                            value={formData.name}
                        />

                        <input 
                            type="email" 
                            placeholder="Email address"
                            className="form--input"
                            name = "email"
                            onChange={handleChange}
                            value={formData.email}
                        />
                        <textarea
                            type="text" 
                            placeholder="Subject"
                            className="form--input"
                            name = "subject"
                            onChange={handleChange}
                            value={formData.subject}
                        />
                        <button 
                        className="form--submit">
                        Send message
                        </button>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

export default Footer;

