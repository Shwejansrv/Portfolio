import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Intro from './components/Intro'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Contactbar from './components/ContactBar'

function App(){
    return(
        <>
            <Navbar/>
            <Contactbar/>
            <About/>
            <Intro/>
            <Projects/>
            <Skills/>
            <Footer/>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
