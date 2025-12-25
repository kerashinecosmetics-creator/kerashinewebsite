"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function CartPage() {
  const { items, addToCart, removeFromCart, decreaseQty } = useCart();

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-6">Looks like you haven't added anything yet.</p>
        <Link
          href="/"
          className="rounded-full bg-black px-8 py-3 text-white hover:bg-pink-600 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center lg:text-left">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-6 bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={140}
                  height={180}
                  className="object-contain rounded-2xl"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    {item.sizes && (
                      <p className="text-gray-500 mt-1 text-sm">Size: {item.sizes}</p>
                    )}
                    <p className="text-gray-700 mt-2 font-medium">Rs. {item.price}</p>
                  </div>

                  <div className="mt-4 flex items-center gap-4">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
                    >
                      <Minus size={16} />
                    </button>

                    <span className="font-medium">{item.qty}</span>

                    <button
                      onClick={() => addToCart(item)}
                      className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100 transition"
                    >
                      <Plus size={16} />
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-auto text-red-500 hover:text-red-600"
                    >
                      <Trash size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-3xl p-8 shadow-lg h-fit">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-gray-700 text-lg"
                >
                  <span>
                    {item.name} {item.sizes ? `(${item.sizes})` : ""} x {item.qty}
                  </span>
                  <span>Rs. {item.price * item.qty}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between text-xl font-semibold mt-6 border-t pt-4">
              <span>Subtotal</span>
              <span>Rs. {subtotal}</span>
            </div>

            <button className="mt-6 w-full rounded-full bg-black py-4 text-white hover:bg-pink-600 transition text-lg font-medium">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}