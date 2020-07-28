/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch, useHistory, useLocation } from 'react-router-dom';
import RacesList from './RacesList.jsx';
import Buttons from './Buttons.jsx';
import * as scoreboardActions from '../scoreboard.actions';
import * as scoreboardSelectors from '../scoreboard.selectors';

const Scoreboard = ({ flightsList, getArrivalList, getDepartureList, getFilteredText }) => {
	const [filteredText, setFilteredText] = useState('');

	const history = useHistory();
	const location = useLocation();

	useEffect(() => {
		getDepartureList();
	}, []);

	useEffect(() => {
		if (filteredText) {
			history.push(`${location.pathname}/${filteredText}`);
		}
	}, []);

	return (
		<div className="page">
			<div className="search-flights">
				<div className="container">
					<h1 className="title">SEARCH FLIGHT</h1>
					<div className="search-line-container">
						<Link to={`${history.location.pathname}?search=${filteredText}`}>
							<form name="searchFlightsForm" action="">
								<input
									type="text"
									value={filteredText}
									onChange={(event) => setFilteredText(event.target.value)}
									placeholder="Airline, destination or flight#"
								/>
								<button
									type="submit"
									className="search-line-container__button"
									onClick={() => getFilteredText(filteredText)}
								>
									SEARCH
								</button>
							</form>
						</Link>
					</div>
				</div>
			</div>
			<Buttons 
			   getDepartureList={getDepartureList} 
			   getArrivalList={getArrivalList} 
			/>
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
		</div>
	);
};

const mapState = (state) => {
	return {
		flightsList: scoreboardSelectors.flightsDataSelector(state),
		flightsList: scoreboardSelectors.filteredFlightsSelector(state),
	};
};

const mapDispatch = {
	getArrivalList: scoreboardActions.getArrivalList,
	getDepartureList: scoreboardActions.getDepartureList,
	getFilteredText: scoreboardActions.getFilteredText,
};

export default connect(mapState, mapDispatch)(Scoreboard);