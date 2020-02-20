import React from 'react';
import TripList from './TripList';

class TripTeaser extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <section id="recent-list">
                    <div class="section-detail">
                        <h1>
                        <span>Have </span>
                        <span id="spinner-show">
                            <em class="current">Groups</em>
                            <span class="next"><span></span></span>
                        </span>
                        <span>Trip</span>
                        </h1>
                        <ul id="spinner">
                            <li>Clients</li>
                            <li>Simple</li>
                            <li>Funny</li>
                        </ul>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor, sagittis sed elementum dignissim, lobortis.</h2>		
                    </div>
                    <TripList />
                </section>
            </React.Fragment>
        );
      }
}

export default TripTeaser;