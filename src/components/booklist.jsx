import React, { Component } from 'react';
import { ThemeContext } from '../contexts/themcontext'

class BookList extends Component {
    state = {}
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                const{isLightTheme,light,dark} = context;
                const theme = isLightTheme?light:dark;

                return (
                    <div className="book_list" style={{color:theme.syntax}}>
                        <ul>
                            <li style={{background:theme.ui}}>Once upon a time</li>
                            <li style={{background:theme.ui}}>Pride and Prejudice</li>
                            <li style={{background:theme.ui}}>The Sun Also Raises</li>
                        </ul>
                    </div>
                )
            }}

            </ThemeContext.Consumer>
        );
    }
}

export default BookList;