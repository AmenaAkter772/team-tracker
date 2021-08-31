import React, { useEffect, useState } from 'react';
import './TeamDetail.css'
import { useParams } from 'react-router-dom';
import maleImage from '../../image/Photo/male.png';
import femaleImage from '../../image/Photo/female.png';
import flag from '../../image/Icon/flag (1) 1.png';
import football from '../../image/Icon/football (1) 1.png';
import gender from '../../image/Icon/male-gender-sign 1.png';
import found from '../../image/Icon/found 1.png';
import facebook from '../../image/Icon/Facebook.png';
import twitter from '../../image/Icon/Twitter.png';
import youTube from '../../image/Icon/YouTube.png';

const TeamDetail = (props) => {
    const { teamId } = useParams();
    const [singleTeam, setSingleTeam] = useState([])

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleTeam(data.teams[0]))
    }, [])

    const { strAlternate, strCountry, strDescriptionEN, strDescriptionIT, strGender, intFormedYear, strTeamBadge } = singleTeam
    const male = 'Male';

    let imageShow = ''
    if (strGender === male) {
        imageShow = <img className="imgPart img-fluid" src={maleImage} alt="" />
    } else {
        imageShow = <img src={femaleImage} alt="" />
    }

    return (
        <div style={{ backgroundColor: '#181230', color: '#fff' }}>
            <div className="top-banner">
                <img className="logoDetail img-fluid pt-4" src={strTeamBadge} alt="" />
            </div>
            <div className="container">
                <div className='d-flex mt-5 p-3 teamDetailPart row'>
                    <div className="textDetail col-md-5">
                        <h5>{strAlternate}</h5>
                        <p><img style={{ width: '20px' }} src={found} alt="" />  Founded: {intFormedYear}</p>
                        <p><img style={{ width: '20px' }} src={flag} alt="" />  country: {strCountry}</p>
                        <p><img style={{ width: '20px' }} src={football} alt="" />  Sport Type: Football</p>
                        <p><img style={{ width: '20px' }} src={gender} alt="" />  Gender: {strGender}</p>
                    </div>
                    <div className="imageDetail col-md-5">
                        {imageShow}
                    </div>
                </div>
            </div>
            <div className="container mt-3">
                <p>{strDescriptionEN}</p><br />
                <p>{strDescriptionIT}</p>
            </div>
            <div className=" d-flex align-items-center justify-content-center">
                <a href="https://www.facebook.com/profile.php?id=100014651687640"><img style={{width:'70px'}} src={facebook} alt="" /></a>
                <a href="https://www.youtube.com/watch?v=CzyspyBe7rk&ab_channel=LearnwithSumit"><img style={{width:'70px'}} src={youTube} alt="" /></a>
                <a href="http://localhost:3000/"><img style={{width:'70px'}} src={twitter} alt="" /></a>
            </div>
        </div>
    );
};

export default TeamDetail;