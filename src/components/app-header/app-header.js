import React from "react";

import "../app/css/app-header.css";

const AppHeader = ({liked, posts_number}) => {
    
    return (
        <div className="app-header d-flex">
            <h1>Alex Srf</h1>
            <h2>{posts_number} posts. {liked} are favourite.</h2>
        </div>
    )
}

export default AppHeader;