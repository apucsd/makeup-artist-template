"use client";

import Link from "next/link";
import React from "react";
import {
  ArrowRight,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  Truck,
  ShieldCheck,
  CheckCircle2,
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
  const freeShippingThreshold = 35.0;
  const progressPercent = Math.min((subtotal / freeShippingThreshold) * 100, 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop with Ultra-Light Minimal Tint */}
      <div
        className={`fixed inset-0 bg-black/5 transition-opacity duration-300 ease-out ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        onClick={onClose}
      />

      {/* Side Panel Container with High-Brightness Luminous Glass */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div
          className={`w-screen max-w-md bg-white/40 backdrop-blur-2xl backdrop-brightness-125 border-l border-white/80 shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto transform transition-transform duration-350 ${isVisible ? "translate-x-0" : "translate-x-full"
            }`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {/* Top Hero-Style Badge & Close Button Header */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#D6DBC4]">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#E2E6D4] text-[#3E5028] text-[11px] font-bold uppercase tracking-wider mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#48592B] stroke-[1.25]" />
                  100% Organic Pouch Basket
                </div>
                <h2 className="text-2xl font-serif font-extrabold text-[#243314] tracking-tight flex items-center gap-2">
                  My Basket
                  <span className="text-xs font-sans font-bold bg-[#48592B] text-white px-2.5 py-0.5 rounded-full">
                    {totalItemCount} {totalItemCount === 1 ? "Pouch" : "Pouches"}
                  </span>
                </h2>
              </div>

              {/* Elongated & Thin Close X Icon */}
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-[#354721] hover:bg-[#EAECE1] transition-colors"
                aria-label="Close cart panel"
              >
                <svg
                  className="w-8 h-6 stroke-[#354721]"
                  viewBox="0 0 36 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                >
                  <line x1="6" y1="3" x2="30" y2="21" />
                  <line x1="6" y1="21" x2="30" y2="3" />
                </svg>
              </button>
            </div>

            {/* Free Shipping Progress Indicator (Matching Hero Green Palette) */}
            <div className="mt-4 bg-white/75 backdrop-blur-md border border-[#DCE1CF]/70 rounded-2xl p-3.5 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="flex items-center gap-1.5 text-[#354721]">
                  <Truck className="w-4 h-4 text-[#48592B] stroke-[1.25]" />
                  {remainingForFreeShipping > 0 ? (
                    <>Add <strong className="text-[#48592B]">${remainingForFreeShipping.toFixed(2)}</strong> for FREE Shipping</>
                  ) : (
                    <span className="text-[#48592B] font-extrabold flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4 text-[#48592B] fill-[#E2E6D4] stroke-[1.25]" />
                      Unlocked FREE Cold Shipping!
                    </span>
                  )}
                </span>
                <span className="text-[10px] text-[#5C6E42] uppercase tracking-wider font-mono">
                  {Math.round(progressPercent)}%
                </span>
              </div>
              <div className="w-full h-2 bg-[#EAECE1] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#48592B] transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="py-6 space-y-3.5 flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EAECE1] text-[#48592B] flex items-center justify-center mx-auto text-2xl">
                  <ShoppingBag className="w-8 h-8 stroke-[1.25]" />
                </div>
                <p className="text-base font-serif font-bold text-[#243314]">Your basket is empty!</p>
                <p className="text-xs text-[#5C6E42]">Add some fresh organic purees to nourish your baby.</p>
                <div className="pt-2">
                  <Link
                    href="/products"
                    onClick={onClose}
                    className="inline-block bg-[#48592B] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full hover:bg-[#37461E] transition-all"
                  >
                    Browse Organic Pouches
                  </Link>
                </div>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/75 backdrop-blur-md border border-[#DCE1CF]/70 rounded-2xl p-4 flex items-center justify-between gap-3 shadow-sm hover:shadow-md transition-shadow group"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-xl object-cover shrink-0 border border-[#EAECE1]"
                  />

                  <div className="flex-1 space-y-1">
                    <span className="inline-block bg-[#EAECE1] text-[#354721] text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md">
                      {item.stage}
                    </span>
                    <h3 className="text-xs font-bold text-[#243314] line-clamp-1 group-hover:text-[#48592B] transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs font-extrabold text-[#48592B]">
                      ${(item.price * item.quantity).toFixed(2)}
                      <span className="text-[10px] text-[#5C6E42] font-normal ml-1">
                        (${item.price.toFixed(2)} / ea)
                      </span>
                    </div>
                  </div>

                  {/* Quantity Controls & Delete */}
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-[#9EAB89] hover:text-red-700 p-0.5 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4 stroke-[1.25]" />
                    </button>

                    <div className="flex items-center gap-1.5 bg-[#F5F7EF] border border-[#DCE1CF] rounded-full px-1.5 py-0.5">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-5 h-5 flex items-center justify-center text-xs font-bold text-[#243314] hover:bg-[#EAECE1] rounded-full transition-colors"
                      >
                        <Minus className="w-3 h-3 stroke-[1.25]" />
                      </button>
                      <span className="text-xs font-bold px-1 text-[#243314]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-5 h-5 flex items-center justify-center text-xs font-bold text-[#243314] hover:bg-[#EAECE1] rounded-full transition-colors"
                      >
                        <Plus className="w-3 h-3 stroke-[1.25]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Organic Quality Badges (Matching Hero Organic Pills) */}
            <div className="grid grid-cols-3 gap-2 pt-2 text-[10px] font-bold text-[#354721] text-center">
              <div className="bg-[#EAECE1] p-2 rounded-xl">🌱 100% Non-GMO</div>
              <div className="bg-[#EAECE1] p-2 rounded-xl">🍏 Zero Sugar</div>
              <div className="bg-[#EAECE1] p-2 rounded-xl">🧊 Cold-Packed</div>
            </div>
          </div>

          {/* Hero-Style Cart Drawer Footer */}
          <div className="pt-5 border-t border-[#D6DBC4] space-y-4">
            <div className="space-y-1.5 text-xs text-[#4A5D37]">
              <div className="flex justify-between font-semibold">
                <span>Estimated Subtotal</span>
                <span className="text-lg font-serif font-extrabold text-[#243314]">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span>Cold Packaging Shipping</span>
                <span className="font-bold text-[#48592B]">
                  {remainingForFreeShipping === 0 ? "FREE" : "$4.99"}
                </span>
              </div>
            </div>

            <Link
              href="/shop"
              onClick={onClose}
              className="block w-full bg-[#48592B] hover:bg-[#37461E] text-white font-bold text-sm text-center py-4 rounded-full uppercase tracking-wider shadow-lg hover:shadow-emerald-900/20 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-5 h-4 stroke-[1.25]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
