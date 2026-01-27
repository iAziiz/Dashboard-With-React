import { prodectData } from "../data/data";
import { useState } from "react";

function ProductPage() {
  const [prodects, setProdects] = useState(prodectData);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    catagory: "",
    price: "",
    stock: ""
  });

  // فتح فورم الإضافة
  const openAddForm = () => {
    setFormData({
      name: "",
      catagory: "",
      price: "",
      stock: ""
    });
    setEditingProduct(null);
    setShowForm(true);
  };

  // فتح فورم التعديل
  const editProdect = (product) => {
    setFormData({
      name: product.name,
      catagory: product.catagory,
      price: product.price,
      stock: product.stock
    });
    setEditingProduct(product);
    setShowForm(true);
  };

  // حفظ (Add / Edit)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingProduct) {
      setProdects(prev =>
        prev.map(p =>
          p.id === editingProduct.id
            ? {
                ...p,
                ...formData,
                active: formData.active
              }
            : p
        )
      );
    } else {
      setProdects(prev => [
        ...prev,
        {
          id: Date.now(),
          ...formData,
          active: Number(formData.stock) > 0
          
        }
      ]);
    }

    setShowForm(false);
  };

  // حذف
  const deleteProdect = (id) => {
    setProdects(prev => prev.filter(p => p.id !== id));
  };

  

  return (
    <div className="product-page">
      {/* Header */}
      <div className="page-header">
        <div className="header-left">
          <h2>Product Page</h2>
          <p className="sub-text">Manage your products, prices, and stock.</p>
        </div>

        <button className="add-btn" onClick={openAddForm}>
          + Add Product
        </button>
      </div>

      {/* 🔥 Modal */}
      {showForm && (
        <div className="modal-overlay">
          <div className="form-card modal">
            <h3>{editingProduct ? "Edit Product" : "Add Product"}</h3>

            <form onSubmit={handleSubmit} className="product-form">
              <input
                type="text"
                placeholder="Product Name"
                value={formData.name}
                onChange={e =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />

              <input
                type="text"
                placeholder="Category"
                value={formData.catagory}
                onChange={e =>
                  setFormData({ ...formData, catagory: e.target.value })
                }
                required
              />

              <input
                type="number"
                placeholder="Price"
                value={formData.price}
                onChange={e =>
                  setFormData({ ...formData, price: e.target.value })
                }
                required
              />

              <input
                type="number"
                placeholder="Stock"
                value={formData.stock}
                onChange={e =>
                  setFormData({ ...formData, stock: e.target.value })
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
                <option value="true">Active</option>
                <option value="false">Out Of Stock</option>
              </select>

              <div className="form-actions">
                <button type="submit" className="save-btn">
                  {editingProduct ? "Update" : "Save"}
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
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
                <th className="th-actions">Action</th>
              </tr>
            </thead>

            <tbody>
              {prodects.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.catagory}</td>
                  <td>{item.price}</td>
                  <td>{item.stock}</td>
                  <td>
                    <span
                      className={
                        item.active ? "badge active" : "badge out"
                      }
                    >
                      {item.active ? "Active" : "Out Of Stock"}
                    </span>
                  </td>
                  <td className="actions">
                    <button
                      className="edit-btn"
                      onClick={() => editProdect(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => deleteProdect(item.id)}
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

export default ProductPage;
