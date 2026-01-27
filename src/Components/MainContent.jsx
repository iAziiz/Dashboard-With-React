import StateCard from "./StateCard";
import ProductPage from "./ProdectPage";
import OrderPage from "./OrderPage";

function MainContent({ activePage }) {
    

  if (activePage === "dashboard") {
    return   <>
    <h2>DashBoard Overview</h2>
    <div className="dashboard">
      <StateCard title="Users" value="1,250" />
      <StateCard title="Orders" value="320" />
      <StateCard title="Revenue" value="45,000 SAR" />
    </div>
    </>
  }

  if (activePage === "prodects") {
    return <ProductPage/>;
  }

  if (activePage === "orders") {
    return <OrderPage/>;
  }

  if (activePage === "users") {
    return <h2>Users Page</h2>;
  }

  return <h2>Not Found</h2>;
}

export default MainContent;
