import React from "react";

import "../app/css/post-add-form.css";

const PostAddForm = ({onAdd}) => {
    return (
        <div className="bottom-panel d-flex">
            <input
            type="text"
            placeholder="Add post"
            className="form-control new-post-label"
            />
            <button
            type="submit"
            className="btn btn-outline-secondary" onClick={() => onAdd('123')}>Add</button>
        </div>
    )
}

export default PostAddForm;