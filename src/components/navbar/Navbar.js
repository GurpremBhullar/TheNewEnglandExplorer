import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
            <h2>CARS</h2>
        </div>
        <ul className='nav-menu'>
        <il>Home</il>
        <il>Destination</il>
        <il>Travel</il>
        <il>Book</il>
        <il>Views</il>
        </ul>
        <div className="nav-icons">
            <BiSearch />
            <BiPerson />
        </div>
    </div>
  )
}

export default Navbar