import './style.css';

import Calendar from './components/Calendar/Calendar';
import Details from './components/Details/Details';
import Features from './components/Features/Features';
import FetchData from './service/FetchData';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import React from 'react';

class App extends React.Component {
    fetchData = new FetchData();
    state = {
        rocket: 'Falcon 1',
        rocketFeatures: null,
        rockets: [],
    };

    componentDidMount() {
        this.updateRocket();
        // this.fetchData.getCompany().then(data => console.log('FetchData: ', data));
    }

    updateRocket() {
        this.fetchData
            .getRocket()
            .then((data) => {
                this.setState({ rockets: data.map((item) => item.name) });
                return data;
            })
            .then((data) =>
                data.find((item) => item.name === this.state.rocket),
            )
            .then((rocketFeatures) => this.setState({ rocketFeatures }));
    }

    changeRocket = rocket => {
        this.setState({
            rocket
        }, this.updateRocket)
    }

    render() {
        
        return (
            <>
                <Header
                    rockets={this.state.rockets}
                    changeRocket={this.changeRocket}
                />
                <Main rocket={this.state.rocket} />
                <Features rocketFeatures={this.state.rocketFeatures} />
                {/* <Details />
                <Calendar /> */}
                <Footer />
            </>
        );
    }
}

export default App;
