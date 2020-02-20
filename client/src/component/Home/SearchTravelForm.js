import React from 'react';

class SearchTravelForm extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <section id="property-type" class="ads-type">
                    <div class="container">
                        <div class="ads-type">
                            <div class="property-type-slide" data-navigation=".property-type-slide-nav">
                                <div class="crsl-wrap">
                                    <figure class="crsl-item">
                                        <a href="#" class="item-type icon-1" data-type="apartement">
                                            <span class="title">Apartement</span>
                                            <span class="sub-title"><strong>0</strong> PLACES FOUND</span>
                                        </a>
                                    </figure>
                                    <figure class="crsl-item">
                                        <a href="#" class="item-type icon-2" data-type="building-area">
                                            <span class="title">Building Area</span>
                                            <span class="sub-title"><strong>0</strong> PLACES FOUND</span>
                                        </a>
                                    </figure>
                                    <figure class="crsl-item">
                                        <a href="#" class="item-type icon-3" data-type="condominium">
                                            <span class="title">Condominium</span>
                                            <span class="sub-title"><strong>0</strong> PLACES FOUND</span>
                                        </a>
                                    </figure>
                                    <figure class="crsl-item">
                                        <a href="#" class="item-type icon-4" data-type="cottage">
                                            <span class="title">Cottage</span>
                                            <span class="sub-title"><strong>0</strong> PLACES FOUND</span>
                                        </a>
                                    </figure>
                                    <figure class="crsl-item">
                                        <a href="#" class="item-type icon-5" data-type="family-house">
                                            <span class="title">Family House</span>
                                            <span class="sub-title"><strong>0</strong> PLACES FOUND</span>
                                        </a>
                                    </figure>
                                    <figure class="crsl-item">
                                        <a href="#" class="item-type icon-6" data-type="single-home">
                                            <span class="title">Single Home</span>
                                            <span class="sub-title"><strong>0</strong> PLACES FOUND</span>
                                        </a>
                                    </figure>
                                </div>
                                <div class="property-type-slide-nav nav-box">
                                    <a href="#" class="previous"></a>
                                    <a href="#" class="next"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="search-box" class="no-margin">
                    <div class="container search-container fixed-map">
                        <div class="search-options">
                            <span class="botton-options"><i class="fa fa-chevron-down"></i> Show Advanced Search</span>
                            <div class="searcher">
                                <div class="row margin-div">
                                    <div class="col-sm-6 col-md-3 margin-bottom">
                                        <input class="form-control" type="text" name="keywords" id="keywords" placeholder="Keywords" />
                                    </div>
                                    <div class="col-sm-6 col-md-3">
                                        <select class="dropdown" data-settings='{"cutOff": 5}'>
                                            <option value="">-- All Country --</option>
                                            <option value="brixton">France</option>
                                            <option value="london">Japon</option>
                                            <option value="middlesex">Chine</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-6 col-md-3">
                                        <select class="dropdown" data-settings='{"cutOff": 5}'>
                                            <option value="">-- All Cities --</option>
                                            <option value="brixton">Paris</option>
                                            <option value="brixton">Brixton</option>
                                            <option value="london">London</option>
                                            <option value="middlesex">Middlesex</option>
                                            <option value="stratford">Stratford</option>
                                            <option value="wembley">Wembley</option>
                                            <option value="west-norwood">West Norwood</option>
                                            <option value="westminster">Westminster</option>
                                        </select>
                                    </div>
                                    <div class="col-sm-6 col-md-3">
                                        <select class="dropdown" data-settings='{"cutOff": 5}'>
                                            <option value="">-- Type de logement --</option>
                                            <option value="apartments">Apartments</option>
                                            <option value="condos">Condos</option>
                                            <option value="duplex">Duplex</option>
                                            <option value="houses">Houses</option>
                                            <option value="offices">Offices</option>
                                            <option value="retail">Retail</option>
                                            <option value="villa">Villa</option>                        
                                        </select>
                                    </div>
                                </div>
                                <div class="row margin-div sercher-margin-bottom">
                                    <div class="col-sm-6 col-md-3">
                                        <span id="label-budget" data-text="Budget"></span>
                                        <input class="form-control" type="text" name="keywords_budget" id="keywords_budget" placeholder="Budget" />

                                    </div>
                                    <div class="col-sm-6 col-md-2 margin-bottom">
                                        <span id="label-bathroom" data-text="Personnes"></span>
                                        <input class="form-control" type="text" name="bathroom" id="bathroom" value="3" />
                                    </div>
                                    <div class="col-sm-12 col-md-3 margin-bottom">
                                        <div class="slider noUi-target noUi-ltr noUi-horizontal noUi-background" id="price-range">
                                            <div class="noUi-base">
                                                <div class="noUi-origin noUi-connect noUi-dragable" style={{left: "19.3548%"}}>
                                                    <div class="noUi-handle noUi-handle-lower"></div>
                                                </div>
                                                <div class="noUi-origin noUi-background" style={{left: "72.5806%"}}>
                                                    <div class="noUi-handle noUi-handle-upper"></div></div></div></div>
                                        <div class="price-slider price">
                                            <span id="price-value-min">250000.00</span> 
                                            <span class="separator">$</span>
                                            <span id="price-value-max">745000.00</span>					
                                        </div>
                                    </div>
                                </div>
                                <div class="row filter hide-filter hidden-xs hidden-sm">
                                    <div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Swimming Pool" checked/></div>
                                    <div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Fire Extinguisher" checked/></div>
                                    <div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Close to School"/></div>
                                    <div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Air Conditioning" checked/></div>
                                    <div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Built-in Kitchen" checked/></div>
                                    <div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Business District"/></div>
                                    <div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Pet Allowed" checked/></div>
                                    <div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Health Club"/></div>
                                    <div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Balcony" checked/></div>
                                    <div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Dryer"/></div>
                                    <div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Solar Heat" checked/></div>
                                    <div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Wine Cellar" checked/></div>
                                    <div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Hospital"/></div>
                                    <div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Sport Club" checked/></div>
                                    <div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Golf Course"/></div>
                                    <div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Lake View"/></div>
                                    <div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Backyard" checked/></div>
                                    <div class="col-xs-6 col-sm-4 col-md-3"><input class="labelauty" type="checkbox" data-labelauty="Laundry" checked/></div>
                                </div>
                                <div class="margin-div footer">
                                    <button type="button" class="btn btn-default more-button hidden-xs hidden-sm">More filters</button>
                                    <button type="button" class="btn btn-default search-button">advanced search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
      }
}

export default SearchTravelForm;