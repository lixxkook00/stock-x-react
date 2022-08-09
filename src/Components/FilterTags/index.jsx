import React from "react";
import "./FilterTags.scss";

function FilterTags({ filterTags, handleRemoveFilterTag }) {
    const handleOnClick = (tag) => {
        handleRemoveFilterTag(tag);
    };
    return (
        <div className="filter-tags">
            {filterTags.map((tag, index) => (
                <span
                    className="filter-tags__item"
                    key={index}
                    onClick={() => handleOnClick(tag)}
                >
                    {tag.title}
                    <span className="close-tags">
                        <i className="fas fa-times"></i>
                    </span>
                </span>
            ))}
        </div>
    );
}

export default FilterTags;
