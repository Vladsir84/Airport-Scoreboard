import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { flightsDataSelector } from '../scoreboard.selectors';
import * as scoreboardActions from '../scoreboard.actions';
import { getTime } from './functions';

const RacesList = ({ flightsList, getArrivalList, getDepartureList }) => {
	useEffect(() => {
		getArrivalList();
	}, []);
	
	
	return (
		<tbody>
			{flightsList.map((elem) => ( 
				<>
					<tr className="table table-striped__grey" key={Math.random()}>
						<th>{elem.terminal}</th>
						<th>{getTime(elem.localTime)}</th>
						<th>{elem.destination}</th>
						<th>{elem.status}</th>
						<th>
							<span className="one-airline">
								<img type="logo" className="logo" src={`${elem.airlineLogo}`} />
								{elem.airlineName}
							</span>
						</th>
						<th>{elem.flight}</th>
					</tr>
					<tr className="table table-striped__white" key={Math.random()}>
						<th>{elem.terminal}</th>
						<th>{getTime(elem.localTime)}</th>
						<th>{elem.destination}</th>
						<th>{elem.status}</th>
						<th>
							<span className="one-airline">
								<img type="logo" className="logo" src={`${elem.airlineLogo}`} />
								{elem.airlineName}
							</span>
						</th>
						<th>{elem.flight}</th>
					</tr>
				</>
			))}
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
	getDepartureList: scoreboardActions.getDepartureList,
};

export default connect(mapState, mapDispatch)(RacesList);
