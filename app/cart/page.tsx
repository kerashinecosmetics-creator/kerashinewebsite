"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash, X } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { items, addToCart, removeFromCart, decreaseQty } = useCart();

  /* ================= SHIPPING STATE ================= */
  const [shipping, setShipping] = useState({
    name: "",
    phone: "",
    city: "",
    postal: "",
    address: "",
  });

  const isShippingValid =
    shipping.name.trim() &&
    shipping.phone.trim() &&
    shipping.city.trim() &&
    shipping.postal.trim() &&
    shipping.address.trim();

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  /* ================= PLACE ORDER (WHATSAPP) ================= */
  const handlePlaceOrder = () => {
    if (!isShippingValid) return;

    const orderItems = items
      .map(
        (item) =>
          `${item.name} x ${item.qty} = Rs. ${item.price * item.qty}`
      )
      .join("\n");

    const message = `
NEW ORDER - KERASHINE

Customer Details:
Name: ${shipping.name}
Phone: ${shipping.phone}
City: ${shipping.city}
Postal Code: ${shipping.postal}
Address: ${shipping.address}

Order:
${orderItems}

Total: Rs. ${subtotal}
Payment Method: Cash on Delivery
`;

    window.open(
      `https://wa.me/923352545419?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  /* ================= EMPTY CART ================= */
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
        <h2 className="text-3xl font-serif mb-4 text-gray-900">
          Your cart is empty
        </h2>
        <p className="text-gray-600 mb-6">
          Looks like you haven&apos;t added anything yet.
        </p>
        <Link
          href="/"
          className="rounded-full bg-black px-10 py-4 text-white tracking-widest uppercase text-sm hover:bg-pink-600 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  /* ================= PAGE ================= */
  return (
    <div className="min-h-screen pt-28 px-6 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">

      {/* Exit Button */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 w-10 h-10 flex items-center justify-center
                   rounded-full bg-white shadow-lg hover:bg-pink-600 hover:text-white transition"
      >
        <X size={18} />
      </Link>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-14">
          Secure Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-12">

            {/* Cart Items */}
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 bg-white/80 backdrop-blur rounded-[32px] p-6 shadow-lg"
                >
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={120}
                      height={160}
                      className="rounded-xl"
                    />
                  )}

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 mt-1">
                        Rs. {item.price.toLocaleString()}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center gap-4">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="w-8 h-8 rounded-full border flex items-center justify-center"
                      >
                        <Minus size={14} />
                      </button>

                      <span>{item.qty}</span>

                      <button
                        onClick={() => addToCart(item)}
                        className="w-8 h-8 rounded-full border flex items-center justify-center"
                      >
                        <Plus size={14} />
                      </button>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-gray-400 hover:text-pink-600"
                      >
                        <Trash size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Shipping Details */}
            <div className="bg-white/80 backdrop-blur rounded-[32px] p-8 shadow-lg">
              <h2 className="text-2xl font-serif text-gray-900 mb-6">
                Shipping Details
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  placeholder="Full Name"
                  className="input"
                  value={shipping.name}
                  onChange={(e) =>
                    setShipping({ ...shipping, name: e.target.value })
                  }
                />

                <input
                  placeholder="Phone Number"
                  className="input"
                  value={shipping.phone}
                  onChange={(e) =>
                    setShipping({ ...shipping, phone: e.target.value })
                  }
                />

                <input
                  placeholder="City"
                  className="input"
                  value={shipping.city}
                  onChange={(e) =>
                    setShipping({ ...shipping, city: e.target.value })
                  }
                />

                <input
                  placeholder="Postal Code"
                  className="input"
                  value={shipping.postal}
                  onChange={(e) =>
                    setShipping({ ...shipping, postal: e.target.value })
                  }
                />

                <input
                  placeholder="Full Address"
                  className="input sm:col-span-2"
                  value={shipping.address}
                  onChange={(e) =>
                    setShipping({ ...shipping, address: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white/80 backdrop-blur rounded-[32px] p-8 shadow-lg">
              <h2 className="text-2xl font-serif text-gray-900 mb-6">
                Payment Method
              </h2>

              <label className="flex items-center gap-3">
                <input type="radio" checked readOnly />
                Cash on Delivery
              </label>
            </div>
          </div>

          {/* ORDER SUMMARY */}
          <div className="bg-white/90 backdrop-blur rounded-[32px] p-8 shadow-xl h-fit sticky top-32">
            <h2 className="text-2xl font-serif mb-6 text-gray-900">
              Order Summary
            </h2>

            <div className="space-y-4 text-gray-700">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name} × {item.qty}</span>
                  <span>Rs. {item.price * item.qty}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between text-lg font-semibold mt-6 border-t pt-4">
              <span>Total</span>
              <span>Rs. {subtotal.toLocaleString()}</span>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={!isShippingValid}
              className={`mt-8 w-full rounded-full py-4 tracking-widest uppercase text-sm transition
                ${
                  isShippingValid
                    ? "bg-black text-white hover:bg-pink-600"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              Place Order
            </button>

            {!isShippingValid && (
              <p className="mt-3 text-xs text-gray-500 text-center">
                Please complete all shipping details to place your order
              </p>
            )}

            <p className="text-xs text-gray-400 text-center mt-4">
              Secure checkout · No hidden charges
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
