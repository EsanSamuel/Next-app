import React from 'react'
import { CiHome, CiSettings, CiLogout, CiSearch } from 'react-icons/ci'
import { CgProfile } from 'react-icons/cg'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

const Sidebar = () => {
  const { data: session } = useSession()
  return (
    <div className='text-[25px] text-[#5f5f5f] space-y-9 fixed'>
      <CiHome className='hover:text-green-500' />
      <CiSearch className='hover:text-green-500' />
      <CiSettings className='hover:text-green-500' />
      <CgProfile className='hover:text-green-500' />
      <CiLogout className='hover:text-green-500' />
      <div className='fixed bottom-8'>
        <Image src={session?.user?.image} width={40} height={40} alt='hello' className="rounded-full" />
      </div>
    </div>
  )
}

export default Sidebar