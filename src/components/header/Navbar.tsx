export default function Navbar() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'News', href: '/news' },
    { label: 'Recruitment', href: '/recruitment' },
    { label: 'About Us', href: '/about-us' },
  ];

  return (
    <nav className='bg-gray-50 dark:bg-gray-700'>
      <div className='max-w-screen-xl p-4 mx-auto'>
        <div className='flex items-center'>
          <ul className='flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm'>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className='text-gray-900 dark:text-white hover:underline'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
