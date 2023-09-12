import React from 'react';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Resume from "../contents/ShwejanPeddi_Resume.pdf";


function Navbar() {

  const [mode,setMode] = React.useState(faSun)

  function handleClick(){
    setMode(()=>{
      if(mode == faMoon){
        return faSun;
      }
      else{
        return faMoon;
      }
    })
  }

  if(mode == faMoon){
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
  }
  else if(mode == faSun){
    document.body.style.backgroundColor = "#001C30"
    document.body.style.color = "white"
  }

  function viewResume(){
    window.open(Resume);
  }
  return (
    <nav className='navbar'>
      <div className='leftnav'>
        <h4>Shwejan Peddi</h4>
        {/* <button className='left-buttons'>About</button>
        <button className='left-buttons'>Projects</button>
        <button className='left-buttons'>Skills</button>
        <button className='left-buttons'>Contact</button> */}
      </div>
      <div className='rightnav'>
        <FontAwesomeIcon onClick={handleClick} className='modeicon' icon={mode} />
        <button onClick={viewResume} className='resume-button'>Resume</button>
      </div>
    </nav>
  );
}

export default Navbar;