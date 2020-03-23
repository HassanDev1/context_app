import React from 'react';
import NavBar from './components/navbar';
import BookList from './components/booklist';
import ThemeContextProvider from './contexts/themcontext';
import ToggleTheme from './components/togglebutton';



function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
      <NavBar/>
      <BookList/>
      <ToggleTheme/>
    </ThemeContextProvider>
   
    </div>
  );
}

export default App;
