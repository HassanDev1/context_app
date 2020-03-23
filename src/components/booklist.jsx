import React, { Component } from 'react';

class BookList extends Component {
    state = {  }
    render() { 
        return (
            <div className="book_list">
                <ul>
                    <li>Once upon a time</li>
                    <li>Pride and Prejudice</li>
                    <li>The Sun Also Raises</li>
                </ul>
            </div>
         );
    }
}
 
export default BookList;