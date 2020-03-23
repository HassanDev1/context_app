import React,{Component} from 'react';

class NavBar extends Component {
    
    render() { 
        return ( 
           <nav>
                <h1>Books</h1>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                       About 
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
           </nav>
         );
    }
}
 
export default NavBar;