import React from "react";

import "../app/css/search-panel.css";

const SearchPanel = () => {
    return (
        <input 
            className="form-control search-input"
            type="text"
            placeholder="Search posts"
        />
    )
}

export default SearchPanel;