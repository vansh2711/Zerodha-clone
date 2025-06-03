import React from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      // console.log(res.data);
      setAllOrders(res.data);
    });
  });
  return (
    <div className="orders">
      <div className="">
        <h3 className="title">Orders ({allOrders.length})</h3>
        {allOrders.length > 0 ? (
          <div className="order-table">
            <table>
              <tr>
                <th>Name</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
                <th>Time</th>
              </tr>

              {allOrders.map((orders, index) => {
                return (
                  <tr key={index}>
                    <td>{orders.name}</td>
                    <td>{orders.qty}</td>
                    <td>{orders.price.toFixed(2)}</td>
                    <td>{orders.mode}</td>
                    <td style={{ fontSize: "15px",fontWeight: "500" }}>
                      {new Date(orders.time).toLocaleString("en-IN", {
                        timeZone: "Asia/Kolkata",
                      })}
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        ) : (
          <>
            <p>You haven't placed any orders today</p>

            <Link
              to={"/"}
              className="btn"
              style={{ marginTop: "20px", margin: "0 auto" }}
            >
              Get started
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Orders;

// time changer
// const utcTime = "2025-02-05T04:41:38.000Z"; // UTC time in ISO format
// const indianTime = new Date(utcTime).toLocaleString("en-IN", {
//   timeZone: "Asia/Kolkata",
// });
// console.log(indianTime);
