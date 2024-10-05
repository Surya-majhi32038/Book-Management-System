import React from 'react'

function Header() {
  return (
    <div>
        <nav className='top-0 flex items-center p-10 text-white bg-gray-800 h-5 text-xl font-semibold  justify-center md:justify-normal'>
            <div
              className='ml-[-10px] cursor-pointer hover:bg-violet-700 duration-500 hover:border-violet-700 hover:text-yellow-500   rounded-full py-2 px-4 border-2'
            >Surya Majhi</div>
        </nav>
    </div>
  )
}

export default Header