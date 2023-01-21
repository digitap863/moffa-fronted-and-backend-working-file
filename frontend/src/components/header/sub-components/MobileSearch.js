import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileSearch = () => {
  const [serchvalue, setSearchValue] = useState();
  return (
    <div className="offcanvas-mobile-search-area">
      <input
        type="search"
        placeholder="Search ..."
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <Link to={process.env.PUBLIC_URL + `/product/${serchvalue}`}>
        <button className="button-search">
          <i className="pe-7s-search" />
        </button> 
      </Link>
    </div>
  );
};

export default MobileSearch;
