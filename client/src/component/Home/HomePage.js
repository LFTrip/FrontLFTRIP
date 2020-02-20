import React from 'react';
import Map from './Map';
import SearchTravelForm from './SearchTravelForm';
import { withBackaccessContext } from '../BackEnd';
import TripTeaser from './TripTeaser';
import BlogTeaser from './BlogTeaser';

import { compose } from 'recompose';
import { withAuthorization } from '../Session';


class HomePage extends React.Component{
	constructor(props){
        super(props);
        this.props.backaccess
			.postDate({"email" : "email", "password" : "password"}, "lo")
			.then(value => {
                console.log(value);
			})
			.catch(error => {
				this.setState({ error });
			});
    }

    searchTrip = value => {
        this.setState({
            ...value
        })
    }

    render() {
        return (
            <React.Fragment>
                <Map />
                <SearchTravelForm  
                    search ={this.searchTrip} 
                />
				<TripTeaser />
				<BlogTeaser />
            </React.Fragment>
        );
      }
}


const condition = authUser => !!authUser;
/*
export default compose(
	withAuthorization(condition),
)(HomePage);*/
export default compose(withBackaccessContext(HomePage));


