import React from "react";
import FilterBar from "../FilterBar";
import FilterTags from "../FilterTags";
import "./MainContent.scss";

MainContent.propTypes = {};

const formatPrice = (price) => {
    if (price >= 1000) {
        let front = Math.floor(price / 1000);
        let back = price % 1000;
        if (back === 0) {
            back = "000";
        }
        if (back > 10 && back < 100) {
            back = `${back}0`;
        }
        return `${front},${back}`;
    }
    return price;
};

function MainContent({
    data,
    primaryLink,
    handleSort,
    titleFiltered,
    secondLink,
    handleFilter,
    totalItem,
    filterTags,
    handleRemoveFilterTag,
}) {
    return (
        <div className="col-xl-10">
            <FilterBar
                primaryLink={primaryLink}
                handleSort={handleSort}
                titleFiltered={titleFiltered}
                secondLink={secondLink}
                handleFilter={handleFilter}
                totalItem={totalItem}
            />
            <FilterTags
                filterTags={filterTags}
                handleRemoveFilterTag={handleRemoveFilterTag}
            />
            <div className="row">
                {data.map((item, index) => {
                    return (
                        <div key={index} className="col-xl-3">
                            <div className="product">
                                <div className="product__img">
                                    <img
                                        src={`${process.env.PUBLIC_URL}/img/${item.imgURL}`}
                                        alt=""
                                    />
                                </div>
                                <div className="product__infor">
                                    <div className="product__name">
                                        {item.name}
                                    </div>
                                    <span>Lowest Ask</span>
                                    <div className="product__price">
                                        ${formatPrice(item.price)}
                                    </div>
                                    <div className="price__ranking">
                                        #Of Sales {item.ranking}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MainContent;
