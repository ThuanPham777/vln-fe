// components/Header.js
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      {/* Top Navigation */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 space-x-6">
          {/* Logo */}
          <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>

          {/* Search Input */}
          <SearchBar />

          {/* Social Icons */}
          <div className="flex items-center space-x-6 rtl:space-x-reverse text-gray-500 dark:text-white">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a
              href="tel:5541251234"
              className="hover:text-blue-600 bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full"
            >
              <i className="fas fa-phone text-xl"></i>
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full"
            >
              <i className="fab fa-telegram-plane text-xl"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation */}
      <Navbar />
    </header>
  );
}
