import React, { Component } from 'react';
import {ThemeContext} from '../contexts/themcontext'

class NavBar extends Component {
    
    render() { 
        
        return (  
            <ThemeContext.Consumer >{(context)=>{
                const{isLightTheme,light,dark} = context;
                const theme = isLightTheme?light:dark;
                return(
                    
                    <nav  style={{background:theme.bg,color:theme.syntax}}>
                        <h1>Books</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>

                )
            }
               
                }
                
            </ThemeContext.Consumer>
        );
    }
}
 
export default NavBar;