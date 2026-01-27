import SideBar from "../Components/Sidebar";
import Header from "../Components/Header";
import MainContent from "../Components/MainContent";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

function DashBoardLayouts() {
  const [showSideBar, setShowSidebBr] = useState(true);
  const [activePage, setactivePage] = useState("dashboard");
  const navigate = useNavigate()

  
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  const toggleDarkMode = () => {
    setDark(prev => !prev);
  };



  const toggleSideBar = () => {
    setShowSidebBr(!showSideBar);
  };


  const handleLogout= () =>{
    navigate("/Login")
  }

  return (
    <>
    <div className="layout">
      {showSideBar && (
        <SideBar activePage={activePage} onPagechange={setactivePage}  onLoginOut={handleLogout}/>
      )}

     <div className="main">
    <Header
        toggleSideBar={toggleSideBar}
        toggleDarkMode={toggleDarkMode}
        dark={dark}
      />
    <div className="content">
      <MainContent activePage={activePage} />
    </div>
  </div>
</div>
    
    </>
  );
}

export default DashBoardLayouts;
