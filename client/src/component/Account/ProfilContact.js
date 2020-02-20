import React from 'react';

export default class ProfilContact extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <ul class="contact">
                    <li><a href="#" class="icon"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#" class="icon"><i class="fa fa-google-plus"></i></a></li>
                    <li><a href="#" class="icon"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#" class="icon"><i class="fa fa-envelope-o"></i></a></li>
                    <li><a href="agent-detail.html" class="icon"><i class="fa fa-info-circle"></i></a></li>
                </ul>	
            </React.Fragment>
        );
      }
}
