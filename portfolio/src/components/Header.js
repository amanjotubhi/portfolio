import React from 'react';

const Header = () => {
  return (
    <header className="text-center bg-green-500 text-white py-6">
      <h1 className="text-4xl font-bold">Aman Ubhi</h1>
      <p className="mt-2">Aspiring Full-Stack Developer | Problem Solver | Tech Enthusiast</p>
      <nav className="mt-4">
        <a className="mx-4 text-lg" href="#about">About</a>
        <a className="mx-4 text-lg" href="#projects">Projects</a>
        <a className="mx-4 text-lg" href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
