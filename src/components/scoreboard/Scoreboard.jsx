/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import RacesList from './RacesList.jsx';
import * as scoreboardActions from '../scoreboard.actions';
import * as scoreboardSelectors from '../scoreboard.selectors';

const Scoreboard = ({ flightsList, getArrivalList, getDepartureList }) => {
	useEffect(() => {
		// getArrivalList();
		getDepartureList();
	}, []);

	return (
		<div className="page">
			<BrowserRouter>
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
					<div className="nav_nav-tabs">
						<div className="container-nav">
							<Link to="/departures">
								<button className="nav-item__active" onClick={getDepartureList}>
									<i className="fas fa-plane-departure" />
									DEPARTURES
								</button>
							</Link>
							<Link to="/arrivals">
								<button className="nav-item" onClick={getArrivalList}>
									<i className="fas fa-plane-arrival" />
									ARRIVALS
								</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="tabs-container">
					<table>
						<thead>
							<tr className="table-striped">
								<th>Terminal</th>
								<th>Local time</th>
								<th>Destination</th>
								<th>Status</th>
								<th>Airline</th>
								<th>Flight</th>
							</tr>
						</thead>
						<Switch>
							<Route>
								<RacesList flightsList={flightsList} />
							</Route>
						</Switch>
					</table>
				</div>
			</BrowserRouter>
		</div>
	);
};

const mapState = (state) => {
	return {
		flightsList: scoreboardSelectors.flightsDataSelector(state),
		flightsArrivalList: scoreboardSelectors.flightsArrivalListSelector(state),
		flightsDepartureList: scoreboardSelectors.flightsDepartureListSelector(state),
	};
};

const mapDispatch = {
	getArrivalList: scoreboardActions.getArrivalList,
	getDepartureList: scoreboardActions.getDepartureList,
};

export default connect(mapState, mapDispatch)(Scoreboard);
