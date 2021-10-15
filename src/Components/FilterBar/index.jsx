import React, { useState } from "react";
import "./FilterBar.scss";
let stateBoxOption = false;

const optionList = [
    {
        key: "featured",
        title: "Featured",
    },
    {
        key: "popular",
        title: "Most Popular",
    },
    {
        key: "low",
        title: "Low to High",
    },
    {
        key: "high",
        title: "High to Low",
    },
];

const toggle = (state, element) => {
    if (state) {
        element.classList.remove("close");
    } else {
        element.classList.add("close");
    }
};

const handleToggleOption = () => {
    const optionBox = document.querySelector(".box-filter__option");
    toggle(!stateBoxOption, optionBox);
    stateBoxOption = !stateBoxOption;
};

function FilterBar({
    primaryLink,
    handleSort,
    titleFiltered,
    secondLink,
    handleFilter,
    totalItem,
}) {
    const handleFilterKey = (key, title) => {
        handleSort(key, title);
    };

    const handleOnClickPrimaryLikn = (key) => {
        handleFilter(key);
    };

    return (
        <div className="filterbar">
            <div className="filterbar_links">
                <div className="filterbar_links-item">Home</div>
                <span>/</span>
                <div
                    className="filterbar_links-item"
                    onClick={() => handleOnClickPrimaryLikn(primaryLink)}
                >
                    {primaryLink}
                </div>
                <div className="filterbar_links-item">
                    {secondLink != "" && <span>/</span>}
                    {secondLink} ({totalItem})
                </div>
            </div>
            <div className="box-filter" onClick={handleToggleOption}>
                <div className="box-filter__title">Sort By :</div>
                <div className="box-filter__active">{titleFiltered}</div>
                <i class="fas fa-angle-down"></i>
                <div className="box-filter__option close">
                    {optionList.map((item) => {
                        return (
                            <div
                                className="box-item"
                                onClick={() =>
                                    handleFilterKey(item.key, item.title)
                                }
                            >
                                {item.title}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default FilterBar;
