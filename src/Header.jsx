import React from 'react'

function Header() {
  return (
    <>
 <header className="bg-white shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between">
        <img src="logo.png" alt="Logo" className="h-10 mr-4" />
        <div className="flex-grow">
          <nav className="flex justify-center space-x-8 font-bold">
            <a href="#" className="text-gray-700 hover:text-green-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-green-600">About</a>
          </nav>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header