import React from "react";
import "./MainSide.scss";

MainSide.propTypes = {};

// Create Array Size
const sizes = [];
for (var i = 1; i < 15; i = i + 0.5) {
    sizes.push(i);
}
const ResultSize = [...sizes, 15, 16, 17, 18];

function MainSide(props) {
    return (
        <div className="col-xl-2">
            {/* <!-- SIDE --> */}
            <div className="side">
                {/* <!-- CATEGORIES --> */}
                <ul className="side__list">
                    <li className="side__item active">SNEAKERS</li>
                    <li className="side__item">STREETWEAR</li>
                    <li className="side__item">COLLECTIBLES</li>
                    <li className="side__item">HANDBAGS</li>
                    <li className="side__item">WATCHES</li>
                </ul>
                <ul className="side__list">
                    <li className="side__item">BELOW RETAIL</li>
                </ul>

                <ul className="side__List">
                    <li className="side__item">ADIDAS</li>
                    <li className="side__item">AIR JORDAN</li>
                    <li className="side__item">NIKE</li>
                    <li className="side__item">NEW BALANCE</li>
                    <li className="side__item">REEBOK</li>
                    <li className="side__item">OTHER BRANDS</li>
                    <li className="side__item">LUXURY BRANDS</li>
                    <li className="side__item">COLLECTIONS</li>
                </ul>
                {/* <!-- TYPES--> */}
                <div className="side__title">SIZE TYPES</div>
                <div className="side__type">
                    <div className="side__checkbox">
                        <input type="checkbox" name="men" id="men" />
                        <label for="men">Men</label>
                    </div>
                    <div className="side__checkbox">
                        <input type="checkbox" name="women" id="women" />
                        <label for="women">Women</label>
                    </div>
                    <div className="side__checkbox">
                        <input type="checkbox" name="child" id="child" />
                        <label for="child">Child</label>
                    </div>
                    <div className="side__checkbox">
                        <input type="checkbox" name="preshool" id="preshool" />
                        <label for="preshool">Preschool</label>
                    </div>
                    <div className="side__checkbox">
                        <input type="checkbox" name="infant" id="infant" />
                        <label for="infant">Infant</label>
                    </div>
                    <div className="side__checkbox">
                        <input type="checkbox" name="toddler" id="toddler" />
                        <label for="toddler">Toodler</label>
                    </div>
                </div>
                {/* <!-- SIZES --> */}
                <div className="side__title">SIZES</div>
                <div className="side__sizes">
                    {ResultSize.map((size) => (
                        <span className="side__size-item">{size}</span>
                    ))}
                </div>

                {/* <!-- PIRCE --> */}
                <div className="side__title">PRICE</div>
                <div className="side__prices">
                    <div className="side__price">
                        <input type="checkbox" name="price1" id="price1" />
                        <label for="price1">Under $100</label>
                    </div>
                    <div className="side__price">
                        <input type="checkbox" name="price2" id="price2" />
                        <label for="price2">$100 - $200</label>
                    </div>
                    <div className="side__price">
                        <input type="checkbox" name="price3" id="price3" />
                        <label for="price3">$200 - $300</label>
                    </div>
                    <div className="side__price">
                        <input type="checkbox" name="price4" id="price4" />
                        <label for="price4">$300 - $400</label>
                    </div>
                    <div className="side__price">
                        <input type="checkbox" name="price5" id="price5" />
                        <label for="price5">$400 - $500</label>
                    </div>
                    <div className="side__price">
                        <input type="checkbox" name="pric6" id="pric6" />
                        <label for="pric6">$500 - $600</label>
                    </div>
                    <div className="side__price">
                        <input type="checkbox" name="pric7" id="pric7" />
                        <label for="pric7">$600+</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainSide;
