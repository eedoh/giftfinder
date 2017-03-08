import React, { Component } from 'react';

export default class SearchResult extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
        <div className='result__item'>
            <div className="item__title">{this.props.item.title} ref="title"</div>
            <div className="item__price">{this.props.item.price}</div>
            <div className="item__desc">{this.props.item.desc}</div>
        </div>
    );
  }
}