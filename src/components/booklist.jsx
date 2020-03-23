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
                    <div className="book_list" style={{background:theme.bg,color:theme.syntax}}>
                        <ul>
                            <li>Once upon a time</li>
                            <li>Pride and Prejudice</li>
                            <li>The Sun Also Raises</li>
                        </ul>
                    </div>
                )
            }}

            </ThemeContext.Consumer>
        );
    }
}

export default BookList;