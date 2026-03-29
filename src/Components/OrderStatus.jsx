import React from 'react'

function OrderStatus({orders}) {

  const total = orders.length;
  const shipped = orders.filter((order) => order.active === true).length;
  const pending = orders.filter((order) => order.active === false).length;


  return (
    <div className='order-status'>
        <h3>Order Status</h3>

        <div className="status-item">
            <span>Shipped</span>
            <span>{shipped}</span>
            <div className="progress-bar">
              <div className='progress-fill green' style={{width: `${(shipped/total)*100}%`}}>
              </div>
            </div>
        </div>
        <div className="status-item">
            <span>Pending</span>
            <span>{pending}</span>
            <div className="progress-bar">
              <div className='progress-fill yellow' style={{width: `${(pending/total)*100}%`}}>
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default OrderStatus
