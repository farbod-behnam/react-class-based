import React from 'react';
import UserFinder from './components/UserFinder/UserFinder';
import UsersContextProvider from './context/UsersContextProvider';

function App() {
  return (
      <UsersContextProvider>
        <UserFinder />
      </UsersContextProvider>
  );
}

export default App;
