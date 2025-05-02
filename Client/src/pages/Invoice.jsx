import React from "react";
// import { usePDF } from 'react-to-pdf';
import { Link, useLocation, useNavigate } from "react-router";
import Logo from "../components/Logo";
import ScrollToTop from "../components/ScrollToTop";

const InvoicePage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  // const { toPDF, targetRef } = usePDF({filename: 'Invoice.pdf'});

  if (!state?.order) {
    navigate("/");
    return null;
  }

  const order = state.order;

  return (
    <div>
      <ScrollToTop/>
      <div className="text-center mt-10 mb-5">
        <h2 className="text-3xl font-black text-primary">Order Successful</h2>
      </div>
      <div className="max-w-3xl mx-auto  p-6 pb-10 shadow-lg rounded-xl bg-white">
        <div className="flex items-center justify-between mb-4">
          <Logo />
          <div className="text-right space-y-2">
            <h1 className="text-2xl font-bold">Invoice</h1>
            <p>
              <strong>Date:</strong>{" "}
              {new Date().toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
            <p>
              <strong>Delivery Method:</strong> COD
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <p>
            <strong>Name:</strong> {order.customerName}
          </p>
          <p>
            <strong>Phone:</strong> {order.customerPhone}
          </p>
          <p>
            <strong>Delivery Address:</strong> {order.customerAddress}
          </p>
        </div>

        <table className="w-full mt-10 border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Item</th>
              <th className="p-2 border">Unit Price</th>
              <th className="p-2 border">Quantity</th>
              <th className="p-2 border">Price</th>
            </tr>
          </thead>
          <tbody>
            {order?.cart?.map((item, idx) => (
              <tr key={idx}>
                <td className="p-2 border">
                  {item.name} ({item.quantity})
                </td>
                <td className="p-2 border">Tk {item.price}</td>
                <td className="p-2 border text-center">
                  {item.productQuantity}
                </td>
                <td className="p-2 border">Tk {item.price * item.productQuantity}</td>
              </tr>
            ))}
            <tr className="">
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
              <td className="p-2"></td>
            </tr>
            <tr className="font-bold text-sm">
              <td className="py-1 px-2 border-y">Delivery Charge</td>
              <td className="py-1 px-2 border-y"></td>
              <td className="py-1 px-2 border-y"></td>
              <td className="py-1 px-2 border-y">
                Tk {order.finalDeliveryCharge}
              </td>
            </tr>
            <tr className="font-bold text-sm">
              <td className="py-1 px-2 border-b">COD 1% Charge</td>
              <td className="py-1 px-2 border-b"></td>
              <td className="py-1 px-2 border-b"></td>
              <td className="py-1 px-2 border-b">Tk {order.codCharge}</td>
            </tr>
            <tr className="font-bold">
              <td className="p-2 ">Grand Total</td>
              <td className="p-2 "></td>
              <td className="p-2 "></td>
              <td className="p-2 ">Tk {order.grandTotal}</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-8">
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-primary text-white rounded cursor-pointer"
        >
          Continue Shopping
        </Link>
      </div>

        {/* <div className="mt-8">
        <button
        onClick={()=> toPDF()}
          className="inline-block px-4 py-2 bg-primary text-white rounded cursor-pointer"
        >
          Download Invoice
        </button>
      </div> */}
      </div>
    </div>
  );
};

export default InvoicePage;
