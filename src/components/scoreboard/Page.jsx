/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Scoreboard from './Scoreboard.jsx';
import * as scoreboardActions from '../scoreboard.actions';

const Page = ({ getFilteredText }) => {
    return (
        <div className="page">
            <BrowserRouter>
              <Scoreboard getFilteredText ={getFilteredText} />
            </BrowserRouter>
        </div>
    );
};

const mapDispatch = {
    getFilteredText: scoreboardActions.getFilteredText
}

export default connect(null, mapDispatch)(Page);