import React from 'react';
import './Contactbar.css'; // You can create a separate CSS file for styling
import {motion} from 'framer-motion';
import {FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaPhone} from "react-icons/fa";

const Contactbar = () => {

  const [isVisible, setIsVisible] = React.useState(false);

  const emailAddress = "speddi@hawk.iit.edu";

  const variants = {
    hidden: { right: -220 },
    visible: { right: -100 },
  };

  return (
    <motion.nav
      className={`cbar ${isVisible ? 'visible' : ''}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
  
    <a href="https://www.linkedin.com/in/shwejan-peddi/" className="cbar-icon cbar-li"><div><FaLinkedin/></div></a>
    <a href="https://github.com/Shwejansrv/" className="cbar-icon">
    <div><FaGithub/></div>
                        </a>
    <a href="https://twitter.com/ShwejanP" className="cbar-icon"><div><FaTwitter/></div></a>
    <a href={`mailto:${emailAddress}`} className="cbar-icon cbar-en"><div><FaEnvelope/></div></a>
      
    </motion.nav>
  );
};

export default Contactbar;
