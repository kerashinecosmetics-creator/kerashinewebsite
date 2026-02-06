"use client";

type Shipping = {
  name: string
  phone: string
  city: string
  postal: string
  address: string
}

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash, X } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { items, addToCart, removeFromCart, decreaseQty } = useCart();

  const [shipping, setShipping] = useState<Shipping>({
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
      `https://wa.me/923101425352?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#fafafa]">
        <h2 className="text-3xl font-serif mb-4 text-gray-900">
          Your cart is empty
        </h2>
        <p className="text-gray-600 mb-6">
          You haven&apos;t added any products yet.
        </p>
        <Link
          href="/"
          className="rounded-full bg-black px-10 py-4 text-white tracking-widest uppercase text-sm hover:bg-gray-900 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fafafa] pt-28 px-6">
      {/* Exit */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 w-10 h-10 flex items-center justify-center
                   rounded-full bg-white border border-gray-200 hover:bg-black hover:text-white transition"
      >
        <X size={18} />
      </Link>

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mb-14">
          Secure Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-10">

            {/* CART ITEMS */}
            {items.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 bg-white border border-gray-200
                           rounded-2xl p-6 shadow-sm"
              >
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={110}
                    height={140}
                    className="rounded-lg bg-gray-100 p-2"
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
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                    >
                      <Minus size={14} />
                    </button>

                    <span className="text-sm">{item.qty}</span>

                    <button
                      onClick={() => addToCart(item)}
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                    >
                      <Plus size={14} />
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-auto text-gray-400 hover:text-red-500"
                    >
                      <Trash size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* SHIPPING */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-serif text-gray-900 mb-6">
                Shipping Details
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {(
                  [
                    ["Full Name", "name"],
                    ["Phone Number", "phone"],
                    ["City", "city"],
                    ["Postal Code", "postal"],
                  ] as [string, keyof Shipping][]
                ).map(([label, key]) => (
                  <input
                    key={key}
                    placeholder={label}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
                              focus:outline-none focus:ring-1 focus:ring-black"
                    value={shipping[key]}
                    onChange={(e) =>
                      setShipping({ ...shipping, [key]: e.target.value })
                    }
                  />
                ))}

                <input
                  placeholder="Full Address"
                  className="sm:col-span-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
                             focus:outline-none focus:ring-1 focus:ring-black"
                  value={shipping.address}
                  onChange={(e) =>
                    setShipping({ ...shipping, address: e.target.value })
                  }
                />
              </div>
            </div>

            {/* PAYMENT */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-serif text-gray-900 mb-6">
                Payment Method
              </h2>

              <div className="flex items-center gap-3 p-4 border rounded-lg">
                <input type="radio" checked readOnly />
                <span className="text-gray-800 font-medium">
                  Cash on Delivery
                </span>
              </div>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md h-fit sticky top-32">
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

            <div className="h-px bg-gray-200 my-6" />

            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>Rs. {subtotal.toLocaleString()}</span>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={!isShippingValid}
              className={`mt-8 w-full rounded-full py-4 text-sm tracking-widest uppercase transition
                ${
                  isShippingValid
                    ? "bg-black text-white hover:bg-gray-900"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              Place Order
            </button>

            {!isShippingValid && (
              <p className="mt-3 text-xs text-gray-500 text-center">
                Complete shipping details to continue
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
