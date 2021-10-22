import React from "react";
import "./Header.scss";

Header.propTypes = {};

function Header(props) {
    return (
        <div className="nav">
            <div className="container">
                <div className="nav__logo">
                    <svg viewBox="0 0 201 40">
                        <path d="M186.401 27.5l14.6 12.5V30l-11.673-9.994L201.001 10V0l-20.4 17.486V12.5L166.001 0v10l11.673 9.994L166.001 30v10l20.4-17.486V27.5zM20.3 16.8l-6.55-1.25C10.1 14.85 8.5 14 8.5 12c0-2.8 3.15-4.25 7.1-4.25 4.15 0 7.85 1.6 8.65 5h7C30.45 6.25 24.6 2 15.6 2 7.3 2 .75 5.65.75 12.25c0 5.75 4.9 8.65 11.45 9.9l6.55 1.25c3.65.7 5.5 1.85 5.5 4.1 0 3.05-3.4 4.75-7.6 4.75-5.15 0-8.6-2.5-9.4-6.25H0c1.05 7.5 6.95 12 16.65 12C25.3 38 32 34.5 32 27.25c0-6.4-5.15-9.2-11.7-10.45zM48.65 6.25V2.5H41.4v2.75c0 3.25-1.5 4.75-4.75 4.75H34.6v5.5h5.75V29c0 6 2.95 8.5 9.95 8.5h5.95V32h-5.3c-2.5 0-3.35-.75-3.35-3V15.5h8.65V10H45.5l3.15-3.75zM111.351 32.5c-5.25 0-8.6-3.7-8.6-8.7 0-5 3.35-8.7 8.6-8.7 4.05 0 6.95 2.25 7.7 5h7.15c-1.3-6.5-6.95-10.5-14.85-10.5-9.45 0-16 5.7-16 14.2s6.55 14.2 16 14.2c7.9 0 14.1-4 15.1-10.75h-7.15c-.75 2.5-3.45 5.25-7.95 5.25zM75.35 9.6c-9.75 0-16 5.7-16 14.2S65.6 38 75.35 38s16-5.7 16-14.2-6.25-14.2-16-14.2zm0 22.9c-5.25 0-8.6-3.7-8.6-8.7 0-5 3.35-8.7 8.6-8.7s8.6 3.7 8.6 8.7c0 5-3.35 8.7-8.6 8.7zM145.151 22.9l15.05-12.9h-9.75l-12.3 10.8V2.5h-7.25v35h7.25v-8.6l4.347-3.726L153.051 37.5h9.2l-12.5-14.6h-4.6z" />
                    </svg>
                </div>
                <div className="nav__inputs">
                    <div className="nav__inputs-icon">
                        <i className="fas fa-search"></i>
                    </div>
                    <input
                        type="text"
                        placeholder="Search for Brand, color , etc,.."
                    />
                </div>
                <div className="nav__list">
                    <div className="nav__item">Browse</div>
                    <div className="nav__item">News</div>
                    <div className="nav__item">About</div>
                    <div className="nav__item">Help</div>
                    <div className="nav__item">Login</div>
                    <div className="nav__item">Sign Up</div>
                    <a
                        href="https://lixxkook00.github.io/my-portfolio/"
                        className="nav__button btns"
                    >
                        Sell
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
