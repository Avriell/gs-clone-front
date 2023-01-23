import React, { useState, useEffect } from 'react'

const Navbar = () => {
    return (
      <nav className="bg-gray-800 text-white p-2">
        <div className="container mx-auto">
          <a href="#" className="text-lg font-medium">
            GameStop Clone
          </a>
          <div className="flex justify-end">
            <a href="#" className="mr-4">
              Home
            </a>
            <a href="#" className="mr-4">
              About
            </a>
            <a href="#">Contact</a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;