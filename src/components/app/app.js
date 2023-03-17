import React, {Component} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form"

import "./css/app.css";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Post 1', important: true},
                {label: 'Post 2', important: false},
                {label: 'Post 3', important: false},
            ]
        }
    }

    onDelete = (id) => {
        this.setState(({data}) => {
            const new_data = [
                ...data.slice(0, id),
                ...data.slice(id+1)
            ];
            return {
                data: new_data
            }
        })
    }

    addItem = (body) => {
        const new_data = {
            label: body,
            important: false,
        }

        this.setState(({data}) => {
            const new_arr = [...data, new_data]
            return {
                data: new_arr
            }
        })
    }

    render() {
        const data = this.state.data
        return (
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts={data} onDelete={this.onDelete}/>
                <PostAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

