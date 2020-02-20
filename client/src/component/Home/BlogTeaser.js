import React from 'react';
import BlogList from './BlogList';


class BlogTeaser extends React.Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <section id="recent-news">
                    <div class="section-detail">
                        <h1>Retrouvez nos dernièrs blogs et actualités !</h1>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor, sagittis sed elementum dignissim, lobortis.</h2>		
                    </div>
                    <BlogList />
                </section>
            </React.Fragment>
        );
      }
}

export default BlogTeaser;