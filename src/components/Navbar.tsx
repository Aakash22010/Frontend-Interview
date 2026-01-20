import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
              C
            </div>
            <span className="font-semibold text-lg tracking-wide">
              CA MONK
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a className="hover:text-black transition">Tools</a>
            <a className="hover:text-black transition">Practice</a>
            <a className="hover:text-black transition">Events</a>
            <a className="hover:text-black transition">Job Board</a>
            <a className="hover:text-black transition">Points</a>
          </nav>

          {/* Desktop Profile */}
          <div className="hidden md:block">
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              Profile
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <span className="font-semibold text-lg">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col p-4 gap-4 text-sm font-medium text-gray-700">
          <a className="hover:text-black">Tools</a>
          <a className="hover:text-black">Practice</a>
          <a className="hover:text-black">Events</a>
          <a className="hover:text-black">Job Board</a>
          <a className="hover:text-black">Points</a>

          <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700 w-full">
            Profile
          </Button>
        </nav>
      </div>
    </>
  );
}
