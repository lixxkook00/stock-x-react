import React from "react";
import MainContent from "../MainContent";
import MainSide from "../MainSide";
import "./Main.scss";

Main.propTypes = {};

function Main({ data }) {
    return (
        <div className="main">
            <div className="container">
                <div className="row">
                    <MainSide />
                    <MainContent data={data} />
                </div>
            </div>
        </div>
    );
}

export default Main;
