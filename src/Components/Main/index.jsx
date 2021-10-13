import React, { useState, useEffect } from "react";
import MainContent from "../MainContent";
import MainSide from "../MainSide";
import "./Main.scss";
import data from "../../data";

Main.propTypes = {};

function Main() {
    const [dataList, setDataList] = useState(() => {
        const newDataList = [...data].filter((item) => item.type === "sneaker");
        return newDataList;
    });

    const handleFilter = (keyFilter) => {
        const newDataList = [...data].filter((item) => item.type === keyFilter);
        setDataList(newDataList);
    };

    return (
        <div className="main">
            <div className="container">
                <div className="row">
                    <MainSide onFilter={handleFilter} />
                    <MainContent key={data.length} data={dataList} />
                </div>
            </div>
        </div>
    );
}

export default Main;
