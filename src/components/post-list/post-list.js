import React from "react";
import PostListItem from "../post-list-item";

import "../app/css/post-list.css";

const PostList = ({posts}) => {

    const elements = posts.map((post, i) => {
        return (
            <li key={i} className="list-group-item">
                <PostListItem {...post}/>
            </li>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;