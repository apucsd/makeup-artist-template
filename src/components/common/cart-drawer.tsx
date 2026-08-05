"use client";

import Link from "next/link";
import React from "react";
import {
  X,
  ArrowRight,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  Truck,
} from "lucide-react";

export interface CartItem {
  id: string;
  title: string;
  stage: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartDrawerProps {
  isOpen: boolean;
  isVisible: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
}

export function CartDrawer({
  isOpen,
  isVisible,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const totalItemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop with Smooth Fade */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Side Panel Container with Spring Physics Curve */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div
          className={`w-screen max-w-md bg-[#F5F7EF] border-l border-[#D6DBC4] shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto transform transition-transform duration-350 ${
            isVisible ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Cart Drawer Header */}
          <div className="flex items-center justify-between pb-5 border-b border-[#D6DBC4]">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-[#48592B] stroke-[1.5]" />
              <h2 className="text-base font-serif font-bold text-[#243314] tracking-tight">
                My Basket ({totalItemCount} {totalItemCount === 1 ? "Item" : "Items"})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#354721] hover:bg-[#EAECE1] transition-colors"
              aria-label="Close cart panel"
            >
              <X className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="py-6 space-y-4 flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EAECE1] text-[#48592B] flex items-center justify-center mx-auto text-2xl">
                  <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                </div>
                <p className="text-sm font-bold text-[#243314]">Your basket is empty!</p>
                <p className="text-xs text-[#5C6E42]">Add some delicious organic pouches to get started.</p>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-[#DCE1CF] rounded-2xl p-4 flex items-center justify-between gap-3 shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-xl object-cover shrink-0"
                  />

                  <div className="flex-1 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5C6E42]">
                      {item.stage}
                    </span>
                    <h3 className="text-xs font-bold text-[#243314] line-clamp-1">
                      {item.title}
                    </h3>
                    <div className="text-xs font-extrabold text-[#48592B]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>

                  {/* Quantity Controls & Delete */}
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[#9EAB89] hover:text-red-700 p-0.5 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5 stroke-[1.5]" />
                    </button>

                    <div className="flex items-center gap-1.5 bg-[#F5F7EF] border border-[#DCE1CF] rounded-lg p-0.5">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-5 h-5 flex items-center justify-center text-xs font-bold text-[#243314] hover:bg-[#EAECE1] rounded"
                      >
                        <Minus className="w-3 h-3 stroke-[1.5]" />
                      </button>
                      <span className="text-xs font-bold px-1 text-[#243314]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-5 h-5 flex items-center justify-center text-xs font-bold text-[#243314] hover:bg-[#EAECE1] rounded"
                      >
                        <Plus className="w-3 h-3 stroke-[1.5]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Free Cold Shipping perk banner */}
            <div className="bg-[#EAECE1] border border-[#D6DBC4] p-3.5 rounded-xl text-xs text-[#354721] flex items-center gap-2.5">
              <Truck className="w-4 h-4 text-[#48592B] shrink-0 stroke-[1.5]" />
              <span>Free insulated cold shipping on orders over <strong>$35</strong>.</span>
            </div>
          </div>

          {/* Cart Drawer Footer */}
          <div className="pt-5 border-t border-[#D6DBC4] space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="font-bold text-[#4A5D37]">Subtotal</span>
              <span className="text-xl font-serif font-extrabold text-[#243314]">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <Link
              href="/shop"
              onClick={onClose}
              className="block w-full bg-[#48592B] hover:bg-[#37461E] text-white font-bold text-sm text-center py-3.5 rounded-full uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4 stroke-[1.5]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
