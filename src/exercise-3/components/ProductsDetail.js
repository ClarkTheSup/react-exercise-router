import React from 'react';
import { Link } from 'react-router-dom';
import data from '../mockups/data.json';

class ProductsDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: data
        };
    }

    render() {
        let item = this.props.match.params.item;
        return <div>
            <p>Product details:</p>
            <div id="productDetails">
                <ul>
                    {
                    Object.keys(this.state.data[item]).map((key)=><li><span key={key}>{key} : {this.state.data[item][key]}</span></li>)
                    }
                </ul>
            </div>
        </div>
    }
}

export default ProductsDetail;