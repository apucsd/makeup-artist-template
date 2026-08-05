"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Search } from "lucide-react";
import { navigationConfig } from "@/config/navigation";
import { Logo } from "@/components/common/logo";
import { HamburgerIcon } from "@/components/common/hamburger-icon";
import { NavDrawer } from "@/components/common/nav-drawer";
import { CartDrawer, CartItem } from "@/components/common/cart-drawer";

export function Navbar() {
  const pathname = usePathname();

  // Menu Drawer State
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Cart Drawer State
  const [cartOpen, setCartOpen] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  // Cart Items State
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "banana-ginger-apple",
      title: "Banana, Ginger & Apple Puree",
      stage: "Stage 1 (4+ mos)",
      price: 3.49,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop",
    },

  ]);

  const totalItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const updateCartQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Menu Animation Frame Controller
  React.useEffect(() => {
    if (drawerOpen) {
      const timer = requestAnimationFrame(() => {
        setIsVisible(true);
      });
      return () => cancelAnimationFrame(timer);
    } else {
      setIsVisible(false);
    }
  }, [drawerOpen]);

  // Cart Animation Frame Controller
  React.useEffect(() => {
    if (cartOpen) {
      const timer = requestAnimationFrame(() => {
        setIsCartVisible(true);
      });
      return () => cancelAnimationFrame(timer);
    } else {
      setIsCartVisible(false);
    }
  }, [cartOpen]);

  const closeDrawer = () => {
    setIsVisible(false);
    setTimeout(() => {
      setDrawerOpen(false);
    }, 350);
  };

  const toggleDrawer = () => {
    if (drawerOpen) {
      closeDrawer();
    } else {
      setDrawerOpen(true);
      if (cartOpen) closeCartDrawer();
    }
  };

  const closeCartDrawer = () => {
    setIsCartVisible(false);
    setTimeout(() => {
      setCartOpen(false);
    }, 350);
  };

  const toggleCartDrawer = () => {
    if (cartOpen) {
      closeCartDrawer();
    } else {
      setCartOpen(true);
      if (drawerOpen) closeDrawer();
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/products?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">

        {/* Reusable Brand Logo Component with explicit right margin */}
        <div className="shrink-0 mr-4 sm:mr-6 lg:mr-8">
          <Logo />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-7 font-sans flex-1">
          {navigationConfig.mainNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[11px] xl:text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap ${isActive
                    ? "text-[#18260B] border-b-2 border-[#48592B] pb-0.5"
                    : "text-[#3E5028] hover:text-[#18260B]"
                  }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Search Input Bar with Slider Line Indicator o------------o */}
        <div className="hidden md:flex flex-col items-center relative shrink-0">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center bg-[#C7CEBA]/90 hover:bg-[#BEC5B0] focus-within:bg-white border border-[#B8BFAB] rounded-full px-3.5 py-1 text-xs text-[#243314] transition-all w-44 sm:w-52 lg:w-60 justify-between backdrop-blur-sm"
          >
            <input
              type="text"
              placeholder="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent focus:outline-none placeholder-[#667650] italic text-xs font-normal w-full text-[#243314]"
            />
            <button type="submit" aria-label="Submit Search" className="text-[#55663A] hover:text-[#243314] shrink-0">
              <Search className="w-3.5 h-3.5 stroke-[1.5]" />
            </button>
          </form>

          <div className="w-[108%] flex items-center justify-between mt-1 pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full border border-[#85966E] bg-[#EAECE1] shrink-0" />
            <div className="flex-1 h-[1.5px] bg-[#85966E] mx-0.5" />
            <span className="w-1.5 h-1.5 rounded-full border border-[#85966E] bg-[#EAECE1] shrink-0" />
          </div>
        </div>

        {/* Basket & Hamburger Controls */}
        <div className="flex items-center gap-3 shrink-0 ml-2">
          {/* [ 3 ] Badge + [ MY BASKET ] Button */}
          <button
            onClick={toggleCartDrawer}
            className="flex items-center gap-1.5 group focus:outline-none"
            aria-label="Open Basket Cart Drawer"
          >
            <div className="bg-[#48592B] group-hover:bg-[#37461E] border border-[#A3B585] text-white font-bold text-xs w-6 h-6 rounded-xs flex items-center justify-center shadow-xs transition-colors">
              {totalItemCount}
            </div>
            <span className="bg-[#48592B] group-hover:bg-[#37461E] text-white font-bold text-[11px] uppercase px-3 py-1 rounded-xs tracking-wider shadow-xs transition-colors whitespace-nowrap">
              MY BASKET
            </span>
          </button>

          {/* Reusable Hamburger Menu Toggle Icon Component */}
          <button
            onClick={toggleDrawer}
            className="p-1 text-[#48592B] hover:text-[#18260B] focus:outline-none transition-colors ml-1"
            aria-label="Toggle Navigation Drawer"
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>

      {/* Modular Subcomponents */}
      <NavDrawer
        isOpen={drawerOpen}
        isVisible={isVisible}
        onClose={closeDrawer}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
      />

      <CartDrawer
        isOpen={cartOpen}
        isVisible={isCartVisible}
        onClose={closeCartDrawer}
        items={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
      />
    </header>
  );
}
