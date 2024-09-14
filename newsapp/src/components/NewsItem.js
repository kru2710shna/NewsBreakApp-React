import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let {title,description, Imageurl} = this.props
    return (
      <div className='my-3'>
        <div className="card" style={{width: "5rem;"}}>
            <img src={Imageurl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/newdetail" className="btn btn-sm btn-primary">Read More</a>
        </div>
</div>
      </div>
    )
  }
}

export default NewsItem
