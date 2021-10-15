import React, { useState, useEffect } from "react";
import MainContent from "../MainContent";
import MainSide from "../MainSide";
import "./Main.scss";
import data, { brand } from "../../data";

Main.propTypes = {};

function Main() {
    // useState Data List
    const [dataList, setDataList] = useState(() => {
        const newDataList = [...data].filter((item) => item.type === "sneaker");
        return newDataList;
    });
    // useState Primary Link
    const [primaryLink, setPrimaryLink] = useState("sneaker");
    const [secondLink, setSecondLink] = useState("");

    const [totalItem, setTotalItem] = useState(dataList.length);
    const [brandList, setBrandList] = useState(() => {
        let tempBrand = [...brand].filter((item) => item.type === "sneaker");
        return tempBrand;
    });

    const [titleFiltered, setTitleFiltered] = useState("Featured");

    // Filter by Type Item
    const handleFilter = (keyFilter) => {
        const newDataList = [...data].filter((item) => item.type === keyFilter);
        setPrimaryLink(keyFilter);
        setSecondLink("");
        setDataList(newDataList);
    };

    // Sort by price
    const handleSort = (key, title) => {
        console.log(key);
        // Default sort low to high
        let defaultList = [];
        if (key === "low") {
            defaultList = [...dataList].sort((a, b) =>
                a.price > b.price ? 1 : -1
            );
        } else if (key === "high") {
            defaultList = [...dataList].sort((a, b) =>
                a.price < b.price ? 1 : -1
            );
        } else if (key === "featured") {
            defaultList = [...dataList].sort((a, b) => (a.id > b.id ? 1 : -1));
        } else {
            defaultList = [...dataList].sort((a, b) =>
                a.ranking < b.ranking ? 1 : -1
            );
        }
        setDataList(defaultList);
        setTitleFiltered(title);
    };

    // Filter by Brand Item
    const handleFilterByBrand = (key, title) => {
        const tempList = [...data].filter(
            (item) => item.brand === key && item.type === primaryLink
        );
        setDataList(tempList);
        setSecondLink(title);
        setTitleFiltered("Featured");
    };

    const handleBackByPrimaryLink = (key) => {};

    useEffect(() => {
        // Title box option Filter Bar
        setTitleFiltered("Featured");

        // Brand
        let tempBrand = [...brand].filter((item) => item.type === primaryLink);
        setBrandList(tempBrand);
    }, [primaryLink]);

    useEffect(() => {
        setTotalItem(dataList.length);
    }, [dataList]);
    return (
        <div className="main">
            <div className="container">
                <div className="row">
                    <MainSide
                        onFilter={handleFilter}
                        brandList={brandList}
                        handleFilterByBrand={handleFilterByBrand}
                    />
                    <MainContent
                        key={data.length}
                        data={dataList}
                        primaryLink={primaryLink}
                        secondLink={secondLink}
                        handleSort={handleSort}
                        titleFiltered={titleFiltered}
                        handleFilter={handleFilter}
                        totalItem={totalItem}
                    />
                </div>
            </div>
        </div>
    );
}

export default Main;
