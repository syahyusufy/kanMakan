import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

class RestaurantReviews extends Component {
  render() {
    return (
      <>
      <section className="bg-white mb2 ba br--bottom br2 b--black-20">
        <div className="flex flex-wrap justify-between pb2 pb3-ns">
          <div className="w-80 pa2 pa3-ns">
            <div className="f5 ma0 pa0 b dark-gray">100% genuine reviews from real foodies based on real experiences</div>
            <p className="f7 mid-gray">KanMakan rating is based on weighted average method of calculation that takes into account multiple factors such as votes, user credibility and local trends to come up with a score that you can rely on. </p>
            <div class="flex">
              <div className="flex flex-column">
                <div className="rate-box-aggregate rate-color-level1 mb1 f3 white tl pa2">
                  4.0 
                  <span className="f5"> / 5</span>
                </div>
                <div className="w4 f6 mid-gray mv1 tl">
                  92 reviews
                </div>
              </div>
              <div className="flex flex-column">
                <div className="flex progress_con">
                  <div className="mr6 dark-gray f7">5 star</div>
                  {/* <div className="ui-progress h10 w220 bar_text" data-value="67" data-total="100" data-percent="67">
                    <div className="bar h10 hcolor_5 progress_override" style="transition-duration: 300ms; width: 67%;"></div>
                  </div> */}
                </div>
              </div>
            </div>
            <p className="f5 gray">Recent ratings trend</p>
            <div className="flex flex-wrap pb2 pb3-ns">
                <div className="rate-box rate-color-star4">
                  4 <FontAwesomeIcon icon={faStar} className="star-size" />
                </div>
                <div className="rate-box rate-color-star5">
                  5 <FontAwesomeIcon icon={faStar} className="star-size" />
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
          </div>
          <div className="fr w-20 pl2">
            <img  src={require(`./../images/verified.png`)} alt="Verified" class="fr db w-60" />
          </div>
        </div>
      </section>

    </>
    );
  }
}

export default RestaurantReviews;