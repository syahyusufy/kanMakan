import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

class RestaurantReviews extends Component {
  render() {
    return (
      <>
        <section className="bg-white ba br--bottom br2 b--black-20 mb3">
        <div className="flex flex-wrap justify-between">
          <div className="w-80 pa2 pa3-ns">
            <div className="f5 ma0 pa0 b dark-gray">100% genuine reviews from real foodies based on real experiences</div>
            <p className="f7 mid-gray">KanMakan rating is based on weighted average method of calculation that takes into account multiple factors such as votes, user credibility and local trends to come up with a score that you can rely on. </p>
            <div class="flex">
              <div className="flex flex-column">
                <div className="rate-box-aggregate rate-color-level4 mb1 f3 white tl pa2">
                  4.0 
                  <span className="f5"> / 5</span>
                </div>
                <div className="w4 f6 mid-gray mv1 tl">
                  9092 reviews
                </div>
              </div>
              <div className="flex flex-column ml2">
                <p className="f5 dark-gray ma0 pa0 pb2">Recent ratings trend</p>
                <div className="flex flex-wrap pb1 pb1-ns">
                    <div className="rate-box rate-color-star4">
                      4 <FontAwesomeIcon icon={faStar} className="star-size" />
                    </div>
                    <div className="rate-box rate-color-star5">
                      5 <FontAwesomeIcon icon={faStar} className="star-size" />
                    </div>
                    <div className="rate-box rate-color-star5">
                      5 <FontAwesomeIcon icon={faStar} className="star-size" />
                    </div>
                    <div className="rate-box rate-color-star4">
                      4 <FontAwesomeIcon icon={faStar} className="star-size" />
                    </div>
                    <div className="rate-box rate-color-star3">
                      3 <FontAwesomeIcon icon={faStar} className="star-size" />
                    </div>
                    <div className="rate-box rate-color-star1">
                      1 <FontAwesomeIcon icon={faStar} className="star-size" />
                    </div>
                    <div className="rate-box rate-color-star3">
                      3 <FontAwesomeIcon icon={faStar} className="star-size" />
                    </div>
                    <div className="rate-box rate-color-star1">
                      1 <FontAwesomeIcon icon={faStar} className="star-size" />
                    </div>
                    <div className="rate-box rate-color-star2">
                      2 <FontAwesomeIcon icon={faStar} className="star-size" />
                    </div>
                </div>
                <div class="flex ">
                  <div class="most_recent mt1">most recent</div>
                  <div class="flex ml1">
                    <div class="dash_colr fs20">←</div>
                    <div class="dash_hover ml1"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="fr w-20">
            <img  src={require(`./../images/verified.png`)} alt="Verified" class="fr db w-60" />
          </div>
        </div>
      </section>
            

      <section className="bg-white ba br--all br2 b--black-20 pa2 pa3-ns">
        <div className="f4 b dark-gray mb2 pa0">Write a Review</div>
        <div className="flex flex-wrap justify-between">
          <div className="w-10">
            <img  src={require(`./../images/user.png`)} alt="Verified" className="fl db w-90" />
          </div>
          <div className="w-90 pa2 pa3-ns">
            <p className="f7 mid-gray w-100 bg-near-white ba br--all br2 b--light-gray"> can rely on. </p>
          </div>
        </div>
      </section>
      </>
    );
  }
}

export default RestaurantReviews;