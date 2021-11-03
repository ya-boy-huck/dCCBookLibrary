import React, { Component } from 'react';

class BookCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <form>
                <label>Book Name</label>
                <input />
                <label>Author</label>
                <input />
            </form>
         );
    }
}
 
export default BookCreator;