import React from "react";
import "./MainSide.scss";

MainSide.propTypes = {};

// Create Array Size
const sizes = [];
for (var i = 1; i < 15; i = i + 0.5) {
    sizes.push(i);
}
const ResultSize = [...sizes, 15, 16, 17, 18];

// Type
const type = ["sneaker", "streetwear", "collectibles", "watch"];

function MainSide({ onFilter, brandList, handleFilterByBrand }) {
    const handleBrandFilter = (key, title) => {
        handleFilterByBrand(key, title);
    };

    const handleOnClick = (keyFilter) => {
        onFilter(keyFilter);
    };
    return (
        <div className="col-xl-2">
            {/* <!-- SIDE --> */}
            <div className="side">
                {/* <!-- CATEGORIES --> */}
                <ul className="side__list">
                    {type.map((type) => {
                        return (
                            <li
                                className="side__item"
                                onClick={() => handleOnClick(`${type}`)}
                            >
                                {type}
                            </li>
                        );
                    })}
                </ul>
                <ul className="side__list">
                    <li className="side__item">BELOW RETAIL</li>
                </ul>

                {/* Brand */}
                <ul className="side__List">
                    {brandList.map((item) => {
                        return (
                            <li
                                className="side__item"
                                onClick={() =>
                                    handleBrandFilter(item.key, item.title)
                                }
                            >
                                {item.title}
                            </li>
                        );
                    })}
                </ul>
                {/* <!-- TYPES--> */}
                <div className="side__title">SIZE TYPES</div>
                <div className="side__type">
                    <div className="side__checkbox">
                        <input type="checkbox" name="men" id="men" />
                        <label htmlFor="men">Men</label>
                    </div>
                    <div className="side__checkbox">
                        <input type="checkbox" name="women" id="women" />
                        <label htmlFor="women">Women</label>
                    </div>
                    <div className="side__checkbox">
                        <input type="checkbox" name="child" id="child" />
                        <label htmlFor="child">Child</label>
                    </div>
                    <div className="side__checkbox">
                        <input type="checkbox" name="preshool" id="preshool" />
                        <label htmlFor="preshool">Preschool</label>
                    </div>
                    <div className="side__checkbox">
                        <input type="checkbox" name="infant" id="infant" />
                        <label htmlFor="infant">Infant</label>
                    </div>
                    <div className="side__checkbox">
                        <input type="checkbox" name="toddler" id="toddler" />
                        <label htmlFor="toddler">Toodler</label>
                    </div>
                </div>
                {/* <!-- SIZES --> */}
                <div className="side__title">SIZES</div>
                <div className="side__sizes">
                    {ResultSize.map((size, index) => (
                        <span key={index} className="side__size-item">
                            {size}
                        </span>
                    ))}
                </div>

                {/* <!-- PIRCE --> */}
                <div className="side__title">PRICE</div>
                <div className="side__prices">
                    <div className="side__price">
                        <input type="checkbox" name="price1" id="price1" />
                        <label htmlFor="price1">Under $100</label>
                    </div>
                    <div className="side__price">
                        <input type="checkbox" name="price2" id="price2" />
                        <label htmlFor="price2">$100 - $200</label>
                    </div>
                    <div className="side__price">
                        <input type="checkbox" name="price3" id="price3" />
                        <label htmlFor="price3">$200 - $300</label>
                    </div>
                    <div className="side__price">
                        <input type="checkbox" name="price4" id="price4" />
                        <label htmlFor="price4">$300 - $400</label>
                    </div>
                    <div className="side__price">
                        <input type="checkbox" name="price5" id="price5" />
                        <label htmlFor="price5">$400 - $500</label>
                    </div>
                    <div className="side__price">
                        <input type="checkbox" name="pric6" id="pric6" />
                        <label htmlFor="pric6">$500 - $600</label>
                    </div>
                    <div className="side__price">
                        <input type="checkbox" name="pric7" id="pric7" />
                        <label htmlFor="pric7">$600+</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSide;
