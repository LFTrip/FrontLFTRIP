import React, {Component} from 'react';

export default class TripDetail extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }


    render()
    {
        return(
            <section id="property-content">

                <div class="container">
                    <div class="row">
                        <div class="col-md-9">
                            

                            <div class="row">
                                <div class="col-md-4">

                                    <div class="section-title line-style">
                                        <h3 class="title">Rating</h3>
                                    </div>

                                    <ul class="rating">
                                        <li class="value">
                                            <span class="name">Exellent</span>
                                            <span class="graphic"><span class="percent" style={{width:" 88%"}}></span></span>
                                            <span class="count">1231</span>
                                        </li>
                                        <li class="value">
                                            <span class="name">Very Good</span>
                                            <span class="graphic"><span class="percent" style={{width: "5%"}}></span></span>
                                            <span class="count">76</span>
                                        </li>
                                        <li class="value">
                                            <span class="name">Average</span>
                                            <span class="graphic"><span class="percent" style={{width: "4%"}}></span></span>
                                            <span class="count">40</span>
                                        </li>
                                        <li class="value">
                                            <span class="name">Poor</span>
                                            <span class="graphic"><span class="percent" style={{width: "2%"}}></span></span>
                                            <span class="count">13</span>
                                        </li>
                                        <li class="value">
                                            <span class="name">Terrible</span>
                                            <span class="graphic"><span class="percent" style={{width: "1%"}}></span></span>
                                            <span class="count">7</span>
                                        </li>
                                    </ul>

                                    <div class="section-title line-style">
                                        <h3 class="title">Mortgage Calculate</h3>
                                    </div>
                                    <div class="mortgage-calculator-box">
                                        <form method="post" role="form">
                                            <div class="form-group">
                                                <label>Sale price ($)</label>
                                                <input type="text" id="mc-price" class="form-control" placeholder="es: 200000" />
                                            </div>
                                            <div class="form-group">
                                                <label>Down payment (%)</label>
                                                <input type="text" id="mc-down" class="form-control" placeholder="es: 5" />
                                            </div>
                                            <div class="form-group">
                                                <label>Interest Rate (%)</label>
                                                <input type="text" id="mc-rate" class="form-control" placeholder="es: 6" />
                                            </div>
                                            <div class="form-group">
                                                <label>Term (years)</label>
                                                <input type="text" id="mc-term" class="form-control" placeholder="es: 20" />
                                            </div>
                                            <button id="mortgage-calc" class="btn btn-reverse" type="button">Calculate</button>
                                        </form>
                                        <div class="result-calc" id="mc-payment">$ 0,00</div>
                                    </div>

                                    <div class="section-title line-style">
                                        <h3 class="title">Feedback</h3>
                                    </div>
                                    <div class="feedback">
                                        <div class="user-feedback">
                                            <span class="name">Pinco Pallino</span>
                                            <span class="text">Lorem ipsum dolor sit amet, consectetur ats adipiscing elit justo.</span>
                                            <span class="vote">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star-o"></i>
                                            </span>
                                        </div>
                                        <div class="user-feedback">
                                            <span class="name">Pinco Pallino</span>
                                            <span class="text">Lorem ipsum dolor sit amet, consectetur ats adipiscing elit justo.</span>
                                            <span class="vote">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </span>
                                        </div>
                                        <div class="user-feedback">
                                            <span class="name">Pinco Pallino</span>
                                            <span class="text">Lorem ipsum dolor sit amet, consectetur ats adipiscing elit justo.</span>
                                            <span class="vote">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star-o"></i>
                                                <i class="fa fa-star-o"></i>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-8">

                                    <div class="section-title line-style">
                                        <h3 class="title">Description</h3>
                                    </div>
                                    <div class="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricieseleifend faucibus. Nunc a tincidunt elit. Duis ornare dui ut magna aliquet ullamcorper. Duis pharetra pellentesque arcu, vitae placerat ligula luctus sed. Nam cursus diam odio, a condimentum nulla imperdiet a.<br /><br />

                                        <img src="http://placehold.it/560x270/bbbbbb/ffffff" class="img-responsive" alt="project image" /><br />
                                        
                                        <em>Mauris dui sapien, fermentum at pulvinar non, rhoncus non est. Sed viverra turpis eget auctor consequat. Quisque sit amet varius ligula. Donec non ullamcorper orci, ac pellentesque lectus. Nam convallis dolor eu tincidunt pharetra.</em><br /><br />
                                        
                                        Etiam quis tortor pharetra, elementum ante atper pretium. Nam convallis dolor eu tincidunt pharetra.
                                    </div>

                                    <div class="section-title line-style line-style">
                                        <h3 class="title">Property details</h3>
                                    </div>
                                    <div class="details">
                                        <div class="row">
                                            <div class="col-sm-4 col-xs-6">
                                                <span class="detail"><i class="fa fa-square-o"></i> attic</span>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <span class="detail"><i class="fa fa-square-o"></i> gas heat</span>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <span class="detail"><i class="fa fa-square-o"></i> balcony</span>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <span class="detail"><i class="fa fa-square"></i> wine cellar</span>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <span class="detail"><i class="fa fa-square"></i> basketball court</span>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <span class="detail"><i class="fa fa-square-o"></i> trash compactors</span>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <span class="detail"><i class="fa fa-square-o"></i> fireplace</span>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <span class="detail"><i class="fa fa-square"></i> pool</span>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <span class="detail"><i class="fa fa-square"></i> lake view</span>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <span class="detail"><i class="fa fa-square-o"></i> solar Heat</span>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <span class="detail"><i class="fa fa-square-o"></i> separate Shower</span>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <span class="detail"><i class="fa fa-square-o"></i> wet bar</span>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <span class="detail"><i class="fa fa-square"></i> remodeled</span>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <span class="detail"><i class="fa fa-square"></i> skylights</span>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <span class="detail"><i class="fa fa-square-o"></i> stone Surfaces</span>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <span class="detail"><i class="fa fa-square"></i> golf course</span>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <span class="detail"><i class="fa fa-square"></i> health club</span>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <span class="detail"><i class="fa fa-square-o"></i> backyard</span>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <span class="detail"><i class="fa fa-square-o"></i> pet allowed</span>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <span class="detail"><i class="fa fa-square-o"></i> office/den</span>
                                            </div>
                                            <div class="col-sm-4 col-xs-6">
                                                <span class="detail"><i class="fa fa-square-o"></i> laundry</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="section-title line-style">
                                        <h3 class="title">Find this property on map</h3>
                                    </div>
                                    <div class="map-container" id="map-canvas"></div>

                                </div>
                            </div>


                        </div>
                        <div class="col-md-3">

                            <div class="agent-box-card grey hidden-xs hidden-sm">
                                <div class="image-content">
                                   						
                                </div>
                                <div class="info-agent">
                                    <span class="name">Diane Hayes</span>
                                    <div class="text">embarrassing hidden in the middle of tex generators on the tend to repeat predefined chunks as necessary, making this the first true </div>
                                    <ul class="contact">
                                        <li><a class="icon" href="#"><i class="fa fa-facebook"></i></a></li>
                                        <li><a class="icon" href="#"><i class="fa fa-google-plus"></i></a></li>
                                        <li><a class="icon" href="#"><i class="fa fa-twitter"></i></a></li>
                                        <li><a class="icon" href="#"><i class="fa fa-envelope-o"></i></a></li>
                                        <li><a class="icon" href="agent-detail.html"><i class="fa fa-info-circle"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="contact-agent">
                                <form method="post" action="contact.php" role="form" data-toggle="validator">
                                    <div class="form-group">
                                        <input type="text" placeholder="Your Name *" class="form-control" name="name" id="name" required/>
                                    </div>
                                    <div class="form-group">
                                        <input type="email" placeholder="Your Email *" class="form-control" name="email" id="email" required/>
                                    </div>
                                    <div class="form-group">
                                        <textarea placeholder="Message *" rows="5" class="form-control" name="text-message" id="text-message" required> name="text-message"</textarea>
                                    </div> 
                                    <button class="btn btn-default" type="submit">Send Message</button>
                                </form>					
                            </div>

                            <div class="section-title line-style line-style">
                                <h3 class="title">Search</h3>
                            </div>
                            <div class="search-box-page">
                                <div class="row">
                                    <div class="col-md-12 space-div">
                                        <input class="form-control" type="text" name="keywords" id="keywords" placeholder="Keywords" />
                                    </div>
                                    <div class="col-md-12 space-div">
                                        <select class="dropdown" data-settings='{"cutOff": 5}'>
                                            <option value="">-- All Cities --</option>
                                            <option value="brixton">Brixton</option>
                                            <option value="london">London</option>
                                            <option value="middlesex">Middlesex</option>
                                            <option value="stratford">Stratford</option>
                                            <option value="wembley">Wembley</option>
                                            <option value="west-norwood">West Norwood</option>
                                            <option value="westminster">Westminster</option>
                                        </select>
                                    </div>
                                    <div class="col-md-12 space-div">
                                        <select class="dropdown" data-settings='{"cutOff": 5}'>
                                            <option value="">-- Any Purpose --</option>
                                            <option value="rent">Rent</option>
                                            <option value="sell">Sell</option>                        
                                        </select>
                                    </div>
                                    <div class="col-md-12 space-div">
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
                                    <div class="col-md-12 space-div">
                                        <select class="dropdown">
                                            <option value="">-- Any Status --</option>
                                            <option value="Normal">Normal</option>
                                            <option value="Available">Available</option>
                                            <option value="Not Available">Not Available</option>
                                            <option value="Sold">Sold</option>
                                            <option value="Open House">Open House</option>
                                        </select>
                                    </div>
                                    <div class="col-md-6 space-div">
                                        <label>Bathroom</label>
                                        <input class="form-control" type="text" name="bathroom" id="bathroom" value="3" />
                                    </div>
                                    <div class="col-md-6 space-div">
                                        <label>Bedroom</label>
                                        <input class="form-control" type="text" name="bedroom" id="bedroom" value="2" />
                                    </div>
                                    <div class="col-md-12 space-div">
                                        <label>Price</label>
                                        <div class="slider" id="price-range"></div>
                                        <div class="price-slider price">
                                            <span id="price-value-min"></span> 
                                            <span class="separator">$</span>
                                            <span id="price-value-max"></span>					
                                        </div>
                                    </div>
                                    <div class="col-md-12 space-div">
                                        <button type="button" class="btn btn-default search-button">Search Now</button>
                                    </div>
                                </div>
                            </div>

                            <div class="section-title line-style line-style">
                                <h3 class="title">Other Property</h3>
                            </div>

                            <div class="box-ajout box-grid mini">
                                <a class="hover-effect image image-fill" href="property-detail.html">
                                    <span class="cover"></span>
                                    <img alt="Sample images" src="http://placehold.it/1240x745/bbbbbb/ffffff" />
                                    <h3 class="title">59 Paterson Ave</h3>
                                </a>
                                <span class="price">$ 745.500,00</span>
                                <span class="address"><i class="fa fa-map-marker"></i> Golden Valley, MN 55427</span>
                                <span class="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by insages of Lorem Ipsum available, but the majority have suffered alteratiojected humour.</span>
                                <dl class="detail">
                                    <dt class="status">Status:</dt><dd><span>Sale</span></dd>
                                    <dt class="bed">Beds:</dt><dd><span>4</span></dd>
                                    <dt class="bath">Baths:</dt><dd><span>2</span></dd>
                                </dl>
                                <div class="footer">
                                    <a class="btn btn-default" href="property-detail.html">Read now</a>
                                </div>
                            </div>  

                            <div class="box-ajout box-grid mini">
                                <a class="hover-effect image image-fill" href="property-detail.html">
                                    <span class="cover"></span>
                                    <img alt="Sample images" src="http://placehold.it/1240x745/bbbbbb/ffffff" />
                                    <h3 class="title">403 Bloomfield St</h3>
                                </a>
                                <span class="price">$ 233.500,00</span>
                                <span class="address"><i class="fa fa-map-marker"></i> Golden Valley, MN 55427</span>
                                <span class="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by insages of Lorem Ipsum available, but the majority have suffered alteratiojected humour.</span>
                                <dl class="detail">
                                    <dt class="status">Status:</dt><dd><span>Sale</span></dd>
                                    <dt class="bed">Beds:</dt><dd><span>2</span></dd>
                                    <dt class="bath">Baths:</dt><dd><span>1</span></dd>
                                </dl>
                                <div class="footer">
                                    <a class="btn btn-default" href="property-detail.html">Read now</a>
                                </div>
                            </div>  

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}