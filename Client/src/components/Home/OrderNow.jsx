import React, { useContext, useState } from "react";
import Container from "../Container";
import { IoIosCheckmarkCircle } from "react-icons/io";
import ProductQuantityController from "../ProductQuantityController";
import { FaRegTrashCan } from "react-icons/fa6";
import Button from "../Button";
import products from "../../assets/products";
import { Element } from "react-scroll";
import { toast } from "react-toastify";
import { FiLoader } from "react-icons/fi";
import { useNavigate } from "react-router";
import { CartContext } from "../../contexts/CartContext";

const OrderNow = () => {
  const {cart, setCart} = useContext(CartContext)
  const [deliveryCharge, setDeliveryCharge] = useState(130);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      handleRemoveFromCart(product.id);
    } else {
      setCart([...cart, { ...product, productQuantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const handleQuantityChange = (productId, productQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, productQuantity } : item,
    );
    setCart(updatedCart);
  };

  // Calculations
  const totalProductCost = cart.reduce(
    (total, item) => total + item.price * item.productQuantity,
    0,
  );

  const totalWeight = cart.reduce(
    (total, item) => total + item.weight * item.productQuantity,
    0,
  );

  // Base delivery charge
  let baseDeliveryCharge = Number(deliveryCharge);
  let extraDeliveryCharge = 0;

  if (totalWeight > 1) {
    const extraKg = Math.ceil(totalWeight - 1); // ceil for partial kg
    extraDeliveryCharge = extraKg * 20;
  }

  const finalDeliveryCharge = baseDeliveryCharge + extraDeliveryCharge;
  const codCharge = Math.ceil((totalProductCost + finalDeliveryCharge) * 0.01);
  const grandTotal = totalProductCost + finalDeliveryCharge + codCharge;

  // Send Order Data to Backend

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setLoading(true)
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;
    const upazila = e.target.upazila.value;
    const district = e.target.district.value;

    if(cart.length === 0){
      toast.error("উপর থেকে প্রোডাক্ট নির্বাচন করুন");
      setLoading(false)
      return
    }

    const orderData = {
      cart, // array of selected products
      customerName: name, // from input field
      customerPhone: phone, // from input field
      customerAddress: `${address}, ${upazila}, ${district}`, // from input field
      totalProductCost,
      finalDeliveryCharge,
      codCharge,
      grandTotal,
    };

    console.log(orderData.customerAddress)

    const res = await fetch("https://landing-api.sohozponno.com/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    if (res.ok) {
      setLoading(false)
      toast.success("অর্ডার সফলভাবে প্লেস হয়েছে!");

      e.target.name.value = "";
      e.target.phone.value = "";
      e.target.address.value = "";

      setCart([]);

      navigate('/invoice', { state: { order: orderData } });
    } else {
      setLoading(false)
      toast.error("কিছু ভুল হয়েছে। আবার চেষ্টা করুন।");

      e.target.name.value = "";
      e.target.phone.value = "";
      e.target.address.value = "";
    }
  };

  return (
    <Element name="order">
      <Container className="mt-36">
        <h2 className="text-center text-3xl max-w-96 mx-auto mb-12 font-black text-primary">
          অর্ডার করুন এখনই
        </h2>

        {/* Order Product Selection */}
        <div>
          <h3 className="text-xl font-black text-text mb-5">
            প্রোডাক্ট নির্বাচন করুন
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 mb-10">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  handleAddToCart(product);
                }}
                className={`rounded-xl border-2 cursor-pointer p-2 flex gap-2 ${
                  cart.find((item) => item.id === product.id)
                    ? "border-primary"
                    : "border-primary/20"
                }`}
              >
                <figure className="rounded-lg overflow-hidden w-20 h-20">
                  <img
                    className="w-full h-full object-cover object-center"
                    src={product.photo}
                    alt=""
                  />
                </figure>
                <div className="flex flex-col justify-between flex-1">
                  <div className="flex justify-between">
                    <h4 className="font-semibold flex-1 text-text group-hover:text-primary">
                      {product.name}
                    </h4>
                    <IoIosCheckmarkCircle
                      className={`text-gray-300 text-2xl ${
                        cart.find((item) => item.id === product.id)
                          ? "text-primary"
                          : ""
                      }`}
                    />
                  </div>
                  <div className="flex items-center font-bold justify-between">
                    <p>৳ {product.price}</p>
                    <p className="text-secondary">{product.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Address & Order Summary */}
        <div className="flex flex-col md:flex-row gap-10 mt-16">
          {/* Order Summary */}
          <div className="flex-1">
            <h3 className="text-xl font-black text-text mb-5">অর্ডার কার্ট</h3>

            {/* Order Cart */}
            <div className="space-y-3">
              {cart && cart.length > 0 ? (
                cart.map((cartItem, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border-1 border-primary/50 p-2 pr-3 flex gap-2"
                  >
                    <figure className="rounded-lg overflow-hidden w-16 h-16">
                      <img
                        className="w-full h-full object-cover object-center"
                        src={cartItem.photo}
                        alt=""
                      />
                    </figure>
                    <div className="flex flex-col justify-between flex-1">
                      <div className="flex justify-between gap-3">
                        <div className="flex gap-3 flex-1">
                          <h4 className="font-semibold flex-1 text-text">
                            {cartItem.name}
                          </h4>
                          <p className="font-bold">{cartItem.quantity}</p>
                        </div>
                        <FaRegTrashCan
                          className="text-secondary/80 text-2xl cursor-pointer"
                          onClick={() => handleRemoveFromCart(cartItem.id)}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <p>৳ {cartItem.price}</p>
                        <ProductQuantityController
                          min={1}
                          max={10}
                          onChange={(qty) =>
                            handleQuantityChange(cartItem.id, qty)
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h3 className="text-lg text-secondary font-bold">
                  উপর থেকে প্রোডাক্ট নির্বাচন করুন
                </h3>
              )}
            </div>
          </div>

          {/* Order Summary & Delivery Address */}
          <div className="flex-1">
            {/* Order Summary */}
            <div>
              <h3 className="text-xl font-black text-text mb-5">
                অর্ডার সামারি
              </h3>

              <div>
                <div className="flex flex-col mb-5">
                  <label htmlFor="district">
                    ডেলিভারী এরিয়া নির্বাচন করুন *
                  </label>

                  <select
                    className="mt-1 border py-2 px-3 text-lg rounded-md border-secondary focus:outline-primary"
                    name="district"
                    id="district"
                    required
                    onChange={(e) => setDeliveryCharge(e.target.value)}
                  >
                    <option value="130">
                      Outside Dhaka City - ঢাকা শহরের বাইরে - ৳ ১৩০
                    </option>
                    <option value="110">
                      Inside Dhaka City - ঢাকার শহরের ভেতরে - ৳ ১১০
                    </option>
                    
                  </select>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-bold">মোট</p>
                    <p className="text-lg font-semibold text-primary">
                      ৳ {totalProductCost}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-bold">
                      ডেলিভারি চার্জ{" "}
                      <span className="text-xs">
                        (ওজন: {totalWeight.toFixed(2)} কেজি)
                      </span>
                    </p>
                    <p className="text-lg font-semibold text-primary">
                      ৳ {finalDeliveryCharge}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-bold">ক্যাশ অন ডেলিভারী চার্জ ১%</p>
                    <p className="text-lg font-semibold text-primary">
                      ৳ {codCharge}
                    </p>
                  </div>
                </div>

                <hr className="mt-3 mb-3 text-primary border-dashed " />

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-black">সর্বমোট</p>
                    <p className="text-lg font-semibold text-primary">
                      ৳ {grandTotal}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-black">
                      ডেলিভারি মেথড
                    </p>
                    <p className="text-lg font-semibold text-primary">
                      ক্যাশ অন ডেলিভারি
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="text-primary mt-5" />

            {/* Delivery Address */}
            <div className="mt-5">
              <h3 className="text-xl font-black text-text mb-5">
                ডেলিভারী এড্রেস
              </h3>
              <form onSubmit={handlePlaceOrder}>
                <div className="flex flex-col mb-5">
                  <label htmlFor="name">আপনার নাম*</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="আপনার নাম"
                    className="mt-1 border py-2 pl-3 text-lg rounded-md border-primary/50 focus:outline-primary"
                    required
                  />
                </div>

                <div className="flex flex-col mb-5">
                  <label htmlFor="phone">মোবাইল নাম্বার (১১ সংখ্যা)*</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    pattern="[0-9]{11}"
                    autoComplete="tel"
                    placeholder="01***"
                    className="mt-1 border py-2 pl-3 text-lg rounded-md border-primary/50 focus:outline-primary"
                    required
                  />
                </div>

                <div className="flex flex-col mb-5">
                  <label htmlFor="address">পণ্য ডেলিভারি ঠিকানা*</label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="বাসা নং / রোড নং / গ্রাম"
                    className="mt-1 border py-2 pl-3 text-lg rounded-md border-primary/50 focus:outline-primary"
                    required
                  />
                </div>
                <div className="flex gap-0 md:gap-3 flex-col md:flex-row">
                  <div className="flex flex-col mb-5 w-full">
                  <label htmlFor="upazila">উপজেলা অথবা থানা*</label>
                  <input
                    id="upazila"
                    name="upazila"
                    type="text"
                    placeholder="উপজেলা অথবা থানা"
                    className="mt-1 border py-2 pl-3 text-lg rounded-md border-primary/50 focus:outline-primary"
                    required
                  />
                </div>


                <div className="flex flex-col mb-5 w-full">
                  <label htmlFor="district">জোলা*</label>
                  <input
                    id="district"
                    name="district"
                    type="text"
                    placeholder="জেলার নাম"
                    className="mt-1 border py-2 pl-3 text-lg rounded-md border-primary/50 focus:outline-primary"
                    required
                  />
                </div>
                </div>

                <Button size="lg" className="w-full mt-5">
                  {loading? (<FiLoader className="text-2xl animate-spin" />) : (<IoIosCheckmarkCircle className="text-2xl" />)}
                   অর্ডার প্লেস
                  করুন
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </Element>
  );
};

export default OrderNow;
