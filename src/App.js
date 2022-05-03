import { BrowserRouter, Routes, Route, Navigate, } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Signup from "./components/Signup";
import NewSignup from "./components/NewSignup";
import Header from "./components/Header";
import EventHandling from "./components/EventHandling";
import PracticeEvents from "./components/PracticeEvents";
import TypeSpeed from "./components/TypeSpeed"
import Cardlogin from "./components/Cardlogin";
import Gallery from "./components/Gallery";
import ProductList from "./components/ProductList";
import FlipKart from "./components/FlipKart";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Amazon from "./Amazon";
import Flexbox from "./components/Flexbox";
import Chat from "./components/Chat";

function App() {
  const [darkTheme, setDarkTheme] = useState(true)

  const theme1=createTheme({
    palette: {
      mode: "light",
      primary:{
        main:"rgb(10 2 0 50)",
      },
      error: {
        main:"rgb(148 63 63)",
      },
    },
  })
  const theme2=createTheme({
    palette: {
      mode: "dark",},
  })
  return (
    <div>
      <ThemeProvider theme={darkTheme ? theme2 : theme1}>

      <BrowserRouter>

      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />       
      {/* passing the props */}
        <Routes>
         <Route element={<Home></Home>} path="home" />
         <Route element={<Login></Login>} path="login" />
         <Route element={<Cardlogin></Cardlogin>} path="loginCard" />

         <Route element={<Signup></Signup>} path="signup" />

         <Route element={<NewSignup></NewSignup>} path="newsignup" />

         <Route element={<NotFound></NotFound>} path="notfound" />
         <Route element={<EventHandling></EventHandling>} path="eventhandling" />
         <Route element={<PracticeEvents></PracticeEvents>} path="practice" />
         <Route element={<TypeSpeed></TypeSpeed>} path="typing"></Route>
         <Route element={<Gallery></Gallery>} path="gallery"></Route>
         <Route element={<ProductList></ProductList>} path="list"></Route>
         <Route element={<FlipKart></FlipKart>} path="flipkart"></Route>
         <Route element={<Amazon></Amazon>} path="amazon"></Route>
         <Route element={<Flexbox></Flexbox>} path="flexbox"></Route>
         <Route element={<Chat></Chat>} path="chat"></Route>


          <Route element={<Navigate to="/login" />} path="/" />
          <Route element={<Navigate to="/notfound" />} path="*" />

        </Routes>
      </BrowserRouter>
      </ThemeProvider>
        
        </div>
        );
      }

export default App;

      // <Navigate from="/" to ="/home" />