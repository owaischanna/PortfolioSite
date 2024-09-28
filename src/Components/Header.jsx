import React from 'react';

const Header = () => {
  return (
    
    <header className="flex flex-col items-center justify-right min-h-7 text-center mt-20 ml-20">
      <img
        src="https://images.squarespace-cdn.com/content/v1/59d3e6cef09ca42ec71380db/1590717144675-UFF10TADHHLVSQQNQ7Y7/asset-signature.png?format=750w"
        alt="Logo"
        className="w-auto h-24 mb-12"
      />
     <p className="text-base sm:text-lg md:text-xl font-light leading-loose text-gray-500 max-w-4xl px-4 sm:px-6 md:px-8 sm:-ml-4">
  I’m a hands-on design leader who specializes in leading complex zero-to-one initiatives at fast-paced startups. Whether leading a small design team, overseeing an 80-person initiative, or pushing pixels myself, I do what it takes to create products that define and shape businesses.
</p>

    </header>
  );
};

export default Header;
