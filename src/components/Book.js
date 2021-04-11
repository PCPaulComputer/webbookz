/**
 * @author Paul M
 * Book component
 */

//imports
import React from 'react';
import Button from './Button';
import Card from './Card';
import photo1 from '../assets/html.png';
import photo2 from '../assets/cascadingstyle.png';
import photo3 from '../assets/javascript.png';
import photo4 from '../assets/reactjsframework.png';

class Book extends React.Component {
    /**
     * Constructor method setup the state to initial state
     */
    constructor(){
        super();
        this.state  = {
            html: 0,
            css: 0,
            js: 0,
            react: 0,
            count: 0
        }
        this.handleHtml = this.handleHtml.bind(this);
        this.handleCss = this.handleCss.bind(this);
        this.handleJs = this.handleJs.bind(this);
        this.handleReact = this.handleReact.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.initialState = this.state;
    }

    /**
     * handler methods to process the data when user selected books
     */
    handleHtml = () => {
        const { html, count } = this.state
        this.setState({
            html: html + 25,
            count: count + 1
        });
    }

    handleCss = () => {
        const { css, count } = this.state;
        this.setState({
            css: css + 30,
            count: count + 1
        });
    }

    handleJs = () => {
        const { js, count } = this.state;
        this.setState({
            js: js + 60,
            count: count + 1
        });
    }

    handleReact = () => {
        const { react, count } = this.state;
        this.setState({
            react: react + 70,
            count: count + 1
        });
    }

    handleReset = (event) => {
        event.preventDefault();
        this.setState(this.initialState);
    }

    /**
     * render method displays the outlook and the results of the subtotal 
     * and the total of the books in dollars
     */
    render(){
        const { html, css, js, react, count } = this.state;
        const subtotal = html + css + js + react;
        const total = subtotal * 1.13;  //Including tax @ 13%

        return(
            <Card>
                <div>
                    <h2>Click on the book below to calculate your total</h2>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card shadow my-4">
                                <img className="card-img-top" src={photo1} alt="html book" />
                                <div className="card-body">
                                    <h5 className="card-title">HTML Book $25</h5>
                                    <p className="card-text">Learn the structure of the website : HyperText Markup Language. Develop the knowledge of organizing proper site architecture</p>
                                    <Button color="webColor1" type="submit" onClick={this.handleHtml} className="btn btn-small">Buy</Button>
                                </div>  
                            </div>                                               
                        </div>
                        
                        <div className="col-lg-6">
                            <div className="card shadow my-4">
                                <img className="card-img-top" src={photo2} alt="css book" />
                                <div className="card-body">
                                    <h5 className="card-title">CSS Book $30</h5>
                                    <p className="card-text">Learn the styles configuration of the website : Cascading Style Sheets. Apply creativity on your website. The styles is only the limit.</p>
                                    <Button color="webColor2" type="submit" onClick={this.handleCss} className="btn btn-small">Buy</Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card shadow my-4">
                                <img className="card-img-top" src={photo3} alt="js book" />
                                <div className="card-body">
                                    <h5 className="card-title">JavaScript Book $60</h5>
                                    <p className="card-text">Learn the interactivity of the website : JavaScript. Apply logic on your website to get more interactions, animation, functionality and dynamic.</p>
                                    <Button color="webColor3" type="submit" onClick={this.handleJs} className="btn btn-small">Buy</Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">                           
                            <div className="card shadow my-4">
                                <img className="card-img-top px-0" src={photo4} alt="react book" />
                                <div className="card-body">
                                    <h5 className="card-title">React Book $70</h5>
                                    <p className="card-text">Learn the interactivity of the website : JavaScript. Apply logic on your website to get more interactions, animation, functionality and dynamic.</p>
                                <Button color="webColor4" type="submit" onClick={this.handleReact} className="btn btn-small">Buy</Button>
                                </div>
                            </div>                                              
                        </div>
                    </div>
                        
                        <div>
                            <Button color="other" type="reset" onClick={this.handleReset} >Reset</Button>
                        </div>
                        <br />
                        <div className="container-fluid border border-dark">
                            <p>Number of books selected: {count}</p>
                            <p>Subtotal: {subtotal}</p>
                            <p className="lead font-weight-bold">Total: ${total.toFixed(2)}</p>
                            <p><small>*Please note that the total price is subject to 13% HST</small></p>
                        </div>           
                        <br />
                </div>
                    
            </Card>
        );
    }
}

export default Book;
