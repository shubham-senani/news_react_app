import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import articles from "../sample"
export default class News extends Component {
    constructor() {
        super();
        console.log("hello I am a constructor")
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=12e246b2125b4787bf0dd8274a62478b&page=${this.state.page}&pageSize=${this.props.pageSize}`
        const data = await fetch(url);
        const parseData = await data.json();
        console.log(parseData);
        this.setState({ articles: parseData.articles, totalResults: parseData.totalResults })
    }

    handlePrevClick = async () => {

        const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=12e246b2125b4787bf0dd8274a62478b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        const data = await fetch(url);
        const parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            page: this.state.page - 1
        })

    }

    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)) {

        } else {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=12e246b2125b4787bf0dd8274a62478b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            const data = await fetch(url);
            const parseData = await data.json();
            console.log(parseData);
            this.setState({
                articles: parseData.articles,
                page: this.state.page + 1
            })
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className='py-3'><strong><i>The Daily</i></strong> -  HeadLines</h1>

                <div className="row">

                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.urlToImage}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} img={element.urlToImage} url={element.url} />
                        </div>
                    })}

                </div>
                <div className="d-flex justify-content-between container">
                    <button disabled={this.state.page <= 1} onClick={this.handlePrevClick} type='button' className="btn btn-dark">&larr; Previous</button>
                    <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNextClick} type='button' className="btn btn-dark">Next &rarr;</button>
                </div>
            </div>
        )
    }
}