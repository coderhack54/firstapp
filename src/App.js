import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Signup from "./components/Signup";
import Header from "./components/Header";
import EventHandling from "./components/EventHandling";
import PracticeEvents from "./components/PracticeEvents";
import TypeSpeed from "./components/TypeSpeed"
import Cardlogin from "./components/Cardlogin";
import Gallery from "./components/Gallery";
import ProductList from "./components/ProductList";
import FlipKart from "./components/FlipKart";
import Amazon from "./Amazon";
import Flexbox from "./components/Flexbox";
import Chat from "./components/Chat";
import UsingMaterial from "./components/UsingMaterial";
import MemeCreator from "./components/MemeCreator";
import UserCredential from "./components/UserCredential";
import toast, { Toaster } from 'react-hot-toast';


import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import ManageUsers from "./components/ManageUsers";
import { UserProvider } from "./UserContext";
import CartDetails from "./components/CartDetails";


function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  const theme1=createTheme({
    palette: {
      mode: "light",
      // primary:{
        // main:"rgb(10 2 0 50)",
      // },
      error: {
        main:"rgb(148 63 63)",
      },
    },
  })
  const theme2=createTheme({
    palette: {
      mode: "dark",},
  });

  const cart = JSON.parse(sessionStorage.getItem("cart"));
  return (
    <div>
      <UserProvider initCart={cart ? cart : []}>

      <ThemeProvider theme={darkTheme ? theme2 : theme1}>

      <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false}/> 

      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />   
         
      {/* passing the props */}
        <Routes>
         <Route element={<Home />} path="home" />
         <Route element={<Login />} path="login" />
         <Route element={<Cardlogin />} path="loginCard" />
         <Route element={<Signup />} path="signup" />

         <Route element={<NotFound />} path="notfound" />
         <Route element={<EventHandling />} path="eventhandling" />
         <Route element={<PracticeEvents />} path="practice" />
         <Route element={<TypeSpeed />} path="typing"></Route>
         <Route element={<Gallery /> } path="gallery"></Route>
         <Route element={<ProductList />} path="list"></Route>
         <Route element={<FlipKart />} path="flipkart"></Route>
         <Route element={<Amazon />} path="amazon"></Route>
         <Route element={<Flexbox />} path="flexbox"></Route>
         <Route element={<Chat />} path="chat"></Route>
         <Route element={<UsingMaterial />} path="material"></Route>
         <Route element={<MemeCreator/>} path="meme"></Route>
         <Route element={<UserCredential/>} path="userdata"></Route>
         <Route element={<ManageUsers/>} path="manage"></Route>
         <Route element={<CartDetails/>} path="cart"></Route>


          <Route element={<Navigate to="/login" />} path="/" />
          <Route element={<Navigate to="/notfound" />} path="*" />

        </Routes>
      </BrowserRouter>
      </ThemeProvider>
      </UserProvider>
        
        </div>
        );
      }


export default App;

      // <Navigate from="/" to ="/home" />