import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {

    constructor(){
        super();
        this.state = {
            
        }
    }
    render() {
        return (
            <div className='container my-4'>
                <h2 className="text-center">HeadLine</h2>
                <div className="row">
                    <div className='col-md-3'>
                        <NewsItem title="myTitle" description="description"  Imageurl= ''  />
                    </div>

                    <div className='col-md-3'>
                        <NewsItem title="myTitle" description="description" />
                    </div>

                    <div className='col-md-3'>
                        <NewsItem title="myTitle" description="description" />
                    </div>

                    <div className='col-md-3'>
                        <NewsItem title="myTitle" description="description" />
                    </div>
                </div>
            </div>
        );
    }
}

export default News;
