import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'tachyons';

import Tabs from './../components/Tabs';
import RestaurantInfo from './../components/RestaurantInfo';
import RestaurantMenu from '../components/RestaurantMenu';
import RestaurantReviews from '../components/RestaurantReviews';
import RestaurantPhotos from '../components/RestaurantPhotos';


import './../css/RestaurantDetail.css';
require('./../css/Tabs.css');

class RestaurantDetail extends Component {
  render() {
    return (
      <div>
        <h1>It's Detail</h1>
        <article className="cf">

          <div className="fl w-100 w-70-ns tc">
            <section className="tc ph5-ns pt3-ns pb0">
              <article className="hide-child relative bg-gray-banner ba br2 b--black-20 w--50 center">
                
                <article className="h5">
                    <img src={require(`./../images/restaurant01.jpg`)} alt="Restaurant" className="cover mw70 mw70-ns"/>
                </article>

                <div className="pa3 bt b--black-20">
                  <div className="flex justify-between">
                    <div className="w-75">
                      <h1 className="f3 tl black-80">The 18th Restaurant & Lounge - The Trans Luxury ... </h1>
                      <p className="f5 light-silver mv1 tl"> Buahbatu  ·  Fine Dining</p>
                    </div>
                    <div className="flex flex-column">
                      <div className="w25 br2 bg-green mt3 mb1 f3 white tl pa2 b">
                        4.0 
                        <span className="green f5"> / 5</span>
                      </div>
                      <div className="w25 f6 light-silver mv1 tc">
                        92 votes
                      </div>
                    </div>
                  </div>

                  <hr className="ui-devider-clear" />

                  <div className="flex">
                    <a className="f5 link dim br2 ph3 pv2 mr2 mb2 dib gray bg-white ba b--black-10" href="#0">Add Review</a>
                    <a className="f5 link dim br2 ph3 pv2 mr2 mb2 dib gray bg-white ba b--black-10" href="#0">Rate</a>
                    <a className="f5 link dim br2 ph3 pv2 mr2 mb2 dib gray bg-white ba b--black-10" href="#0">Been Here</a>
                    <a className="f5 link dim br2 ph3 pv2 mr2 mb2 dib gray bg-white ba b--black-10" href="#0">Bookmark</a>
                    <a className="f5 link dim br2 ph3 pv2 mr2 mb2 dib gray bg-white ba b--black-10" href="#0">Add to Colection</a>
                  </div>
                </div>
          
                </article>
            </section>
          
            <section className="tc ph5-ns pt1-ns pb0">
              <div className="tl">
                <Tabs>
                  <div label="Overview">
                    <RestaurantInfo ></RestaurantInfo>
                  </div>
                  <div label="Menu">
                    <RestaurantMenu ></RestaurantMenu>
                  </div>
                  <div label="Reviews (97)">
                    <RestaurantReviews ></RestaurantReviews>
                  </div>
                  <div label="Photos (58)">
                    <RestaurantPhotos ></RestaurantPhotos>
                  </div>
                </Tabs>
              </div>
            </section>
          </div>

          <div className="fl w-100 w-30-ns bg-light-gray tc">
            <h1>Column Two</h1>
          </div>

        </article>
      </div>
    );
  }
}

export default RestaurantDetail;
