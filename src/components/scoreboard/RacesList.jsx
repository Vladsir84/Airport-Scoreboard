import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { flightsDataSelector } from '../scoreboard.selectors';
import * as scoreboardActions from '../scoreboard.actions';

const RacesList = ({ flightsList,  getArrivalList, getDepartureList }) => {
	
	useEffect(() => {
		return getArrivalList();
	}, []);

	return (
		<tbody>
			{flightsList.map((elem) => {
				<>
					<tr className="table table-striped__grey" key={elem.id}>
						<th>{elem.terminal}</th>
						<th>{elem.localTime}</th>
						<th>{elem.destination}</th>
						<th>{elem.status}</th>
						<th>
							<img type="logo" className="logo" src={`${elem.airlineLogo}`} />
						</th>
						<th>{elem.flight}</th>
					</tr>
					<tr className="table table-striped__white" key={elem.id}>
						<th>{elem.terminal}</th>
						<th>{elem.localTime}</th>
						<th>{elem.destination}</th>
						<th>{elem.status}</th>
						<th>
							<img type="logo" className="logo" src={`${elem.airlineLogo}`} />
						{elem.airlineName} 
						</th>
						<th>{elem.flight}</th>
					</tr>
				</>;
			})}
		</tbody>
	);
};

const mapState = (state) => {
	return {
		flightsList: flightsDataSelector(state),
	};
};

const mapDispatch = {
	getArrivalList: scoreboardActions.getArrivalList,
};

export default connect(mapState, mapDispatch)(RacesList);

