import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title, description, img, url} = this.props;
        return (
            <>
                <div className="card my-3" style={{width: "18rem"}}>
                    <img src={img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title.slice(0,45)}..</h5>
                            <p className="card-text">{description.slice(0,88)}...</p>
                            <a rel="noreferrer" href={url} target="_blank" className="btn btn-danger px-2 py-1">Read More</a>
                        </div>
                </div>
            </>
        )
    }
}