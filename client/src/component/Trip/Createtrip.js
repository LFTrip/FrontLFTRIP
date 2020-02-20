import React, {Component} from 'react';

export default class Createtrip extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }


    render()
    {
        return(
            <section id="new-property">
                <div class="container">
                    <div class="row">
                        
                        <div class="col-sm-9 col-md-9">

                            <div class="info-block" id="basic">
                                <div class="section-title line-style no-margin">
                                    <h3 class="title">Basic Information</h3>
                                </div>
                                <div class="row">
                                    <div class="col-md-5 space-form">
                                        <input id="title" class="form-control" type="text" placeholder="Title" name="title"/>
                                    </div>
                                    <div class="col-md-7 space-form">
                                        <input id="address" class="form-control" type="text" placeholder="Address" name="address"/>
                                    </div>
                                    <div class="col-md-12">
                                        <textarea name="description" id="description" class="form-control description">
                            
                                            ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate augue non bibendum dapibus.
                                            Phasellus fermentum nulla non ultricies vestibulum. Curabitur dictum nisl quis condimentum tempus. 
                                            Integer et libero pellentesque, rutrum nibh in, auctor elit. Pellentesque sit amet facilisis ante,
                                            quis dictum lectus. Morbi nec dui enim. Duis consectetur tellus a dignissim sollicitudin. 
                                            Quisque interdum id nisi vitae mattis. Curabitur non tortor a arcu gravida elementum ut a nisi.
                                            Sed porta turpis in elementum vulputate.
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="info-block" id="summary">
                                <div class="section-title line-style">
                                    <h3 class="title">Summary</h3>
                                </div>

                                <div class="row">
                                    <div class="col-md-4 space-form">
                                        <div class="slider" id="price-range"></div>
                                        <div class="price-slider price">
                                            <span id="price-value-min">200   </span> 
                                            <span class="separator">$</span>
                                            <span id="price-value-max">9000</span>					
                                        </div>
                                    </div>
                                    <div class="col-md-4 space-form">
                                        <select class="dropdown" data-settings='{"cutOff": 5}'>
                                            <option value="">-- Any Purpose --</option>
                                            <option value="rent">Rent</option>
                                            <option value="sell">Sell</option>                        
                                        </select>
                                    </div>
                                    <div class="col-md-4 space-form">
                                        <select class="dropdown" data-settings='{"cutOff": 5}'>
                                            <option value="">-- Any Type --</option>
                                            <option value="apartments">Apartments</option>
                                            <option value="condos">Condos</option>
                                            <option value="duplex">Duplex</option>
                                            <option value="houses">Houses</option>
                                            <option value="offices">Offices</option>
                                            <option value="retail">Retail</option>
                                            <option value="villa">Villa</option>                        
                                        </select>
                                    </div>
                                    <div class="col-md-4 space-form">
                                        <select class="dropdown">
                                            <option value="">-- Any Status --</option>
                                            <option value="Normal">Normal</option>
                                            <option value="Available">Available</option>
                                            <option value="Not Available">Not Available</option>
                                            <option value="Sold">Sold</option>
                                            <option value="Open House">Open House</option>
                                        </select>
                                    </div>
                                    <div class="col-md-4 space-form">
                                        <input class="form-control" type="text" name="bathroom" id="bathroom" data-text="Bathroom" value="3" />
                                    </div>
                                    <div class="col-md-4 space-form">
                                        <input class="form-control" type="text" name="bedroom" id="bedroom" data-text="Bedroom" value="2" />
                                    </div>
                                    <div class="col-md-4 space-form">
                                        <input class="form-control" type="text" name="property-size" id="property-size" data-text="Size Property" value="120" />
                                    </div>
                                    <div class="col-md-4 space-form">
                                        <input id="video-source" class="form-control" type="text" placeholder="Video source ID" name="video-source"/>
                                    </div>
                                    <div class="col-md-4 space-form">
                                        <input id="periodic-price" class="form-control" type="text" placeholder="Price Label (e.g. 'per month')" name="periodic-price" />
                                    </div>
                                </div>
                            </div>
                            <div class="info-block" id="images">
                                <div class="section-title line-style">
                                    <h3 class="title">Images</h3>
                                </div>
                                <form action="./upload.php" method="post" class="dropzone"></form>
                                <span class="text">
                                    <strong>Drop files</strong> here or <strong>click</strong> to upload.<br />
                                </span>
                            </div>

                           <div class="info-block" id="map">
                                <div class="section-title line-style">
                                    <h3 class="title">Place on Map</h3>
                                </div>
                                <div id="map-canvas" style={{height: "300px"}}></div>
                                <div id="position"><i class="fa fa-map-marker"></i> Drag the pin to the location on the map</div>
                            </div>
                       </div>
                    </div>
                </div>
		    </section>
        )
    }
}