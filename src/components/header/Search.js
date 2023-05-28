import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import debounce from "lodash.debounce";
import "./Search.scss";
import productsApi from "api/products";

const categories = [
  "All Categories",
  "All Deals",
  "Alexa Skills",
  "Amazon Devices",
  "Amazon Fashion",
  "Amazon Pantry",
  "Appliances",
  "Apps & Games",
  "Baby",
  "Beauty",
  "Big Bazaar",
  "Books",
  "Car & Motorbike",
  "Clothing & Accessories",
  "Collectibles",
  "Computers & Accessories",
  "Electronics",
  "Furniture",
  "Garden & Outdoors",
  "Gift Cards",
  "Grocery & Gourmet Foods",
  "Health & Personal Care",
  "Home & Kitchen",
  "Industrial & Scientific",
  "Jewellery",
  "Kindle Store",
  "Luggage & Bags",
  "Luxury Beauty",
  "Movies & TV Shows",
  "Music",
  "Musical Instruments",
  "Office Products",
  "Pet Supplies",
  "Prime Video",
  "Shoes & Handbags",
  "Software",
  "Sports, Fitness & Outdoors",
  "Tools & Home Improvement",
  "Toys & Games",
  "Under ₹500",
  "Video Games",
  "Watches"
];

function Search() {
  const [category, setCategory] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   const debouncedSearch = debounce(async () => {
  //     // fetch search results using searchTerm and update state
  //     // const result = categories.filter(function (category) {
  //     //   return category.includes(searchTerm.toLowerCase());
  //     // });
  //     if (searchTerm) {
  //       const result = categories.filter((item) => {
  //         return item
  //           .toString()
  //           .toLowerCase()
  //           .includes(searchTerm.toLowerCase());
  //       });
  //       setSearchResults(result);
  //       const json = await productsApi.getSearch(searchTerm.toLowerCase());
  //       console.log(result);
  //       console.log(json);

  //       console.log("Fetching search results for:", searchTerm);
  //     }
  //   }, 500);

  //   debouncedSearch();

  //   return () => {
  //     debouncedSearch.cancel();
  //   };
  // }, [searchTerm]);

  const handleSearchChange = async (e) => {
    setSearchTerm(e.target.value);
    const json = await productsApi.getSearch(searchTerm.toLowerCase());
    console.log(json);
  };

  return (
    <div className="search">
      <select
        className="search__select"
        value={category}
        onChange={(e) => setCategory(parseInt(e.target.value, 10))}
      >
        {categories.map((o, i) => (
          <option key={i} value={i}>
            {o}
          </option>
        ))}
      </select>
      <input
        className="search__input"
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button className="search__button">
        <Icon path={mdiMagnify} size={1.4} />
      </button>

      {searchResults.map((result) => (
        <div key={result}>{result}</div>
      ))}
    </div>
  );
}

export default Search;
