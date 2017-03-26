import React, { Component } from 'react';
import SearchResult from './SearchResult';
import axios from 'axios';

const api_key = '94a2f36cd4e27626b6a7a07766a76196';
const endpoint = "https://api.themoviedb.org/3/movie/3?api_key=" + api_key + "&language=en-US";

export default class SearchResults extends Component {
    constructor(){
        super();

        this.state = {
            items: [
                {title: 'winter boots',
                price: '240$',
                desc: 'dsad adsa d ads adsa da dsa dsa da'
            },
            {
                title: 'summer boots',
                price: '320$',
                desc: 'custom description'
            },
            {
                title: 'item no 3',
                price: '220$',
                desc: 'lorem ipsum dolor sit amet'
            },
            {
                title: 'item no 4',
                price: '20$',
                desc: 'lorem ipsum dolor sit amet'
            }
            ]
        }
    }

    componentWillMount() {
        axios.get('http://swapi.co/api/people/')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (err) {
            console.log("error while fetching : ", err);
        })
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
                        <a href="#">type 2</a>
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
                        <a href="#">Red </a>
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
                        return(
                            <SearchResult item={item} key={index}/>
                        );
                    })
                }
            </div>
        </section>
        </div>
    );
  }
}