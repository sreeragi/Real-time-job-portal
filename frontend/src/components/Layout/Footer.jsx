import React, { useContext } from 'react';
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  const { isAuthorized } = useContext(Context);
  
  return (
    <footer className={`bg-dark text-white py-4 ${isAuthorized ? "d-block" : "d-none"}`}>
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="mb-3 mb-md-0">
            &copy; All Rights Reserved by Sreeragi.
          </div>
          <div className="d-flex gap-3">
            <Link 
              to={'https://github.com/sreeragi'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white fs-4"
            >
              <FaGithub />
            </Link>
            <Link 
              to={'https://github.com/sreeragi'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white fs-4"
            >
              <SiLeetcode />
            </Link>
            <Link 
              to={'https://github.com/sreeragi'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white fs-4"
            >
              <FaLinkedin />
            </Link>
            <Link 
              to={'https://github.com/sreeragi'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white fs-4"
            >
              <RiInstagramFill />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;