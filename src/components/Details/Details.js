import './details.css';

import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import FetchData from '../../service/FetchData';

const fetchData = new FetchData();

const Details = () => {
    let { topicId } = useParams();

    const [data, setData] = useState([]);    

    useEffect(() => {
        fetchData
            .getLaunches()
            .then((launches) =>
                setData(launches.filter((item) => item.id === topicId)[0]),
            );
    }, []);
    // console.log('data:: ', data);

    return (
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
                        <p className="details-description">{data.details}</p>
                    </div>
                </div>
                <div>
                    <iframe
                        title="details-youtube"
                        className="details-youtube"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/dLQ2tZEH6G0"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            <Link to={'/calendar'} className="button button-back">
                go back
            </Link>
        </section>
    );
};

export default Details;
