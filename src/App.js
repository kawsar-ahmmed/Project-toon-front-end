import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Home from './components/Home/Home';
import AddUser from './components/AddUser/AddUser';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/user/add' element={<AddUser></AddUser>}></Route>
    </Routes>
  );
}

export default App;
