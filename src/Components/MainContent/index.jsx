import React from "react";
import "./MainContent.scss";

MainContent.propTypes = {};

function MainContent({ data }) {
    console.log(data);
    return (
        <div className="col-xl-10">
            <div className="row">
                {data.map((item) => {
                    return (
                        <div className="col-xl-3">
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
                                        ${item.price}
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
