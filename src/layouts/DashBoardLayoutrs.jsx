import SideBar from "../Components/Sidebar";
import Header from "../Components/Header";
import MainContent from "../Components/MainContent";
import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { prodectData,orderData } from "../data/data";

function DashBoardLayouts({ setIsLoggedIn }) {
  const [showSideBar, setShowSidebBr] = useState(true);
  const [activePage, setactivePage] = useState("dashboard");
  const navigate = useNavigate();

  //Local Storage prodects
  const [prodects, setProdects] = useState(() => {
    const SavedProdects = localStorage.getItem("prodects");
    return SavedProdects ? JSON.parse(SavedProdects) : prodectData;
  });

  useEffect(() => {
    localStorage.setItem("prodects", JSON.stringify(prodects));
  }, [prodects]);

   const [orders, setOrders] = useState(() => {
    const SavedOrders = localStorage.getItem("orders");
    return SavedOrders ? JSON.parse(SavedOrders) : orderData;
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);


  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  const toggleDarkMode = () => {
    setDark((prev) => !prev);
  };

  const toggleSideBar = () => {
    setShowSidebBr(!showSideBar);
  };

  const handleLogout = () => {
    localStorage.removeItem("IsLoggedIn");
    setIsLoggedIn(false);
    navigate("/Login");
  };

  return (
    <>
      <div className="layout">
        {showSideBar && (
          <SideBar
            activePage={activePage}
            onPagechange={setactivePage}
            onLoginOut={handleLogout}
          />
        )}

        <div className="main">
          <Header
            toggleSideBar={toggleSideBar}
            toggleDarkMode={toggleDarkMode}
            dark={dark}
          />
          <div className="content">
            <MainContent
              activePage={activePage}
              prodects={prodects}
              setProdects={setProdects}
            
              orders={orders}
              setOrders={setOrders}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoardLayouts;
