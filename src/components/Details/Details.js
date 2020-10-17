import './details.css';

import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import FetchData from '../../service/FetchData';
import Main from '../Main/Main';
import Youtube from 'react-youtube';
import useLaunches from '../../hooks/useLaunches/useLaunches';

const fetchData = new FetchData();

const Details = (props) => {
    // Other get Data
    const [launch, setLaunch] = useState(null);
    const { getLaunch } = useLaunches();
    useEffect(() => {
        setLaunch(getLaunch(props.match.params.topicId));
    }, [getLaunch, props.match.params.topicId]);
    // console.log('launch: ', launch);
    // ..Other get Data

    const history = useHistory();


    // My get Data
    let { topicId } = useParams();
    //let topicId = props.match.params.id;
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData
            .getLaunches()
            .then(
                (launches) =>
                    topicId &&
                    setData(launches.filter((item) => item.id === topicId)[0]),
            );
    }, [topicId]);
    // console.log('data:: ', props);
    // ..My get Data
    
    if (!launch) return null;
    return (
        <>
            <Main name={data.name} />
            <section className="details">
                <div className="container">
                    <div className="details-row">
                        <div className="details-image">
                            <img
                                src={data.links && data.links.patch.small}
                                alt={data.name}
                            />
                        </div>
                        <div className="details-content">
                            <p className="details-description">
                                {data.details}
                            </p>
                        </div>
                    </div>
                    <Youtube
                        className="details-youtube"
                        videoId={data.links.youtube_id}
                    />                    
                </div>
                <a href="/calendar" onClick={history.goBack} className="button button-back">
                    go back
                </a>
            </section>
        </>
    );
};

export default Details;
