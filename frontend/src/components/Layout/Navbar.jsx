import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message), setIsAuthorized(true);
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top ${isAuthorized ? "d-block" : "d-none"}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h1 className="text-light fs-3">Job finder</h1>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setShow(!show)}
          aria-expanded={show}
          aria-label="Toggle navigation"
        >
          {show ? <AiOutlineClose className="fs-3" /> : <GiHamburgerMenu className="fs-3" />}
        </button>
        
        <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setShow(false)}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/job/getall" onClick={() => setShow(false)}>
                ALL JOBS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/applications/me" onClick={() => setShow(false)}>
                {user && user.role === "Employer"
                  ? "APPLICANT'S APPLICATIONS"
                  : "MY APPLICATIONS"}
              </Link>
            </li>
            {user && user.role === "Employer" ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/job/post" onClick={() => setShow(false)}>
                    POST NEW JOB
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/job/me" onClick={() => setShow(false)}>
                    VIEW YOUR JOBS
                  </Link>
                </li>
              </>
            ) : null}

            <button 
              className="btn btn-outline-light ms-lg-3 mt-2 mt-lg-0" 
              onClick={handleLogout}
            >
              LOGOUT
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;