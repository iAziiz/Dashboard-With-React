import { prodectData, orderData } from "../data/data";
import { useState } from "react";

function OrderPage() {
  const [orders, setOrders] = useState(orderData);
  const [showForm, setShowForm] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);

  const [formData, setFormData] = useState({
    prodect_id: "",
    quantity: "",
    active: true
  });

  // فتح إضافة
  const openAddForm = () => {
    setFormData({
      prodect_id: "",
      quantity: "",
      active: true
    });
    setEditingOrder(null);
    setShowForm(true);
  };

  // فتح تعديل
  const editOrder = (order) => {
    setFormData({
      quantity: order.quantity,
      active: order.active
    });
    setEditingOrder(order);
    setShowForm(true);
  };

  // حفظ
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingOrder) {
      setOrders(prev =>
        prev.map(o =>
          o.id === editingOrder.id
            ? {
                ...o,
                ...formData,
                prodect_id: Number(formData.prodect_id),
                quantity: Number(formData.quantity)
              }
            : o
        )
      );
    } else {
      setOrders(prev => [
        ...prev,
        {
          id: Date.now(),
          prodect_id: Number(formData.prodect_id),
          quantity: Number(formData.quantity),
          active: formData.active
        }
      ]);
    }

    setShowForm(false);
  };

  // حذف
  const deleteOrder = (id) => {
    setOrders(prev => prev.filter(o => o.id !== id));
  };

  return (
    <div className="product-page">
      {/* Header */}
      <div className="page-header">
        <div className="header-left">
          <h2>Order Page</h2>
          <p className="sub-text">Manage your orders.</p>
        </div>

        <button className="add-btn" onClick={openAddForm}>
          + Add Order
        </button>
      </div>

      {/* 🔥 Modal */}
      {showForm && (
        <div className="modal-overlay" onClick={() => setShowForm(false)}>
          <div
            className="form-card modal"
            onClick={e => e.stopPropagation()}
          >
            <h3>{editingOrder ? "Edit Order" : "Add Order"}</h3>

            <form onSubmit={handleSubmit} className="product-form">
              
              {/* Quantity */}
              <input
                type="number"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={e =>
                  setFormData({
                    ...formData,
                    quantity: e.target.value
                  })
                }
                required
              />

              {/* Status */}
              <select
                value={formData.active}
                onChange={e =>
                  setFormData({
                    ...formData,
                    active: e.target.value === "true"
                  })
                }
              >
                <option value="true">Shipped</option>
                <option value="false">Pending</option>
              </select>

              <div className="form-actions">
                <button type="submit" className="save-btn">
                  {editingOrder ? "Update" : "Save"}
                </button>

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="table-card">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Product ID</th>
                <th>Quantity</th>
                <th>Status</th>
                <th className="th-actions">Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map(item => (
                <tr key={item.id}>
                  <td>#{item.id}</td>
                  <td>{item.prodect_id}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <span
                      className={
                        item.active ? "badge active" : "badge out"
                      }
                    >
                      {item.active ? "Shipped" : "Pending"}
                    </span>
                  </td>
                  <td className="actions">
                    <button
                      className="edit-btn"
                      onClick={() => editOrder(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => deleteOrder(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
