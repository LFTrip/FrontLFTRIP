import React from 'react';

export default class ProfilActivity extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div class="col-md-5">
                    <div class="section-title line-style no-margin space-form">
                        <h3 class="title">Activity Log</h3>
                    </div>
                    <div class="logs">
                        <span class="data"><span>March 14, 2015</span></span>
                        <div class="log">
                            <span class="image image-fill"><img src="http://placehold.it/60/bbbbbb/ffffff" alt="Image Sample" /></span>
                            <span class="text">
                                <strong>Curabitur</strong> at condimentum arcu, ac viverra erat. Curabitur nec cursus erat, in lacinia libero. Etiam elementum et dui sit amet ornare. Proin a risus ullamcorper, aliquet lorem non, ornare purus.
                                <img src="http://placehold.it/116x70/bbbbbb/ffffff" alt="Image Sample" />
                                <img src="http://placehold.it/116x70/bbbbbb/ffffff" alt="Image Sample" />
                            </span>
                            <span class="data">Today 12:30</span>
                            <a href="#"><i class="fa fa-times"></i></a>
                        </div> 
                        <div class="log">
                            <span class="image image-fill"><img src="http://placehold.it/60/bbbbbb/ffffff" alt="Image Sample" /></span>
                            <span class="text"><strong>Suspendisse</strong>  porttitor, tortor nec aliquet dignissim, urna sapien interdum sapien</span>
                            <span class="data">Today 10:16</span>
                            <a href="#"><i class="fa fa-times"></i></a>
                        </div> 
                        <span class="data"><span>December 13, 2014</span></span>
                        <div class="log">
                            <span class="image image-fill"><img src="http://placehold.it/60/bbbbbb/ffffff" alt="Image Sample" /></span>
                            <span class="text"><strong>Donec</strong> porta, justo eget fringilla gravida, erat risus pretium eros</span>
                            <span class="data">Yesterday 22:42</span>
                            <a href="#"><i class="fa fa-times"></i></a>
                        </div> 
                        <div class="log">
                            <span class="image image-fill"><img src="http://placehold.it/60/bbbbbb/ffffff" alt="Image Sample" /></span>
                            <span class="text"><strong>Phasellus</strong> rutrum nunc sed dapibus iaculis. Sed at metus et libero convallis mattis id non null.</span>
                            <span class="data">Yesterday 16:01</span>
                            <a href="#"><i class="fa fa-times"></i></a>
                        </div> 
                        <div class="log">
                            <span class="image image-fill"><img src="http://placehold.it/60/bbbbbb/ffffff" alt="Image Sample" /></span>
                            <span class="text"><strong>Donec</strong> porta, justo eget fringilla gravida, erat risus pretium eros</span>
                            <span class="data">Yesterday 22:42</span>
                            <a href="#"><i class="fa fa-times"></i></a>
                        </div> 
                        <span class="data"><span>November 30, 2014</span></span>
                        <div class="log">
                            <span class="image image-fill"><img src="http://placehold.it/60/bbbbbb/ffffff" alt="Image Sample" /></span>
                            <span class="text"><strong>Phasellus</strong> rutrum nunc sed dapibus iaculis. Sed at metus et libero convallis mattis id non null.</span>
                            <span class="data">Yesterday 16:01</span>
                            <a href="#"><i class="fa fa-times"></i></a>
                        </div> 
                        <div class="log">
                            <span class="image image-fill"><img src="http://placehold.it/60/bbbbbb/ffffff" alt="Image Sample" /></span>
                            <span class="text"><strong>Donec</strong> porta, justo eget fringilla gravida, erat risus pretium eros</span>
                            <span class="data">Yesterday 22:42</span>
                            <a href="#"><i class="fa fa-times"></i></a>
                        </div> 
                        <div class="log">
                            <span class="image image-fill"><img src="http://placehold.it/60/bbbbbb/ffffff" alt="Image Sample" /></span>
                            <span class="text"><strong>Donec</strong> porta, justo eget fringilla gravida, erat risus pretium eros</span>
                            <span class="data">Yesterday 22:42</span>
                            <a href="#"><i class="fa fa-times"></i></a>
                        </div> 
                        <div class="log">
                            <span class="image image-fill"><img src="http://placehold.it/60/bbbbbb/ffffff" alt="Image Sample" /></span>
                            <span class="text"><strong>Phasellus</strong> rutrum nunc sed dapibus iaculis. Sed at metus et libero convallis mattis id non null.</span>
                            <span class="data">Yesterday 16:01</span>
                            <a href="#"><i class="fa fa-times"></i></a>
                        </div>
                        <div class="log">
                            <span class="image image-fill"><img src="http://placehold.it/60/bbbbbb/ffffff" alt="Image Sample" /></span>
                            <span class="text"><strong>Donec</strong> porta, justo eget fringilla gravida, erat risus pretium eros</span>
                            <span class="data">Yesterday 22:42</span>
                            <a href="#"><i class="fa fa-times"></i></a>
                        </div>
                        <input type="button" class="btn btn-default button" value="Load more" />
                    </div>
                </div>
            </React.Fragment>
        );
      }
}
