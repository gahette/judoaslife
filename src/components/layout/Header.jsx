// eslint-disable-next-line no-unused-vars
import React, {useEffect, useRef, useState} from 'react';
import {NavLink} from "react-router-dom";
import logo from "@/assets/judoaslife copie.png";
import navLinks from "./navlink.jsx";
import {faBars, faX} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setToggle(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, []);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const closeMenu = () => {
        setToggle(false)
    }


    return (
        <header>
            <nav className="navbar">
                <div className="container">
                    <a href="/"
                       className="logo-link">
                        <img src={logo} width={120} className="logo" alt="logo"/>
                        <h1>
                            JudoAs<span className="logo-name2">Life</span>
                        </h1>
                    </a>


                    <div className="menu-icon" onClick={handleToggle}>
                        {toggle ? <FontAwesomeIcon icon={faX} ref={menuRef} onClick={closeMenu}/> :
                            <FontAwesomeIcon icon={faBars}/>}
                        {toggle ? <p><span>Fermer</span></p> :
                            <p><span>Menu</span></p>}
                    </div>
                    <div ref={menuRef} className={`nav-elements ${toggle && "active"}`}>
                        <ul>
                            {
                                navLinks.map((nav, index) => (
                                    <li key={index} onClick={closeMenu}>
                                        <NavLink to={nav.id} className={(nav) => (nav.isActive ? "nav-active" : "")}>
                                            {nav.title}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
        ;
};

export default Header;
