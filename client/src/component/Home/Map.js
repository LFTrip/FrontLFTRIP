import React from 'react';

class Map extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <section id="maps" class="header-margin-base">
                    <div class="loading-container">
                        <div class="spinner"></div>
                        <div class="text"><span>Loading Maps</span>please wait</div>
                    </div>
                    <div class="find-result"></div>
                    <div class="map map-home" id="map-canvas"></div>
                </section>
            </React.Fragment>
        );
      }
}

export default Map;