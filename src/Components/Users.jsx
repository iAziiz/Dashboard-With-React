import React, { useState } from 'react'
import { usersData } from '../data/data'

function Users() {
  const [users, setUsers] = useState(usersData);
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  // فتح فورم الإضافة
  const openAddForm = () => {
    setFormData({
      name: "",
      email: ""
    });
    setEditingUser(null);
    setShowForm(true);
  };

  // فتح فورم التعديل
  const editUser = (user) => {
    setFormData({
      name: user.name,
      email: user.email
    });
    setEditingUser(user);
    setShowForm(true);
  };

  // حفظ (Add / Edit)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingUser) {
      setUsers(prev =>
        prev.map(u =>
          u.id === editingUser.id
            ? {
                ...u,
                ...formData
              }
            : u
        )
      );
    } else {
      setUsers(prev => [
        ...prev,
        {
          id: Date.now(),
          ...formData
        }
      ]);
    }

    setShowForm(false);
  };

  // حذف
  const deleteUser = (id) => {
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  return (
    <div className="product-page">
      {/* Header */}
      <div className="page-header">
        <div className="header-left">
          <h2>Users Management</h2>
          <p className="sub-text">Manage your users and their information.</p>
        </div>

        <button className="add-btn" onClick={openAddForm}>
          + Add User
        </button>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="modal-overlay">
          <div className="form-card modal">
            <h3>{editingUser ? "Edit User" : "Add User"}</h3>

            <form onSubmit={handleSubmit} className="product-form">
              <input
                type="text"
                placeholder="User Name"
                value={formData.name}
                onChange={e =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />

              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={e =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />

              <div className="form-actions">
                <button type="submit" className="save-btn">
                  {editingUser ? "Update" : "Save"}
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
                <th>Name</th>
                <th>Email</th>
                <th className="th-actions">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td className="actions">
                    <button
                      className="edit-btn"
                      onClick={() => editUser(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => deleteUser(item.id)}
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
  )
}

export default Users

