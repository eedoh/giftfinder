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
        <section id="search__results" className="search__results">
            <div className="container fixed">
                <div className="grid-thirds">
                    {
                        this.state.items.map(function (item, index) {
                            return(
                                <SearchResult item={item} key={index}/>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
  }
}