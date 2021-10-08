import React from "react";
import "./Footer.scss";

Footer.propTypes = {};

function Footer(props) {
    return (
        <footer className="footer">
            {/* SUGGEST */}
            <div className="suggest">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2">
                            <div className="suggest__title">Air Jordan</div>
                            <ul className="suggest__list">
                                <li className="suggest__item">Air Jordan 1</li>
                                <li className="suggest__item">Air Jordan 3</li>
                                <li className="suggest__item">Air Jordan 11</li>
                            </ul>
                        </div>
                        <div className="col-xl-2">
                            <div className="suggest__title">Yeezy</div>
                            <ul className="suggest__list">
                                <li className="suggest__item">
                                    Yeezy Boost 350
                                </li>
                                <li className="suggest__item">
                                    Yeezy Boost 700
                                </li>
                                <li className="suggest__item">
                                    Yeezy Foam RNNR
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-2">
                            <div className="suggest__title">Recent Updates</div>
                            <ul className="suggest__list">
                                <li className="suggest__item">The Drop List</li>
                                <li className="suggest__item">
                                    Nintendo Switch OLED
                                </li>
                                <li className="suggest__item">
                                    Yeezy GAP Hoodies
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-2">
                            <div className="suggest__title">
                                Popular Releases
                            </div>
                            <ul className="suggest__list">
                                <li className="suggest__item">
                                    Nike LDWaffle CLOT sacai Grey
                                </li>
                                <li className="suggest__item">
                                    Nike Air Max 1 Patta Waves
                                </li>
                                <li className="suggest__item">
                                    Jordan 1 Bred Patent
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-2">
                            <div className="suggest__title">Nintendo</div>
                            <ul className="suggest__list">
                                <li className="suggest__item">
                                    Nintendo Switch OLED Red Blue
                                </li>
                                <li className="suggest__item">
                                    Nintendo Switch OLED White
                                </li>
                                <li className="suggest__item">
                                    Nintendo Switch Lite Grey
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-2">
                            <div className="suggest__title">Supreme</div>
                            <ul className="suggest__list">
                                <li className="suggest__item">T-Shirts</li>
                                <li className="suggest__item">
                                    Supreme The North Face
                                </li>
                                <li className="suggest__item">Supreme Nike</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Infor */}
            <div className="infor">
                ©2021 StockXXX by lixxkook. All Rights Reserved
            </div>
        </footer>
    );
}

export default Footer;
