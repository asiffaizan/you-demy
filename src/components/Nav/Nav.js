import React from 'react'
import '../Nav/Nav.css'

export default function Nav() {
  const anchorStyle = 'px-7 cursor-pointer font-bold hover:text-[#C039F5] active:text-red-200 duration-300'
  return (
    <nav className='flex flex-row justify-between p-5 items-center border border-b-2'>
        <a href="/">
          <img src='/you-demy-logo.png' alt='YouDemy Logo' className='w-28' />
        </a>
        <div className='flex flex-row justify-between items-center'>
            <a href='/' className={`active ${anchorStyle}`} checked>All Courses</a>
            <a href='/courses' className={anchorStyle}>My Courses</a>
            <a href='/overview' className={anchorStyle}>Overview</a>
        </div>
    </nav>
  )
}
