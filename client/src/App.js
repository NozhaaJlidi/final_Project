import './App.css';
import { Route, Routes,useNavigate } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout, userCurrent } from './redux/userSlice';


import Home from './pages/Home';
import AddVoyage from './components/voyages/dashboard/AddVoyage';
import CardVoyage from './components/voyages/CardVoyage';
import { getAllVoyages } from './redux/voyageSlice';
import ListVoyages from './components/voyages/ListVoyages';
import About from './components/About';
import Discover from './components/voyages/Discover';

function App() {
  const isAuth = localStorage.getItem('token');
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    //si l'utilisateur est connecter 
    if (isAuth){
      dispatch(userCurrent());
     }
     dispatch (getAllVoyages());
     },[dispatch])

  return (
    <div className="App">
      <div>{isAuth? <button onClick={() => {dispatch(logout())
      navigate("/")}
      }>
    Logout</button>: null}</div>
      <Routes>
      <Route exact path='/register' element={<Register/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route path='/addVoyage' element={<AddVoyage/>}/>
        <Route path='/list' element={<ListVoyages/>}/>
        <Route path='/discover' element={<Discover/>}/>

      </Routes>
    </div>
  );
}

export default App;
