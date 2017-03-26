import React, { Component } from 'react';
import SearchResult from './SearchResult';
import { appConfig } from './config';
import elasticsearch from 'elasticsearch';

let client = new elasticsearch.Client({
    host: appConfig.elasticsearchURL,
    log: appConfig.elasticsearchLoggingType
});

export default class SearchResults extends Component {
    constructor() {
        super();
        this.state = { 
            items: [] 
        }
    }

    componentDidMount() {
        var that = this;

        client.search({
            index: 'products'
        }).then(function (elasticResponse) {
            var hits = elasticResponse.hits.hits;
            that.setState({
                items: hits.map((hit) => ({
                    name: hit._source.name,
                    description: hit._source.description,
                    imgUrl: hit._source.imgUrl,
                    price: hit._source.price
                }))
            });
        }, function (error) {
            console.trace(error.message);
        });
    }

    render() {
        return (
            <div className="section">

                <aside className="product__filters three columns">
                    <div className="filters__categories">
                        <h2 className="filter__title">Category</h2>
                        <ul className="filter__items">
                            <li className="filter__item">
                                <a href="#">Trainers</a>
                            </li>
                            <li className="filter__item">
                                <a href="#">Outdoor</a>
                            </li>
                            <li className="filter__item">
                                <a href="#">Jeans</a>
                            </li>
                        </ul>
                    </div>
                    <div className="filters__type">
                        <h2 className="filter__title">Type</h2>
                        <ul className="filter__items">
                            <li className="filter__item">
                                <a href="#">type 1</a>
                            </li>
                            <li className="filter__item">
                                <a href="#" className="checked">type 2</a>
                            </li>
                            <li className="filter__item">
                                <a href="#">type 3</a>
                            </li>
                        </ul>
                    </div>
                    <div className="filters__color">
                        <h2 className="filter__title">Color</h2>
                        <ul className="filter__items">
                            <li className="filter__item">
                                <a href="#" className="checked">Red </a>
                            </li>
                            <li className="filter__item">
                                <a href="#">Green</a>
                            </li>
                            <li className="filter__item">
                                <a href="#">Blue</a>
                            </li>
                        </ul>
                    </div>
                </aside>

                <section id="search__results" className="search__results nine columns">
                    <div className="row">
                        {
                            this.state.items.map(function (item, index) {
                                return (
                                    <SearchResult item={item} key={index} />
                                );
                            })
                        }
                    </div>
                </section>
            </div>
        );
    }
}