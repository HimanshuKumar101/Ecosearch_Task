import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#8eb486] pt-[60px] text-white py-10 px-4 ">
      <div className="max-w-7xl mx-5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-10 md:mb-0">
            <h2 className="text-2xl font-black">EcoSearch</h2>
          </div>
        </div>
        <div className=" pt-8">
          <p className="text-md font-semibold">© 2025 EcoSearch</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

