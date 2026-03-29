import StateCard from "./StateCard";
import ProductPage from "./ProdectPage";
import OrderPage from "./OrderPage";
import { prodectData } from '../data/data'
import OrderStatus from "./OrderStatus";
import API from "./API";
import Users from "./Users";

function MainContent({ activePage , prodects, setProdects , orders, setOrders}) {
    const totalOrders = orders.length;
    const totalProducts = prodects.length;

    const totalRevenue = orders.reduce((sum, order) => {
      const ordersTotal = prodectData.find(p => p.id === order.prodect_id);
      return sum + (ordersTotal ? ordersTotal.price * order.quantity : 0);
    }, 0);

  if (activePage === "dashboard") {
    return   <>
    <h2>DashBoard Overview</h2>
    <div className="dashboard">
      <StateCard title="Total Products" value={totalProducts} />
      <StateCard title="Total Orders" value={totalOrders} />
      <StateCard title="Revenue" value={totalRevenue.toLocaleString()} />
    </div>
    <OrderStatus orders={orders} />
    </>
  }

  if (activePage === "prodects") {
    return <ProductPage prodects={prodects} setProdects={setProdects} />;
  }

  if (activePage === "orders") {
    return <OrderPage orders={orders} setOrders={setOrders} />;
  }

  if (activePage === "users") {
    return <Users />;
  }

  if (activePage === "API") {
    return <API />;
  }

  return <h2>Not Found</h2>;
}

export default MainContent;
