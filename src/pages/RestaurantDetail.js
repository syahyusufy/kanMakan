import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'tachyons';

import './../css/RestaurantDetail.css';

class RestaurantDetail extends Component {
  render() {
    return (
      <div>
        <h1>It's Detail</h1>
        <article className="cf">

          <div className="fl w-100 w-70-ns bg-light-gray tc">
            <section className="tc pa3 pa5-ns">
              <article className="hide-child relative bg-white ba b--black-20 w--50 center">
                
                <article className="h5">
                    <img src={require(`./../images/restaurant01.jpg`)} alt="" className="cover mw70 mw70-ns"/>
                </article>

                <div className="pa3 bt b--black-20">
                  <div className="flex justify-between">
                    <div className="w75">
                      <h1 class="f3 tl black-80">The 18th Restaurant & Lounge - The Trans Luxury Hotel </h1>
                      <p className="f5 light-silver mv1 tl"> Buahbatu  ·  Fine Dining</p>
                    </div>
                    <div className="w25 h-auto bg-green">
                      <p className="f2 white mv1 tl">4.0 / 5</p>
                    </div>
                  </div>
                  <hr class="mw50 mv2 bb bw1 b--black-10" />

                  <div class="flex">
                    <a class="f5 link dim br2 ph3 pv2 mr2 mb2 dib gray bg-white ba b--black-10" href="#0">Add Review</a>
                    <a class="f5 link dim br2 ph3 pv2 mr2 mb2 dib gray bg-white ba b--black-10" href="#0">Rate</a>
                    <a class="f5 link dim br2 ph3 pv2 mr2 mb2 dib gray bg-white ba b--black-10" href="#0">Been Here</a>
                    <a class="f5 link dim br2 ph3 pv2 mr2 mb2 dib gray bg-white ba b--black-10" href="#0">Bookmark</a>
                    <a class="f5 link dim br2 ph3 pv2 mr2 mb2 dib gray bg-white ba b--black-10" href="#0">Add to Colection</a>
                  </div>
                </div>
          
                </article>
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
