import React from 'react';

class TripList extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div class="container">
                    <div class="list-box-title">
                        <span><i class="icon fa fa-plus-square"></i>Recent Listed</span>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="box-ajout box-home enlever" >
                                <a class="hover-effect image image-fill" href="property-detail.html">
                                    <span class="cover"></span>
                                    <img alt="Sample images" src="http://placehold.it/1240x745/bbbbbb/ffffff" />
                                    <h3 class="title">Japon</h3>
                                </a>
                                <span class="price">Budget : $ 536.500,00</span>
                                <span class="address"><i class="fa fa-map-marker"></i> Hoboken, NJ 07030</span>
                                <span class="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</span>
                                <div class="detail">
                                    <dt class="status">Status:</dt><dd><span>road trip</span></dd>
                                    <dt class="area">Area:</dt><dd><span>Country</span></dd>
                                    <dt class="bed">Beds:</dt><dd><span>3</span></dd>
                                    <dt class="bath">People:</dt><dd><span>3</span></dd>
                                </div>
                                <div class="footer">
                                    <a class="btn btn-reverse" href="property-detail.html">Read now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="box-ajout box-home">
                                <a class="hover-effect image image-fill" href="property-detail.html">
                                    <span class="cover"></span>
                                    <img alt="Sample images" src="http://placehold.it/1240x745/bbbbbb/ffffff" />
                                    <h3 class="title">560 Marshall Dr</h3>
                                </a>
                                <span class="price">$ 709.000,00</span>
                                <span class="address"><i class="fa fa-map-marker"></i> Hoboken, NJ 07056</span>
                                <span class="description">Lorem Ipsum available, but the majority have suffered There are many variations of passages by injected humour.</span>
                                <div class="detail">
                                    <dt class="status">Status:</dt><dd><span>In city</span></dd>
                                    <dt class="area">Area:</dt><dd><span>City</span></dd>
                                    <dt class="bed">Beds:</dt><dd><span>4</span></dd>
                                    <dt class="bath">People:</dt><dd><span>12</span></dd>
                                </div>
                                <div class="footer">
                                    <a class="btn btn-reverse" href="property-detail.html">Read now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="box-ajout box-home enlever" >
                                <a class="hover-effect image image-fill" href="property-detail.html">
                                    <span class="cover"></span>
                                    <img alt="Sample images" src="http://placehold.it/1240x745/bbbbbb/ffffff" />
                                    <h3 class="title">USA</h3>
                                </a>
                                <span class="price">$ 663.500,00</span>
                                <span class="address"><i class="fa fa-map-marker"></i> USA</span>
                                <span class="description">Nulla condimentum neque nulla. Sed at ornare lacus, id euismod felis. Aliquam et vulputate tortor. Nunc gravida nunc sed mi bibendum accumsan.</span>
                                <div class="detail">
                                    <dt class="status">Status:</dt><dd><span>Road trip</span></dd>
                                    <dt class="area">Area:</dt><dd><span>Country</span></dd>
                                    <dt class="bed">Beds:</dt><dd><span>9</span></dd>
                                    <dt class="bath">People:</dt><dd><span>12</span></dd>
                                </div>
                                <div class="footer">
                                    <a class="btn btn-reverse" href="property-detail.html">Read now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
      }
}

export default TripList;