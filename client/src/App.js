import React from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout, userCurrent } from "./JS/userSlice/userSlice";
import Profil from "./components/Profil";
import PrivateRoute from "./routes/PrivateRoute";
import { getproduct } from "./JS/ProductSlice";
import Details from "./components/Details";
import { getcommande } from "./JS/commandeSlice";
import Panier from "./components/Panier";
import Homme from './components/Home/Homme'
import Femme from './components/Home/Femme';
import Acceuil from './components/Acceuil';
import Navbarch from './components/Navbar';
import Banier from './components/Banniere/Banier';
import Promoshf from './components/Home/Promos';
import Footer from './components/Footer';
function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());

    }
    dispatch(getproduct());
    dispatch(getcommande())
    
  }, []);
  const [searchdata, setsearchdata] = useState("")
  const searchd=(x)=>{
    setsearchdata(x)
  }
  return (
    <div >
  
{/*         
        {isAuth ? (
          <button
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            Logout
          </button>
        ) : null} */}
        <Navbarch fnct={searchd}/>
          
        <Routes>
      <Route exact path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
<Route path='/' element={<Acceuil data={searchdata}/>}/>
  <Route path='/homme' element={<Homme />} />
  <Route path='/femme' element={<Femme />} />
  <Route path='/promos' element={<Promoshf  />} />
      <Route  path="/details/:id" element={<Details />}></Route>
      <Route  path="/panier" element={<Panier/>}></Route>
      <Route element={<PrivateRoute />}>
        <Route path="/profil" element={<Profil />} />
      </Route>{" "}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
