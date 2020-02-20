import React from 'react';

class BlogList extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div class="container" id="blog">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="blog-list masonry-post">
                                <h2 class="title"><a href="blog-detail.html">Praesent moleti ipsum</a></h2>
                                <div class="image">
                                    <img class="img-responsive" alt="Image Sample" src="http://placehold.it/1280x850/bbbbbb/ffffff" />
                                    <div class="social">
                                        <span class="date">2<span>Apr</span></span>
                                        <a href="#"><i class="fa fa-heart-o"></i><span>654</span></a>
                                        <a href="#"><i class="fa fa-eye"></i><span>92435</span></a>
                                        <a href="#"><i class="fa fa-comments"></i><span>69</span></a>
                                    </div>
                                </div>
                                <div class="text">
                                    <h3 class="subtitle">Internet tend to repeat prunks.</h3>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie in ippulvinar libero enim, et finibus massa commodo vitae.
                                </div>
                                <a href="blog-detail.html" class="btn btn-default button-read">Read now</a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="blog-list masonry-post">
                                <h2 class="title"><a href="blog-detail.html">Dolor sit amet</a></h2>
                                <div class="image">
                                    <img class="img-responsive" alt="Image Sample" src="http://placehold.it/1280x850/bbbbbb/ffffff" />
                                    <div class="social">
                                        <span class="date">18<span>Mar</span></span>
                                        <a href="#"><i class="fa fa-heart-o"></i><span>654</span></a>
                                        <a href="#"><i class="fa fa-eye"></i><span>92435</span></a>
                                        <a href="#"><i class="fa fa-comments"></i><span>69</span></a>
                                    </div>
                                </div>
                                <div class="text">
                                    <h3 class="subtitle">Internet tend to redefined chunks.</h3>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie in ippulvinar libero enim, et finibus massa commodo vitae.
                                </div>
                                <a href="blog-detail-full.html" class="btn btn-default button-read">Read now</a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="blog-list masonry-post">
                                <h2 class="title"><a href="blog-detail.html">Pepeat predefined chunks</a></h2>
                                <div class="image">
                                    <img class="img-responsive" alt="Image Sample" src="http://placehold.it/1280x850/bbbbbb/ffffff" />
                                    <div class="social">
                                        <span class="date">15<span>Mar</span></span>
                                        <a href="#"><i class="fa fa-heart-o"></i><span>654</span></a>
                                        <a href="#"><i class="fa fa-eye"></i><span>92435</span></a>
                                        <a href="#"><i class="fa fa-comments"></i><span>69</span></a>
                                    </div>
                                </div>
                                <div class="text">
                                    <h3 class="subtitle">Interno repeat predefined chunks.</h3>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent molestie in ippulvinar libero enim, et finibus massa commodo vitae.
                                </div>
                                <a href="blog-detail.html" class="btn btn-default button-read">Read now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
      }
}

export default BlogList;