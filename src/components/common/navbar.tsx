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
    {
      id: "sweet-potato-carrot",
      title: "Sweet Potato & Golden Carrot",
      stage: "Stage 2 (6+ mos)",
      price: 3.79,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1598170845058-12ef4a457539?q=80&w=800&auto=format&fit=crop",
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Reusable Brand Logo Component */}
        <Logo />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-sans">
          {navigationConfig.mainNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? "text-[#243314] border-b-2 border-[#48592B] pb-0.5"
                    : "text-[#48592B] hover:text-[#243314]"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Search Input Bar with Slider Line Indicator o------------o */}
        <div className="hidden md:flex flex-col items-center relative">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center bg-[#C7CEBA] hover:bg-[#BEC5B0] focus-within:bg-white border border-[#B8BFAB] rounded-full px-4 py-1 text-xs text-[#243314] transition-all w-52 sm:w-64 lg:w-72 justify-between"
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
            <span className="w-2 h-2 rounded-full border border-[#85966E] bg-[#EAECE1] shrink-0" />
            <div className="flex-1 h-[1.5px] bg-[#85966E] mx-0.5" />
            <span className="w-2 h-2 rounded-full border border-[#85966E] bg-[#EAECE1] shrink-0" />
          </div>
        </div>

        {/* Basket & Hamburger Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* [ 3 ] Badge + [ MY BASKET ] Button */}
          <button
            onClick={toggleCartDrawer}
            className="flex items-center gap-2 group focus:outline-none"
            aria-label="Open Basket Cart Drawer"
          >
            <div className="bg-[#48592B] group-hover:bg-[#37461E] border-2 border-[#A3B585] text-white font-bold text-xs w-6 h-6 rounded-sm flex items-center justify-center shadow-sm transition-colors">
              {totalItemCount}
            </div>
            <span className="bg-[#48592B] group-hover:bg-[#37461E] text-white font-bold text-xs uppercase px-3.5 py-1 rounded-sm tracking-wider shadow-sm transition-colors inline-block">
              MY BASKET
            </span>
          </button>

          {/* Reusable Hamburger Menu Toggle Icon Component */}
          <button
            onClick={toggleDrawer}
            className="p-1.5 text-[#48592B] hover:text-[#243314] focus:outline-none transition-colors"
            aria-label="Toggle Navigation Drawer"
          >
            <HamburgerIcon isOpen={drawerOpen && isVisible} />
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
