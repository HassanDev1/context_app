import React from 'react';
import NavBar from './components/navbar';
import BookList from './components/booklist';
import ThemeContextProvider from './contexts/themcontext';



function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
      <NavBar/>
      <BookList/>
    </ThemeContextProvider>
   
    </div>
  );
}

export default App;
