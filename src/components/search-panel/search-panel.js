import React, {Component} from "react";

import "../app/css/search-panel.css";

export default class SearchPanel extends Component {
    constructor(props) {
        super(constructor);
        this.state = {
            term: '',
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value
        this.setState({term})
        this.props.onUpdateSearch_terms(term);
    }

    render() {
        return (
            <input 
                className="form-control search-input"
                type="text"
                placeholder="Search posts"
                onChange={this.onUpdateSearch}
            />
        )
    }
}
