import React, { Component } from 'react';

export default class SearchResult extends Component {
    componentWillReceiveProps(nextProps) {
        this.setState({
            title: nextProps.title,
            description: nextProps.description,
            imgUrl: nextProps.imgUrl,
            price: nextProps.price
        });
    }

    render() {
        return (
            <div className='result__item six columns'>
                <div className="result__item-image">
                    <img src={this.props.item.imgUrl} alt="item" />
                </div>
                <div className="result__item-content">
                    <a href="#"><h2 className="title">{this.props.item.name}</h2></a>
                    <p className="desc">{this.props.item.description}</p>
                    <div className="price">{this.props.item.price}</div>
                </div>
                <div className="result__item-footer"></div>
            </div>
        );
    }
}