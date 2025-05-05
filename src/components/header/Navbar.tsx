
export default function Navbar() {
  return (
    <nav className="bg-gray-50 dark:bg-gray-700">
      <div className="max-w-screen-xl p-4 mx-auto">
        <div className="flex items-center">
          <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            <li>
              <a href="/" className="text-gray-900 dark:text-white hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/news" className="text-gray-900 dark:text-white hover:underline">
                News
              </a>
            </li>
            <li>
              <a href="/recruitment" className="text-gray-900 dark:text-white hover:underline">
                Recruitment
              </a>
            </li>
            <li>
              <a href="/about-us" className="text-gray-900 dark:text-white hover:underline">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
