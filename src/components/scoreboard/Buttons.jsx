/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Buttons = ({ getArrivalList, getDepartureList }) => {
  return (
    <div className='buttons'>
      <div className='nav_nav-tabs'>
        <div className='container-nav'>
          <Link to='/departures' className='nav-item__active' onClick={getDepartureList}>
            <i className='fas fa-plane-departure' /> DEPARTURES
			      </Link>
          <Link to='/arrivals' className='nav-item' onClick={getArrivalList}>
            <i className='fas fa-plane-arrival' /> ARRIVALS
					  </Link>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
