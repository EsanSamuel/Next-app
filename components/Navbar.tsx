import React from 'react'
import Button from './Button'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex justify-between p-5  bg-[#13131a] text-white'>
      <Link href='/'><h1 className='font-bold text-[25px]'>Hostinger.</h1></Link>
      <div className='flex gap-6 mt-3'>

      </div>
      <Button />
      <div className='border p-2 rounded border-[#5f5f5f] sm:hidden'>
        <AiOutlineMenu className='sm:hidden text-[20px] font-bold ' />
      </div>
    </div>
  )
}

export default Navbar