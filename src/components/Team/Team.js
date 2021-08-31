import React from 'react';
import { useHistory } from 'react-router-dom';
import './Team.css'

const Team = ({ team }) => {
    const { idTeam, strTeam, strTeamBadge } = team;

    const history = useHistory()
const handleAdd = () => {
    const url = `/team/${idTeam}`
    history.push(url)
}

    return (
        <div className="col-md-4">
            <div className=" singleTeam">
                <img className="logoStyle" src={strTeamBadge} alt="" />
                <h6>{strTeam}</h6>
                <p>Sports Type Football</p>
                <button onClick={handleAdd} className="customBtn">Explore --> </button>
            </div>
        </div>
    );
};

export default Team;