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
				<div className="nav_nav-tabs">
					<div className="container-nav">
						<button className="nav-item__active">
							<span className="nav-link__active">
								<i className="fas fa-plane-departure" />
								DEPARTURES
							</span>
						</button>
						<button className="nav-item">
							<span className="nav-link">
								<i className="fas fa-plane-arrival" />
								ARRIVALS
							</span>
						</button>
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

					<RacesList />
				</table>
			</div>
		</div>
	);
};

export default Scoreboard;
