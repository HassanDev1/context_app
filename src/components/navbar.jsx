import React, { Component } from 'react';
import { ThemeContext } from '../contexts/themcontext'
import { AuthContext } from '../contexts/authcontext';

class NavBar extends Component {

    render() {

        return (
            <AuthContext.Consumer>{(authcontext)=>{
                const{isAuth,toggleAuth} = authcontext;
                return(
                    <ThemeContext.Consumer >{(themecontext) => {
                        const { isLightTheme, light, dark } = themecontext;
                        const theme = isLightTheme ? light : dark;
                        return (
        
                            <nav style={{ background: theme.bg, color: theme.syntax }}>
                                <h1>Books</h1>
                                <div onClick={toggleAuth}>
                                    {isAuth?'Logged In':'Logged Out'}
                                </div>
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
                )

            }
                }
          
            </AuthContext.Consumer>
        );
    }
}

export default NavBar;