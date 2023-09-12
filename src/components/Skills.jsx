import React from "react";
import './Skills.css';
import {motion} from 'framer-motion';

import java from '../assets/Java.png'
import python from '../assets/python.png'
import javascript from '../assets/javascript.png'
import react from '../assets/React.png'
import redux from '../assets/redux.png'
import node from '../assets/node.png'
import spring from '../assets/Spring.png'
import git from '../assets/git.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import linux from '../assets/linux.png'
import mongodb from '../assets/mongodb.png'
import mysql from '../assets/mysql.png'
import postgres from '../assets/Postgres.png'
import tensorflow from '../assets/tensorflow.png'
import vscode from '../assets/vscode.png'

function Skills(){
    const images = [
        {image:"Java", imgUrl:java},
        {image:"Python", imgUrl:python},
        {image:"Javascript", imgUrl:javascript},
        {image:"React", imgUrl:react},
        {image:"Redux", imgUrl:redux},
        {image:"Node", imgUrl:node},
        {image:"Spring", imgUrl:spring},
        {image:"Git", imgUrl:git},
        {image:"HTML", imgUrl:html},
        {image:"CSS", imgUrl:css},
        {image:"Linux", imgUrl:linux},
        {image:"MongoDB", imgUrl:mongodb},
        {image:"MySQL", imgUrl:mysql},
        {image:"PostgreSQL", imgUrl:postgres},
        {image:"Tensorflow", imgUrl:tensorflow},
        {image:"VScode", imgUrl:vscode}
    ]

    const imageComponents = images.map((item,index)=>{
        return (
                <motion.img 
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                whileHover={{scale:1.08}}
                className="skill-images" 
                src={item.imgUrl}
                key={index}
                />
        )
    })

    return(
        <motion.div 
        className="skills">
            <h1>Skills</h1>
            
            {imageComponents}
            
        </motion.div>
    )
}


export default Skills;