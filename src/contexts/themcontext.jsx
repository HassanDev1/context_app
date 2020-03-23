import React, { Component,createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme:true,
        light:{syntax:'#0a0909',ui:'#b5b1b1',bg:'#617ded'},
        dark:{syntax:'#edf4f2',  ui:'#0a0909',   bg:'#999191'}

     }
    render() { 
        return ( 
            <ThemeContext.Provider  value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
         );
    }
}
 
export default ThemeContextProvider;