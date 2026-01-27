import DashBoardLayouts from "./layouts/DashBoardLayoutrs"
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter} from "react-router-dom";
import Login from "./pages/Login";

function App() {

  const [IsLoggedIn , setIsLoggedIn] = useState(false)
  return (
    <>
    <BrowserRouter>
    <Routes>
    
    {/* <Route  path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
    <Route path="/dashboard" element={ IsLoggedIn ? <DashBoardLayouts/> : <Navigate to={'/Login'}/>}>
      
      </Route> */}

        <Route path="/dashboard" element={<DashBoardLayouts/>}> </Route>

    </Routes>
   
    </BrowserRouter>
    
    </>
  )
}

export default App
