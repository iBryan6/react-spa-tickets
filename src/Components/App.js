import React, { Component, Fragment} from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import Catalog from './Catalog'
import Item from './Catalog/Item'
import Cart from './Cart'

//HOME
function Homebody (){
    return (
        <div className="container text-center">
        <DocumentTitle title='Home'></DocumentTitle>
            <Link to="/catalog" className="text-center">CLICK ME TO CONTINUE</Link>
        </div>
    )
}

class App extends Component {
    /*Constructor*/
    constructor(props){
        super(props)
        this.state ={
            tickets: [],
            cart:[]
        }
    }

    /*Fetch Backend data*/
    async componentDidMount(){
        const tickets = await (await fetch('http://localhost:3004/tickets')).json()
        this.setState({tickets})
        const cart = await (await fetch('http://localhost:3004/cart')).json()
        this.setState({cart})
    }

    render() {
        const {tickets} = this.state
        const {cart} = this.state

        /*Page*/
        return <BrowserRouter>
            <Fragment>
                {/*HEADER*/}
                <div className="sticky-top sticky-nav">
                    <div className="row text-center">
                        <div className="col-md title">
                            <Link to="/catalog"><h1>Concert Tickets</h1></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="offset-md-10">
                         <Link to="/cart"><button type="button" className="btn btn-outline-dark">5 Items in the Cart <i className="fas fa-shopping-cart"></i></button></Link>
                        </div>
                    </div><br/>
                </div>

                {/*HOME*/}
                <Route exact path="/" component={Homebody} />

                {/*CATALOG*/}
                <div className="card-columns row">
                    <Route exact path="/catalog" render = {
                        props => <Catalog {...props} tickets={tickets} />
                    }/>
                </div>

                {/*ITEM*/}
                <Route exact path={`/catalog/:catalogId`} render = {
                        props => <Item {...props} {...tickets.find(item => item.id === props.match.params.catalogId)} />
                    }/>
                
                {/*CART*/}
                <Route exact path={`/cart`} render = {
                        props => <Cart {...props} cart={cart}/>
                    }/>
            </Fragment>
        </BrowserRouter>
    }
}

export default App
