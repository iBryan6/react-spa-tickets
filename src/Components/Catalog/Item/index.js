import React, { Fragment }from 'react'
import DocumentTitle from 'react-document-title'
import {Link} from 'react-router-dom'


const ItemComponent = ({ id, artist, image, genre,description,price, numRows, AddtoCart }) =>
<Fragment>
    {/*TITLE*/}
    <DocumentTitle title={artist +" Ticket Detail"}></DocumentTitle>

    {/*HEADER*/}
    <div className="sticky-top sticky-nav">
            <div className="row text-center">
                <div className="col-md title">
                    <h1>{artist +" Ticket Detail"}</h1>
                    <Link to="/"><kbd><i className="fas fa-chevron-left"></i> GO BACK</kbd></Link>
                </div>
                </div>
            <div className="row">
                <div className="offset-md-10">
                    <Link to="/cart"><button type="button" className="btn btn-outline-dark">{numRows} Items in the Cart <i className="fas fa-shopping-cart"></i></button></Link>
                </div>
            </div><br/>
    </div>

    {/*BODY*/}
    <div className="container text-center">
        <div className="card mb-4 box-shadow">
            <div className="card-header">
                <h3 className="my-0 font-weight-normal">{artist}</h3>
            </div>
            <div className="card-body">
                <img src={image} alt={"Logo of " + artist}></img><br/><br/>
                <h1 className="card-title pricing-card-title">${price}</h1>
                <small className="text-muted">{genre}</small><br/><br/>
                <p className="text-justify card-text">{description}</p>
                <button type="button" onClick={()=>AddtoCart(id,artist,1,price)} className="btn btn-lg btn-block btn-outline-dark">Add to Cart</button>
            </div>
        </div>
    </div>
</Fragment>
export default ItemComponent