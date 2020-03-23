import React from 'react';
import NavBar from './components/navbar';
import BookList from './components/booklist';
import ThemeContextProvider from './contexts/themcontext';
import ToggleTheme from './components/togglebutton';
import AuthContextProvider from './contexts/authcontext';




function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeContextProvider>
          <NavBar />
          <BookList />
          <ToggleTheme />
        </ThemeContextProvider>
      </AuthContextProvider>

    </div>
  );
}

export default App;
