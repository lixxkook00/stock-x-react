import React from "react";
import "./MainSide.scss";
//Price
import { prices } from "../../data";

MainSide.propTypes = {};

// Create Array Size
const sizes = [];
for (var i = 1; i < 15; i = i + 0.5) {
    sizes.push(i);
}
const ResultSize = [...sizes, 15, 16, 17, 18];

// Type
const type = ["sneaker", "streetwear", "collectibles", "watch"];

function MainSide({
    onFilter,
    brandList,
    handleFilterByBrand,
    primaryLink,
    secondLink,
    sizes,
    handleFilterBySizeType,
    handleFilterBySize,
    handleFilterByPrice,
    sizeTypeList,
    sizeList,
    priceList,
}) {
    const handleBrandFilter = (key, title) => {
        handleFilterByBrand(key, title);
    };
    const handleOnClick = (keyFilter) => {
        onFilter(keyFilter);
    };

    const handleOnClickSize = (size) => {
        handleFilterBySize(size);
    };

    const handleSizeTypeOnChange = (size) => {
        handleFilterBySizeType(size);
    };

    const handleOnClickPrice = (name) => {
        handleFilterByPrice(name);
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
                                key={type}
                                style={
                                    type === primaryLink
                                        ? { color: "#0a6341" }
                                        : {}
                                }
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
                    {brandList.map((item, index) => {
                        return (
                            <li
                                key={index}
                                style={
                                    item.title === secondLink
                                        ? { color: "#0a6341" }
                                        : {}
                                }
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
                {/* <!--SIZE TYPES--> */}
                <div className="side__title">SIZE TYPES</div>
                <div className="side__type">
                    {sizes.map((size) => {
                        return (
                            <div className="side__checkbox" key={size}>
                                <input
                                    type="checkbox"
                                    name={size}
                                    id={size}
                                    checked={sizeTypeList.includes(size)}
                                    onChange={() =>
                                        handleSizeTypeOnChange(size)
                                    }
                                />
                                <label htmlFor={size}>{size}</label>
                            </div>
                        );
                    })}
                </div>
                {/* <!-- SIZES --> */}
                <div className="side__title">SIZES</div>
                <div className="side__sizes">
                    {ResultSize.map((size, index) => (
                        <span
                            key={index}
                            className="side__size-item"
                            onClick={() => {
                                handleOnClickSize(size);
                            }}
                            style={
                                sizeList.includes(size)
                                    ? {
                                          backgroundColor: "#0a6341",
                                          color: "#fff",
                                      }
                                    : {}
                            }
                        >
                            {size}
                        </span>
                    ))}
                </div>

                {/* <!-- PIRCE --> */}
                <div className="side__title">PRICE</div>
                <div className="side__prices">
                    {prices.map((price, index) => (
                        <div className="side__price" key={index}>
                            <input
                                onChange={() => {
                                    handleOnClickPrice(price.name);
                                }}
                                checked={priceList.includes(price.name)}
                                type="checkbox"
                                name={price.name}
                                id={price.name}
                            />
                            <label htmlFor={price.name}>{price.title}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MainSide;
