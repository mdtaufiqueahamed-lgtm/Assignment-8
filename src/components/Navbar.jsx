"use client";
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 md:px-12 bg-white shadow-sm sticky top-0 z-50">
      {/* বাম পাশে - লোগো */}
      <div className="flex-shrink-0">
        <Link href="/" className="text-2xl font-black text-green-700">
          Qurbani<span className="text-orange-500">Hat</span>
        </Link>
      </div>

      {/* মাঝে - মেনু আইটেম */}
      <div className="hidden md:block">
        <ul className="flex space-x-8 font-bold text-gray-700">
          <li>
            <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
          </li>
          <li>
            <Link href="/animals" className="hover:text-green-600 transition-colors">All Animals</Link>
          </li>
        </ul>
      </div>

      {/* ডান পাশে - লগইন বাটন */}
      <div>
        <Link href="/login" className="bg-green-600 text-white px-6 py-2 rounded-full font-bold hover:bg-green-700 transition-all shadow-md">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;