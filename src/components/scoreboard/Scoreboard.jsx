import React from 'react';
import RacesList from './RacesList';



const Scoreboard = () => {

  return (
    <div className="page">

      <div className="search-flights">
        <div className="container">
          <h1 className="title">SEARCH FLIGHT</h1>
          <div className="search-line-container">
            <form name="searchFlightsForm" action="">
              <input type="text" placeholder="Airline, destination or flight#" />
              <button type="submit" className="search-line-container__button">
                SEARCH
                  </button>
            </form>
          </div>
        </div>
      </div>
      <div className="one">
        <div className="nav_nav-tabs" >
          <div className="container-nav">
            <button className="nav-item__active">
              <span className="nav-link__active">
                <i className="fas fa-plane-departure"></i>
          DEPARTURES
        </span>
            </button>
            <button className="nav-item">
              <span className="nav-link">
                <i className="fas fa-plane-arrival"></i>

          ARRIVALS
        </span>
            </button>
          </div>
        </div>
      </div>
      <div className="tabs-container">
        <table >
          <thead>
            <tr className="table-striped" key={Math.random()}>
              <th>Terminal</th>
              <th>Local time</th>
              <th>Destination</th>
              <th>Status</th>
              <th>Airline</th>
              <th>Flight</th>
            </tr>
          </thead>
          {/* <tbody>
              <tr className="table table-striped__grey" key={Math.random()}>
                <th>A</th>
                <th>3:55</th>
                <th>Barselona</th>
                <th>Landed 0:53</th>
                <th>Wizz Air</th>
                <th>W66260</th>
              </tr>
              <tr className="table table-striped__white" key={Math.random()}>
                <th>A</th>
                <th>1:20</th>
                <th>Warsaw</th>
                <th>Landed 1:35</th>
                <th>LOT</th>
                <th>LO755</th>
              </tr>
              <tr className="table table-striped__grey" key={Math.random()}>
                <th>D</th>
                <th>8:50</th>
                <th>Zaporizha</th>
                <th>Landed 1:35</th>
                <th>Motor Sich</th>
                <th>M9201</th>
              </tr>
              <tr className="table table-striped__white" key={Math.random()}>
                <th>A</th>
                <th>11:15</th>
                <th>Berlin</th>
                <th>Landed 11:28</th>
                <th>Wizz Air</th>
                <th>W66116</th>
              </tr>

            </tbody> */}
          
            <RacesList />
          
        </table>
      </div>
    </div>
  );

}

export default Scoreboard;