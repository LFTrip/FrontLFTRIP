import React from 'react';
import { withBackaccessContext } from '../BackEnd';
import ProfilPicture from './ProfilPicture';
import ProfilContact from './ProfilContact';
import AccountMenu from './AccountMenu';
import ProfilActivity from './ProfilActivity';
import ProfilInformation from './ProfilInformation';

class AccountPage  extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userData : [
                {
                    id : "",
                    firstname : "blblblbl",
                    lastname : "",
                    email : "",
                    birthDate : "",
                    sexe : "",
                    city : "",
                    phoneNumber : "",
                    departureAirport : "",
                    description : "",
                    avatarPath : "",
                }
            ]
        }
    }

    componentDidMount(){
        //call api
    }
    
    render()
    {
        const userAvatarPath = this.state.userData.map(value => value.avatarPath)

        return(
            <section id="user-profile">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4 col-md-3">
                            <div class="agent-box-card grey">
                                <div class="image-content">
                                    <div class="image image-fill">
                                        <img alt="Image Sample" src="http://placehold.it/512/bbbbbb/ffffff"/>
                                    </div>
                                </div>
                                <div class="info-agent">
                                    <ProfilPicture imagePath={userAvatarPath} />	
                                    <ProfilContact />				
                                </div>
                            </div>
                            <br />
                            <AccountMenu />
                        </div>
                        <div class="col-sm-8 col-md-9">

                            <div class="row">
                                <ProfilInformation userInfo={this.state.userData} />
                                <ProfilActivity />
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default withBackaccessContext(AccountPage);