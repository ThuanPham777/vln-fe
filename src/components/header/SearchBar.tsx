import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
  return (
    <div className='flex-grow mx-4 relative'>
      <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500' />
      <input
        type='text'
        placeholder='Search...'
        className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100'
      />
    </div>
  );
}
