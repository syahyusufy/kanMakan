import React, { Component } from 'react';

import './../css/Gallery.scss';

class RestaurantMenu extends Component {
  render() {
    return (
        <>
          <section className="bg-white mb2 ba br--bottom br2 b--black-20">
            <div className="flex flex-wrap justify-between pa2 pa3-ns">
                <div className="fl ph2 w-50 w-30-ns">
                  <a href={require(`./../images/restaurant01.jpg`)} className="black db dim no-underline pv2 swipebox">
                    <img className="db w-100" src={require(`./../images/menu1.jpg`)} alt="Menu"/>
                  </a>
                </div>
                <div className="fl ph2 w-50 w-30-ns">
                  <a href={require(`./../images/restaurant01.jpg`)} className="black db dim no-underline pv2 swipebox">
                    <img className="db w-100" src={require(`./../images/menu2.jpg`)} alt="Menu"/>
                  </a>
                </div>
                <div className="fl ph2 w-50 w-30-ns">
                  <a href={require(`./../images/restaurant01.jpg`)} className="black db dim no-underline pv2 swipebox">
                    <img className="db w-100" src={require(`./../images/menu6.jpg`)} alt="Menu"/>
                  </a>
                </div>
                <div className="fl ph2 w-50 w-30-ns">
                  <a href={require(`./../images/restaurant01.jpg`)} className="black db dim no-underline pv2 swipebox">
                    <img className="db w-100" src={require(`./../images/menu2.jpg`)} alt="Menu"/>
                  </a>
                </div>
                <div className="fl ph2 w-50 w-30-ns">
                  <a href={require(`./../images/restaurant01.jpg`)} className="black db dim no-underline pv2 swipebox">
                    <img className="db w-100" src={require(`./../images/menu4.jpg`)} alt="Menu"/>
                  </a>
                </div>
                <div className="fl ph2 w-50 w-30-ns">
                  <a href={require(`./../images/restaurant01.jpg`)} className="black db dim no-underline pv2 swipebox">
                    <img className="db w-100" src={require(`./../images/menu5.jpg`)} alt="Menu"/>
                  </a>
                </div>
            </div>
        </section>
      </>
    );
  }
}

export default RestaurantMenu;