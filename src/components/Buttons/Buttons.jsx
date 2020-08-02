/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

const Buttons = ({ getArrivalList, getDepartureList, arrivalActive, departureActive }) => {
  const departureButtonClass = classNames('nav-item nav-item__left',
    { handleClick: departureActive }
  );

  const arrivalButtonClass = classNames('nav-item nav-item__right',
    { handleClick: arrivalActive }
  );

  return (
    <div className='buttons'>
      <div className='nav_nav-tabs'>
        <div className='container-nav'>
          <Link to='/departures' className={departureButtonClass} onClick={getDepartureList}>
            <i className='fas fa-plane-departure' />
            DEPARTURES
          </Link>
          <Link to='/arrivals' className={arrivalButtonClass} onClick={getArrivalList}>
            <i className='fas fa-plane-arrival' />
            ARRIVALS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
