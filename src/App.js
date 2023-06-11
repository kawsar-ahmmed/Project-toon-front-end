import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Home from './components/Home/Home';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>
  );
}

export default App;
