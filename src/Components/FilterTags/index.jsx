import React from "react";
import "./FilterTags.scss";

function FilterTags({ filterTags }) {
    return (
        <div className="filter-tags">
            {filterTags.map((tag, index) => (
                <span className="filter-tags__item" key={index}>
                    {tag}
                    <span className="close-tags">
                        <i class="fas fa-times"></i>
                    </span>
                </span>
            ))}
        </div>
    );
}

export default FilterTags;
