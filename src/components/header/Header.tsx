import SearchBar from './SearchBar';
import Navbar from './Navbar';
import { FaFacebookF, FaPhone, FaTelegramPlane } from 'react-icons/fa';
import { ESettingKey } from '@/api/setting/dto/get-setting.in.dto';
import { ISettingsResponse } from '@/api/api.type';

interface HeaderProps {
  settings: ISettingsResponse;
}

export default function Header({ settings }: HeaderProps) {
  const logo =
    settings[ESettingKey.LOGO]?.image ??
    'https://flowbite.com/docs/images/logo.svg';
  const contact = settings[ESettingKey.CONTACT] ?? {
    phone: '',
    facebook: '',
    telegram: '',
    gmail: '',
  };

  const { phone, facebook, telegram, gmail } = contact;

  return (
    <header>
      {/* Top Navigation */}
      <nav className='bg-white border-gray-200 dark:bg-gray-900'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 space-x-6'>
          {/* Logo */}
          <a
            href='/'
            className='flex items-center space-x-3 rtl:space-x-reverse'
          >
            <img
              src={logo}
              className='h-8'
              alt='Việc Làm Ngon'
            />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              Việc Làm Ngon
            </span>
          </a>

          {/* Search Input */}
          <SearchBar />

          {/* Social Icons */}
          <div className='flex items-center space-x-6 rtl:space-x-reverse text-gray-500 dark:text-white'>
            <a
              href={facebook}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-blue-600 bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full'
            >
              <FaFacebookF className='text-xl' />
            </a>
            <a
              href={`tel:${phone}`}
              className='hover:text-blue-600 bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full'
            >
              <FaPhone className='text-xl' />
            </a>
            <a
              href={telegram}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-blue-600 bg-gray-200 w-10 h-10 flex items-center justify-center rounded-full'
            >
              <FaTelegramPlane className='text-xl' />
            </a>
          </div>
        </div>
      </nav>

      {/* Bottom Navigation */}
      <Navbar />
    </header>
  );
}
