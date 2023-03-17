import React, {Component} from "react";

import "../app/css/post-list-item.css";

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false,
        }
    }

    onImportant = () => {
        this.setState(({important}) => ({
            important: !important
        }))
    }

    onLike = () => {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {

        const {label, onDelete} = this.props;
        const {important, like} = this.state;
        let class_names = "app-list-item d-flex justify-content-between";

        if (important) {
            class_names += ' important'
        }

        if (like) {
            class_names += ' like'
        }

        return (
            <div className={class_names}>
                <span className="app-list-item-label" onClick={this.onLike}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button" className="btn-star btn-sm" onClick={this.onImportant}>    
                        <i className="bi bi-star"></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm" onClick={onDelete}>    
                        <i className="bi bi-trash"></i>
                    </button>
                    <i className="bi bi-heart"></i>
                </div>
            </div>
        )
        
    }
}
