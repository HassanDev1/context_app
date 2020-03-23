import React, { Component } from 'react';
import {ThemeContext} from '../contexts/themcontext'

class ToggleTheme extends Component {
    state = {  }
    render() { 
        return ( 
            <ThemeContext.Consumer>{(context)=>{
                const{toggleButton} = context;
                return(
                    <button onClick={toggleButton}>
                    change theme
                </button>

                )
            }
                }

            </ThemeContext.Consumer>
           
         );
    }
}
 
export default ToggleTheme;