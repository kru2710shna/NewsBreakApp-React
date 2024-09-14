import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount(){ 
        this.setState({loading: true});
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=93e1ffea8d2444fa8d9fa45daa690004&page=1&pageSize=20";
        let data = await fetch(url);
        
        // Log the entire response for debugging
        if (!data.ok) {
            console.error("API response error:", data.status, data.statusText);
        }
    
        let parsedData = await data.json();
        console.log(parsedData); 
    
        if (parsedData.status === "ok" && parsedData.totalResults > 0) {
            this.setState({
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false
            });
        } else {
            console.error("No articles available or other issue", parsedData);
            this.setState({
                articles: [],
                loading: false
            });
        }
    }

    handlePrevClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=93e1ffea8d2444fa8d9fa45daa690004&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })

    }

    handleNextClick = async () => {
        console.log("Next");
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=93e1ffea8d2444fa8d9fa45daa690004&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }

    render() {
        return (
            <div className="container my-3">
                <h1>NewsMonkey - Top Headlines</h1>
                {this.state.loading && <h2>Loading...</h2>} {/* Show loading while fetching */}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : "No Title"}
                                description={element.description ? element.description : "No Description"}
                                imageUrl={element.urlToImage}
                                newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News;