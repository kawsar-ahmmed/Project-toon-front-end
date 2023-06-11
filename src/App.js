import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AddUser from './components/AddUser/AddUser';
import Header from './components/Header/Header';

import UserUpdate from './components/UserUpdate/UserUpdate';


function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/user/add' element={<AddUser></AddUser>}></Route>
      <Route path='/update/:id' element={<UserUpdate></UserUpdate>}></Route>
    </Routes>
    </>
  );
}

export default App;
