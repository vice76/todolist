import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import './Blog.css';
import Tips from './Tips/Tips';
import NewList from './NewList/NewList';

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Guide</Link></li>
                            <li><Link to={{
                                pathname: '/add-list',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}><button>Add List</button></Link> </li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Tips} />
                <Route path="/add-list" component={NewList} />

            </div>
        );
    }
}

export default Blog;