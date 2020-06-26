import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { flightsDataSelector } from "../scoreboard.selectors";
import * as scoreboardActions from "../scoreboard.actions";


const RacesList = ({ getFlightsList }) => {

    const [flightsList] = useState([]);
    
    useEffect(() => {
        return getFlightsList()
    }, []);
    
    return (
    <tbody>
        {flightsList.map((elem) => {
            <>
                <tr className="table table-striped__grey" key={Math.random()}>
                    <th>{elem.terminal}</th>
                    <th>{elem.localTime}</th>
                    <th>{elem.destination}</th>
                    <th>{elem.status}</th>
                    <th>
                        <img type="logo" className="logo" src={`${elem.airlineLogo}`} />
                    </th>
                    <th>{elem.flight}</th>
                </tr>
                <tr className="table table-striped__white" key={Math.random()}>
                    <th>{elem.terminal}</th>
                    <th>{elem.localTime}</th>
                    <th>{elem.destination}</th>
                    <th>{elem.status}</th>
                    <th>
                        <img type="logo" className="logo" src={`${elem.airlineLogo}`} />
                    </th>
                    <th>{elem.flight}</th>
                </tr>

            </>
     })
    }
    </tbody>
)   

}

const mapState = state => {
    return {
        flightsList: flightsDataSelector(state),
    };
};

const mapDispatch = {
    getFlightsList: scoreboardActions.getFlightsList,
};


export default  connect(mapState, mapDispatch)(RacesList);