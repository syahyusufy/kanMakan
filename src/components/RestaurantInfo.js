import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

class RestaurantInfo extends Component {
  render() {
    return (
      <>
      <div className="flex bg-white mb2 ba br--bottom br2 b--black-20">
        
        <div className="flex flex-wrap w-third">
          <div id="address" className="w-100 bg-white pa3 pr0 pb0 mb2 mr2">
            <div className="f4 b dark-gray">Phone Number</div>
            <div className="f6 b phone-color mt2">022 84288888</div>
          </div>
          <div id="cuisines" className="w-100 bg-white pa3 pr0 pb0 mb2 mr2">
            <div className="f4 b mb2 dark-gray">Cuisines</div>
            <span className="f6 red pointer">Western</span>, &nbsp;
            <span className="f6 red pointer">Italian</span>
          </div>
          <div id="cost-average" className="w-100 bg-white pa3 pr0 pb0 mb2 mr2">
            <div className="f4 b dark-gray">Average Cost</div>
            <div className="f6 dark-gray mt2">Rp700.000 for two people (approx.)</div>
            <div className="f7 dark-gray mt2">Cash and Cards accepted</div>
          </div>
        </div>
        
        <div className="flex flex-wrap w-third">
          <div id="schedules" className="w-100 bg-white pa3 pr0 pb0 mb2 mr2">
            <div className="f4 b dark-gray">Opening hours <span className="f7 normal"> · </span><span className="f7 normal phone-color">Open Now</span></div>
            <div className="f6 dark-gray mt2">Today  4pm – 12midnight</div>
            <div className="f7 red mt1 pointer">See more</div>
          </div>
          <div id="address" className="w-100 bg-white pa3 pr0 pb0 mb2 mr2">
            <div className="f4 b dark-gray">Address</div>
            <div className="f6 dark-gray mt2">The Trans Luxury Hotel, Jl. Gatot Subroto No. 289, Buahbatu, Bandung 40273</div>
          </div>
        </div>
        
        <div className="flex flex-wrap w-third">
          <div id="facilities" className="w-100 bg-white pa3 pr0 pb0 mb2 mr2">
            <div className="f4 b dark-gray"><i class="fas fa-check"></i>More Info</div>
            <div className="f6 dark-gray mt2">
              <div><FontAwesomeIcon icon={faCheck} className="phone-color" /> Wifi</div>
              <div><FontAwesomeIcon icon={faTimes} className="red" /> No Alcohol Available</div>
              <div><FontAwesomeIcon icon={faCheck} className="phone-color" /> Private Dining Area Available</div>
              <div><FontAwesomeIcon icon={faCheck} className="phone-color" /> Smoking Area</div>
            </div>
          </div>
          <div id="collection" className="w-100 bg-white pa3 pr0 pb0 mb2 mr2">
            <div className="f4 b mb2 dark-gray">Featured in Collection</div>
            <span className="f6 red pointer">Romantic</span>, &nbsp;
            <span className="f6 red pointer">Italian</span>
          </div>
        </div>

      </div>
    </>
    );
  }
}

export default RestaurantInfo;