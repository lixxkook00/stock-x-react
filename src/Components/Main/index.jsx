import React from "react";
import MainContent from "../MainContent";
import MainSide from "../MainSide";
import "./Main.scss";

Main.propTypes = {};

function Main(props) {
    return (
        <div className="main">
            <div className="container">
                <div className="row">
                    <MainSide />
                    <MainContent />
                </div>
            </div>
        </div>
    );
}

export default Main;
