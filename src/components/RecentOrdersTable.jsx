import React from "react";

const RecentOrdersTable = () => {
  const orders = [
    {
      orderId: "PK09485",
      productName: "Electronic LED",
      price: "$111.00",
      country: "United States",
      date: "12 Jan, 2024",
      status: "Pending",
    },
    {
      orderId: "PK09485",
      productName: "Electronic LED",
      price: "$111.00",
      country: "United States",
      date: "12 Jan, 2024",
      status: "Pending",
    },
    {
      orderId: "PK09485",
      productName: "Electronic LED",
      price: "$111.00",
      country: "United States",
      date: "12 Jan, 2024",
      status: "Pending",
    },
    {
      orderId: "PK09485",
      productName: "Electronic LED",
      price: "$111.00",
      country: "United States",
      date: "12 Jan, 2024",
      status: "Pending",
    },
    {
      orderId: "PK09485",
      productName: "Electronic LED",
      price: "$111.00",
      country: "United States",
      date: "12 Jan, 2024",
      status: "Pending",
    },
    // Add more orders data here
  ];

  return (
    <div className="w-2/3 px-4 py-4 mt-4 bg-white rounded-xl font-poppins">
      <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="text-[#777777] text-[16px] text-left ">
            <th className="px-4 py-2 font-medium">No</th>
            <th className="px-4 py-2 font-medium">Product Name</th>
            <th className="px-4 py-2 font-medium">Price</th>
            <th className="px-4 py-2 font-medium">Country</th>
            <th className="px-4 py-2 font-medium">Date</th>
            <th className="px-4 py-2 font-medium">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId} className="">
              <td className="px-4 py-2">{order.orderId}</td>
              <td className="px-4 py-2">{order.productName}</td>
              <td className="px-4 py-2">{order.price}</td>
              <td className="px-4 py-2 ">{order.country}</td>
              <td className="px-4 py-2 ">{order.date}</td>
              <td className="pr-4 pl-3 py-2 "><span className="bg-[#06E77514] text-green-500 px-2 py-1 rounded-[5px] text-sm">{order.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrdersTable;
