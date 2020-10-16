import './details.css';

import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import FetchData from '../../service/FetchData';
import Main from '../Main/Main';
import Youtube from 'react-youtube';
import useLaunches from '../useLaunches/useLaunches';

const fetchData = new FetchData();

const Details = (props) => {
    // Other get Data
    const [launch, setLaunch] = useState(null);
    const { getLaunch } = useLaunches();
    useEffect(() => {
        setLaunch(getLaunch(props.match.params.topicId));
    }, [getLaunch]);
    // console.log('launch: ', launch);
    // ..Other get Data

    const history = useHistory();

    //let topicId = props.match.params.id;
    let { topicId } = useParams();

    // My get Data
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData
            .getLaunches()
            .then(
                (launches) =>
                    topicId &&
                    setData(launches.filter((item) => item.id === topicId)[0]),
            );
    }, []);
    // console.log('data:: ', props);

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
                    <Youtube className="details-youtube" videoId={data.links.youtube_id} />                    
                </div>
                <a onClick={history.goBack} className="button button-back">
                    go back
                </a>
            </section>
        </>
    );
};

export default Details;
