import React from "react";
import "./MainContent.scss";

MainContent.propTypes = {};

const formatPrice = (price) => {
    if (price >= 10000) {
        let front = Math.floor(price / 1000);
        let back = price % 1000;
        if (back == 0) {
            back = "000";
        }
        return `${front},${back}`;
    }
    return price;
};

function MainContent({ data }) {
    return (
        <div className="col-xl-10">
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
