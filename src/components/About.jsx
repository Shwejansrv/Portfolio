import React, { useEffect, useRef } from 'react';
import {motion} from 'framer-motion';
import './About.css';

export default function About(){
    return(
            <div className="about">
                <h1>Igniting Ideas Here!</h1>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView = {{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>Shwejan Peddi</h2>
                    <h3>Software Development. Web Development. Machine Learning</h3>
                </motion.div>
            </div>
    )
}