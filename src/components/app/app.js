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
                {label: 'Post 1', important: false, like: false, id: 1},
                {label: 'Post 2', important: false, like: false, id: 2},
                {label: 'Post 3', important: false, like: false, id: 3},
            ],
            term: '',
            filter: 'all',
        }
        this.maxId = this.state.data.length + 1
    }

    onDelete = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)
            const new_data = [
                ...data.slice(0, index),
                ...data.slice(index+1)
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
            id: this.maxId++
        }
        
        this.setState(({data}) => {
            const new_arr = [...data, new_data]
            return {
                data: new_arr
            }
        })
    }
    
    onToggleImportant = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)

            const old_obj = data[index]
            const new_item = {...old_obj, important: !old_obj.important}
            
            const new_data = [
                ...data.slice(0, index), new_item,
                ...data.slice(index+1)
            ];
            
            return {
                data: new_data
            }
        })
    }
    
    onToggleLiked = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)

            const old_obj = data[index]
            const new_item = {...old_obj, like: !old_obj.like}
            
            const new_data = [
                ...data.slice(0, index), new_item,
                ...data.slice(index+1)
            ];
            
            return {
                data: new_data
            }
        })
    }

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        };

        return items.filter((el) => {
            return el.label.indexOf(term) > -1;
        })
    }
    
    onUpdateSearch_terms = (term) => {
        this.setState({term})
    }

    filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter((el) => {
                return el.like
            })
        } else {
            return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const {data, term, filter}= this.state;
        const liked_number = data.filter(item => item.like).length;
        const all_post_number = data.length;

        const able_posts = this.filterPost(this.searchPost(data, term), filter)

        return (
            <div className="app">
                <AppHeader liked={liked_number} posts_number={all_post_number}/>
                <div className="search-panel d-flex">
                    <SearchPanel onUpdateSearch_terms={this.onUpdateSearch_terms}/>
                    <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <PostList posts={able_posts} onDelete={this.onDelete} onToggleImportant={this.onToggleImportant} onToggleLiked={this.onToggleLiked}/>
                <PostAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

