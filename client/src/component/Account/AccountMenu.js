import React from 'react';

export default class AccountMenu extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <ul class="block-menu">
                    <li><a class="faq-button active" href="profile.html"><i class="icon fa fa-user-secret"></i> Profile</a></li>
                    <li><a class="faq-button" href="my-properties.html"><i class="icon fa fa-home"></i> My trip</a></li>
                    <li><a class="faq-button" href="bookmarked.html"><i class="icon fa fa-heart"></i> Bookmarked</a></li>
                    <li><a class="faq-button" href="new-property.html"><i class="icon fa fa-plus"></i> Create New trip</a></li>
                </ul>
            </React.Fragment>
        );
      }
}
