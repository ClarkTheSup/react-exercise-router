import React from 'react';
import { Link } from 'react-router-dom';
import data from '../mockups/data.json';


class Products extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: data
        };
    }

    render() {
        return <div>
            <p>All Products:</p>
            <div id="products">
                <ul>
                    {
                    Object.keys(this.state.data).map((key)=><li><Link key={key} to={'/products/' + key}>{key}</Link></li>)
                    }
                </ul>
            </div>
        </div>
    }
}

export default Products;