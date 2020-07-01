/* eslint-disable no-unused-vars */
import React from 'react';
import { getTime } from '../functions';

const RacesList = ({ flightsList }) => {
	
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


export default RacesList;