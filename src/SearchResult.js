import React, { Component } from 'react';

export default class SearchResult extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
        <div className='result__item six columns'>
            <div className="result__item-image">
                <img src="http://placeskull.com/400/200" alt="item image"/>
            </div>
            <div className="result__item-content">
                <a href="#"><h2 className="title">{this.props.item.title}</h2></a>
                <p className="desc">{this.props.item.desc}</p>
                <div className="price">{this.props.item.price}</div>
            </div>
            <div className="result__item-footer"></div>
        </div>
    );
  }
}