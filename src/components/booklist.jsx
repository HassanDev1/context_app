import React, { Component } from 'react';

class BookList extends Component {
    state = {  }
    render() { 
        return (  
            <div className="book_list">
                
                <ul>
                    <li>Time to Kill</li>
                    <li>East of Eden</li>
                    <li>The Sun Also Raises</li>
                </ul>
            </div>
        );
    }
}
 
export default BookList;