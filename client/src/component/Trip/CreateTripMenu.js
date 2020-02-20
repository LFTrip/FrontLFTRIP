import React from 'react';

class CreateTripMenu extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div class="col-sm-3 col-md-3" id="block-menu-content">
                    <ul class="block-menu" data-spy="affix" data-offset-top="500" data-offset-bottom="400">
                        <li><a class="faq-button active" href="#basic"><i class="icon fa fa-check-square-o"></i>Basic Information</a></li>
                        <li><a class="faq-button" href="#summary"><i class="icon fa fa-th-list"></i> Summary</a></li>
                        <li><a class="faq-button" href="#images"><i class="icon fa fa-picture-o"></i> Images</a></li>
                        <li><a class="faq-button" href="#map"><i class="icon fa fa-map-marker"></i>Place on Map</a></li>
                    </ul>
                </div>
            </React.Fragment>
        );
      }
}

export default CreateTripMenu;