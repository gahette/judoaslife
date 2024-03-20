// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '@/assets/judoaslife.png'

const Footer = () => {
    return (
        <footer className="footer fixed bottom-0 left-0 right-0 bg-white z-10 opacity-90">
            <nav
                className="flex items-center justify-between mx-auto p-6 cursor-pointer border border-b-red-600">
                <a href="/"
                   className="flex items-center">
                    <img src={logo} width="120" className="absolute top-nav mt-6" alt="logo"/>
                    <span className="text-lg lg:text-xl ml-28">
                        JudoAs<span className="text-red-500">Life</span>
                    </span>
                </a>

                <div className="flex">
                    <span className="text-xs lg:text-md md:text-lg ml-28 text-slate-400">2024 JudoAs<span
                        className="text-red-500">Life </span>réalisé par <span
                        className="text-slate-600">JBgahetteCode</span></span>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
