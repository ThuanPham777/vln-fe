
export default function Footer(){
  return (
    <footer className="relative bg-black text-gray-300 pt-12 pb-8">

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 flex flex-wrap justify-between">

        {/* Column 1: Logo and Description */}
        <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0 pr-4">
          <img src='https://flowbite.com/docs/images/logo.svg' alt="  Logo" className="h-10 mb-4" /> {/* Adjust height as needed */}
          <p className="text-sm mb-4">
            được biết đến là trung tâm giải trí game online uy tín nhất hiện nay. Ngoài việc chuyên cung cấp các dịch vụ giải trí online thì còn là nơi liên kết các thương hiệu nổi tiếng trên thế giới, tạo nên hệ thống game uy tín và chất lượng.
          </p>
          <div className="text-sm">
            <p className="mb-1">Tele: <a href="#" className="hover:underline">https://t.me/Heej 1</a></p> {/* Replace # with actual link */}
            <p className="mb-1">FR: <a href="#" className="hover:underline">https://www.facebook.com/</a></p> {/* Replace # with actual link */}
            <p className="mb-1">Hotline: +855 92304903</p> {/* Replace with actual number */}
            <p className="mb-1">Zalo: +855 92304903</p> {/* Replace with actual number */}
            <p className="mb-1">Email: theejinkra@ .com</p> {/* Replace with actual email */}
          </div>
           {/* DMCA Protected Badge - Placeholder */}
           <div className="mt-4">
              <img src="https://via.placeholder.com/100x30?text=DMCA+Protected" alt="DMCA Protected" className="h-8" /> {/* Replace with actual badge */}
           </div>
        </div>

        {/* Column 2: About Us Links */}
        <div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
          <h4 className="text-lg font-semibold text-white mb-4">VỀ CHÚNG TÔI</h4> {/* About Us Title */}
          <ul className="text-sm">
            <li className="mb-2"><a href="#" className="hover:underline">WEB HTTPS://VIECLAM .NET</a></li> {/* Replace # with actual link */}
            <li className="mb-2"><a href="#" className="hover:underline">CHÍNH SÁCH BẢO MẬT</a></li> {/* Replace # with actual link */}
            <li className="mb-2"><a href="#" className="hover:underline">ĐIỀU KIỆN SỬ DỤNG</a></li> {/* Replace # with actual link */}
            <li className="mb-2"><a href="#" className="hover:underline">GIỚI THIỆU LIÊN MINH  </a></li> {/* Replace # with actual link */}
            <li className="mb-2"><a href="#" className="hover:underline">TUYỂN DỤNG  </a></li> {/* Replace # with actual link */}
            <li className="mb-2"><a href="#" className="hover:underline">ĐĂNG KÝ ỨNG TUYÊN</a></li> {/* Replace # with actual link */}
            <li className="mb-2"><a href="#" className="hover:underline">HOẠT ĐỘNG  </a></li> {/* Replace # with actual link */}
            <li className="mb-2"><a href="#" className="hover:underline">TIN TỨC BLOG  </a></li> {/* Replace # with actual link */}
          </ul>
        </div>

        {/* Column 3: Map and Title */}
        <div className="w-full md:w-1/3 lg:w-1/3">
             <h4 className="text-lg font-semibold text-white mb-4">  - LIÊN MINH GAME ONLINE UY TÍN NHẤT 2024</h4> {/* Map Title */}
             {/* Map Placeholder */}
             <div className="w-full h-64 bg-gray-700 rounded-lg overflow-hidden">
                 {/* You can embed a Google Map iframe here */}
                 {/* Example: */}
                 <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.509602433578!2d106.66553131474922!3d10.772168992324224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f08450b6a8b%3A0x9530f2d6a38475a0!2sPasteur%2C%20District%203%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus" // REPLACE with the actual embed URL for your location
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="  Location Map"
                 ></iframe>
                 {/* Or just a static image or placeholder div */}
                 {/* <div className="flex items-center justify-center h-full text-gray-400">Map Placeholder</div> */}
             </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm text-gray-500">
        <p>&copy; Copyright 2024 ©  </p>
      </div>

      {/* Floating Action Buttons (Fixed Position) */}
       <div className="fixed bottom-6 right-4 flex flex-col space-y-3 z-50"> {/* z-50 ensures it's on top */}
            {/* WhatsApp Button */}
            <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noopener noreferrer" className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200">
                {/* Replace with an actual WhatsApp icon SVG or Font Awesome icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.891 11.892-1.99-.001-3.951-.5-5.688-1.464l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.414 1.851 6.312l1.315 4.8zM12 4.149c3.174 0 5.701 2.527 5.704 5.701.002 3.174-2.526 5.701-5.701 5.704-3.174-.002-5.701-2.528-5.704-5.701-.001-3.174 2.527-5.702 5.701-5.704z"/></svg>
            </a>

            {/* Telegram Button */}
             <a href="https://t.me/YOUR_TELEGRAM_USERNAME" target="_blank" rel="noopener noreferrer" className="bg-blue-500 p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200">
                {/* Replace with an actual Telegram icon SVG or Font Awesome icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M23.984 3.054c.275 2.464-.992 6.86-2.223 8.777-1.255 1.94-2.769 3.396-4.546 4.379-1.094.59-2.185.926-3.247.943-.842.014-1.68-.202-2.506-.635-.874-.456-1.748-1.081-2.584-1.873-.837-.79-1.615-1.74-2.304-2.845-.688-1.102-1.277-2.342-1.756-3.729-.479-1.387-.844-2.942-1.095-4.663-.248-1.71-.478-3.605-.69-5.685-.013-.135-.022-.27-.03-.406-.02-.28.228-.427.487-.378 1.535.297 3.214.621 5.055.979.192.036.39.053.58.053.506.003 1.008-.083 1.494-.26.494-.181.977-.44 1.435-.775.478-.356.934-.788 1.364-1.293.431-.504.83-1.096 1.2-1.769.366-.673.703-1.424.998-2.252.295-.826.558-1.738.786-2.735.229-.996.413-2.082.562-3.257.022-.173.04-.35.052-.53.007-.1-.002-.2-.02-.302-.03-.162-.065-.268-.104-.377-.07-.19-.136-.404-.193-.639-.058-.234-.104-.49-.14-.768-.035-.278-.056-.572-.062-.884-.005-.312-.004-.63-.002-.951.002-.32.013-.638.032-.953.018-.315.048-.628.09-.933.042-.304.096-.598.165-.88.069-.282.153-.554.25-.813.096-.259.21-.504.339-.736.13-.233.278-.454.44-.663.162-.208.34-.402.534-.58.195-.177.407-.339.634-.483.227-.144.469-.272.722-.384.254-.112.517-.207.787-.284.27-.078.547-.138.83-.181.284-.043.572-.064.862-.064.29 0 .579.018.86.053.28.035.55.085.81.15.26.064.512.14.75.228.238.088.467.184.68.288.213.104.417.218.606.337.189.119.36.244.51.373.15.129.28.259.39.389.109.13.204.259.282.387.078.128.136.255.174.382.038.127.057.254.057.381zm-17.108 1.443l7.653 4.998c.949.616 1.782 1.028 2.573 1.237.787.21 1.525.261 2.208.152.683-.109 1.299-.359 1.832-.749.534-.39.982-.899 1.341-1.523.36-.625.638-1.358.83-2.192.193-.835.3-1.783.327-2.834.024-1.051-.056-2.201-.242-3.448-.187-1.246-.476-2.622-.866-4.136-.39-1.513-.904-3.182-1.534-5.006-.63-.86-.876-1.221-.738-1.082.512.512 2.02 1.71 4.52 3.641 2.498 1.93 4.465 3.457 5.865 4.582 1.401 1.124 2.148 1.768 2.241 1.93.169.295.078 1.166-.246 2.612-1.322 5.854-4.07 8.716-8.246 8.592-4.176-.124-7.527-2.811-10.167-8.066-2.64-5.255-4.404-9.604-5.246-13.046-.19-.767-.314-1.313-.371-1.638l-1.484.391z"/></svg>
            </a>

            {/* Facebook Button (Messenger/Page link) */}
             <a href="https://m.me/YOUR_FACEBOOK_PAGE_OR_PROFILE" target="_blank" rel="noopener noreferrer" className="bg-blue-700 p-3 rounded-full shadow-lg hover:bg-blue-800 transition-colors duration-200">
                 {/* Replace with an actual Facebook/Messenger icon SVG or Font Awesome icon */}
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.152 0 12.161c0 5.053 3.104 9.34 7.5 11.164V14.81H4.539V12.16H7.5V9.954c0-3.062 1.772-4.724 4.576-4.724 1.31 0 2.569.234 2.569.234v2.81H13.27c-1.501 0-1.972.931-1.972 1.893v2.247h3.232l-.518 2.65H11.3V23.325C16.886 21.23 20.5 16.96 20.5 12.161 20.5 5.152 15.127 0 12 0z"/></svg>
             </a>
             {/* Optional: Zalo button if needed - you'd need the icon */}
             {/* <a href="..." target="_blank" rel="noopener noreferrer" className="bg-blue-400 p-3 rounded-full shadow-lg hover:bg-blue-500 transition-colors duration-200">
                  <svg>...</svg>
             </a> */}
       </div>

    </footer>
  );
};