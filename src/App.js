import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/userList/UserList';
import UserDetails from './components/userDetails/UserDetails';
import UserEdit from './components/editUser/UserEdit';
import UserCreate from './components/createUser/UserCreate';
import AppContainer from './App.style';


function App() {
  return (
<AppContainer>
<Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/user/edit/:id" element={<UserEdit />} />
        <Route path="/user/create" element={<UserCreate />} />
      </Routes>
    </Router>
</AppContainer>
  );
}

export default App;
