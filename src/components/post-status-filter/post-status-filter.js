import React from "react";

import "../app/css/post-status-filter.css";

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-info" type="button">All</button>
            <button className="btn btn-outline-secondary" type="button">Favourite</button>
        </div>
    )
}

export default PostStatusFilter;