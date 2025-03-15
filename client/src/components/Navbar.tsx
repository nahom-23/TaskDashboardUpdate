import React from 'react'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-12 mt-6">
        <h2 className="text-xl font-semibold">Hello Evano 👋🏼</h2>
        <input
          type="text"
          placeholder="Search"
          className="border rounded p-2 w-1/3"
        />
      </div>
  )
}

export default Navbar