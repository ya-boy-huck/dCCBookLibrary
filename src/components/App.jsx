import React, { Component } from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';

class App extends Component {
    constructor(props){
        super(props);
        this.books = [
           {title: "The Hobbit", author: 'J.R.R Tolkien'},
           {title: "1984", author: 'George Orwell'},
           {title: "The Handmaid's Tale", author: 'Margaret Atwood'}
        ];
        this.state = {
            bookNumber: 0
        };
    }
    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className="row">
                <div className="col-md-4">
                    {/*Button previous*/}
                </div>
                <div className="col-md-4">
                    {/*Display Book*/}
                    <h1>{this.books[this.state.bookNumber].title}</h1>
                    <h4>{this.books[this.state.bookNumber].author}</h4>
                </div>
                <div className="col-md-4">
                    {/*Button next*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;