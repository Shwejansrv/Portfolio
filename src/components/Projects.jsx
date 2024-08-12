import React from "react";
import './Projects.css'
import {motion} from 'framer-motion'

function Projects(){
    const projectDetails = [
        { title: 'Video to MP3 Microservice Converter', 
          description: 'The Video to MP3 Microservice Converter is a robust application designed to facilitate the seamless conversion of video files to MP3 audio format. This project leverages modern microservice architecture principles, enabling scalability, maintainability, and efficient resource management. Built using a combination of technologies including Python, Docker, Kubernetes, RabbitMQ, MongoDB, MySQL, and Minikube, this application exemplifies how to integrate various tools into a cohesive system.',
          github:"https://github.com/Shwejansrv/Video-to-MP3-Microservice-Converter", },
        { title: 'A Library Management System', 
          description: 'Constructed an ER model for the application, turned it into a relational schema and then used it to develop a SQL script that addressed 95% of the desired data.Built a Web application with a database as the backend to store information about people, books, documents, and other objects.',
          github:"https://github.com/shwejansrv/", },
        { title: 'Driver Drowsiness Detection', 
          description: 'Designed and implemented a computer vision and deep learning model using Tensorflow, Keras, and OpenCV to detect driver drowsiness in real-time. Developed an alarm system that alerts drivers when they exhibit signs of drowsiness, helping prevent accidents caused by driver fatigue.',
          github:"https://github.com/shwejansrv/", },
      ]

    const projComponents = projectDetails.map((item,index)=>{
        return (
            <motion.div
                whileHover={{ scale: 1.008 }}
                whileInView = {{x: index % 2 === 0 ? [-50, 0] : [50, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5, type: 'tween' }}
                className='projects'
                key={index}
              >
                <div className='project'>
                  <div className='project-title'>{item.title}</div>
                  <div className='project-desc'>{item.description}</div>
                </div>
                <div className='project-hover'>
                  <div className='project-link'>
                    <a href={item.github} target='_blank' rel='noreferrer'> <span>Repository</span> </a>
                  </div>
                </div>
            </motion.div>
        )
    })
    return(
        <>
            <h1 className="project-heading">Projects</h1>
            <div className='app__work-projects-list'>
                {projComponents}
            </div>
        </>
    )
}

export default Projects;