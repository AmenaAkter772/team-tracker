import React, { useState, useEffect } from 'react';
import Team from '../Team/Team';

const Home = () => {
    const [teams, setTeams] = useState([]);
    const newTeams = teams.slice(11, 20)

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (
        <div className="homeBg">
            <div className="top-banner d-flex align-items-center justify-content-center">
                <h4 style={{color:'#fff'}}>Team Tracker</h4>
            </div>
            <div className="container">
                <div className="row d-flex">
                    {
                        newTeams.map(team => <Team team={team} key={team.idTeam}></Team>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;