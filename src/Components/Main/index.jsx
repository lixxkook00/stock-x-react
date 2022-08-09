import React, { useState, useEffect } from "react";
import MainContent from "../MainContent";
import MainSide from "../MainSide";
import "./Main.scss";
import data, { brand, sizes, prices } from "../../data";

Main.propTypes = {};

// Util Function
const filterCustom = (min, max, array) => {
    return array.filter((item) => item.price >= min && item.price <= max);
};

const getIndexByName = (name, array) => {
    const isIndex = (element) => element.name === name;
    return array.findIndex(isIndex);
};

let checkerSome = (arr, target) => target.some((v) => arr.includes(v));
let checkerEvery = (arr, target) => target.every((v) => arr.includes(v));

// If includes ? ADD : Remove
const handleChecked = (item, array) => {
    let temp = [...array];
    if (array.includes(item)) {
        temp = temp.filter((type) => type !== item);
    } else {
        temp = [...temp, item];
    }
    return temp;
};

function Main() {
    // useState Data List
    const [dataList, setDataList] = useState(() => {
        const newDataList = [...data].filter((item) => item.type === "sneaker");
        return newDataList;
    });
    // FILTER BAR
    const [primaryLink, setPrimaryLink] = useState("sneaker");
    const [secondLink, setSecondLink] = useState("");

    const [totalItem, setTotalItem] = useState(dataList.length);
    const [brandList, setBrandList] = useState(() => {
        let tempBrand = [...brand].filter((item) => item.type === "sneaker");
        return tempBrand;
    });

    const [titleFiltered, setTitleFiltered] = useState("Featured");

    // SIDE BAR for FILTER
    const [sizeList, setSizeList] = useState([]);
    const [sizeTypeList, setSizeTypeList] = useState([]);

    // index of Prices
    const [priceList, setPriceList] = useState([]);

    // title of Prices for filterTags
    const [priceListTags, setPriceListTags] = useState([]);

    const [filterTags, setFilterTag] = useState([]);

    // Filter by Type Item
    const handleFilter = (keyFilter) => {
        const newDataList = [...data].filter((item) => item.type === keyFilter);
        setPrimaryLink(keyFilter);
        setSecondLink("");
        setDataList(newDataList);
    };

    // Sort by price
    const handleSort = (key, title) => {
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

    // Filter by Size Type
    const handleFilterBySizeType = (size) => {
        let temp = handleChecked(size, sizeTypeList);
        setSizeTypeList([...temp]);
    };

    //Filter by Size
    const handleFilterBySize = (size) => {
        let temp = handleChecked(size, sizeList);
        setSizeList([...temp]);
    };

    // Filter by Price
    const handleFilterByPrice = (name) => {
        let temp = handleChecked(name, priceList);
        setPriceList(temp);
    };

    // Remove filter tags
    const handleRemoveFilterTag = (index) => {
        const temp = filterTags.filter((tag) => tag !== index);
        setFilterTag(temp);
    };

    // Handle filter tags
    // useEffect(() => {
    //     setFilterTag([...sizeList, ...sizeTypeList, ...priceListTags]);
    // }, [sizeList, sizeTypeList, priceListTags]);

    //  Filter Tag Onchange
    useEffect(() => {
        console.log("filter Tags : ", filterTags);
        console.log("Size Type : ", sizeTypeList);
        console.log("Price : ", priceList);
    }, [filterTags]);

    // Filter by sizes
    useEffect(() => {
        if (sizeList.length > 0) {
            const tempList = [...data].filter(
                (item) =>
                    checkerSome(item.size, sizeList) &&
                    item.type === primaryLink
            );
            setDataList(tempList);
        } else {
            handleFilter(primaryLink);
        }
        // eslint-disable-next-line
    }, [sizeList]);

    // Filter by prices
    useEffect(() => {
        let tempCurrent = [];
        let newDataList = [];
        if (priceList.length > 0) {
            priceList.forEach((item) => {
                const index = getIndexByName(item, prices);
                tempCurrent = filterCustom(
                    prices[index].min,
                    prices[index].max,
                    [...dataList]
                );
                newDataList = [...newDataList, ...tempCurrent];
                // console.log(newDataList, prices[item].min, prices[item].max);
            });
            setDataList(newDataList);
        }
        // eslint-disable-next-line
    }, [priceList]);

    // Filter by sizes type
    useEffect(() => {
        if (sizeTypeList.length > 0) {
            const tempList = [...dataList].filter(
                (item) =>
                    checkerEvery(item.sizeType, sizeTypeList) &&
                    item.type === primaryLink
            );
            setDataList(tempList);
        } else {
            handleFilter(primaryLink);
        }
        // eslint-disable-next-line
    }, [sizeTypeList]);

    // Set to default
    useEffect(() => {
        // Title box option Filter Bar
        setTitleFiltered("Featured");

        // Brand
        let tempBrand = [...brand].filter((item) => item.type === primaryLink);
        setBrandList(tempBrand);
        // Filter Tags
        setFilterTag([]);
        setSizeList([]);
        setSizeTypeList([]);
    }, [primaryLink]);

    // Set total item display
    useEffect(() => {
        setTotalItem(dataList.length);
    }, [dataList]);

    // Update prices tags
    useEffect(() => {
        const temp = [];
        priceList.forEach((item) => {
            const index = getIndexByName(item, prices);
            temp.push(prices[index].title);
        });
        console.log(temp);
        setPriceListTags(temp);
    }, [priceList]);

    // Update Filter tags by price
    useEffect(() => {
        if (filterTags.length > 0) {
            const tempFiltertags = filterTags.filter(
                (item) => item.type !== "price"
            );
            priceList.forEach((item) => {
                tempFiltertags.push({ title: item, type: "price" });
            });
            console.log(tempFiltertags);
            setFilterTag(tempFiltertags);
        } else {
            setFilterTag([{ title: priceList[0], type: "price" }]);
        }
    }, [priceList]);

    return (
        <div className="main">
            <div className="container">
                <div className="row">
                    <MainSide
                        onFilter={handleFilter}
                        brandList={brandList}
                        primaryLink={primaryLink}
                        secondLink={secondLink}
                        handleFilterByBrand={handleFilterByBrand}
                        sizes={sizes}
                        sizeTypeList={sizeTypeList}
                        handleFilterBySizeType={handleFilterBySizeType}
                        sizeList={sizeList}
                        handleFilterBySize={handleFilterBySize}
                        priceList={priceList}
                        handleFilterByPrice={handleFilterByPrice}
                    />
                    <MainContent
                        filterTags={filterTags}
                        key={data.length}
                        data={dataList}
                        primaryLink={primaryLink}
                        secondLink={secondLink}
                        handleSort={handleSort}
                        titleFiltered={titleFiltered}
                        handleFilter={handleFilter}
                        totalItem={totalItem}
                        handleRemoveFilterTag={handleRemoveFilterTag}
                    />
                </div>
            </div>
        </div>
    );
}

export default Main;
