import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import Card from '@/components/Card'
import Sidebar from '@/components/Sidebar'
import { useSession } from 'next-auth/react'

const page = () => {
  const { data: session } = useSession()
  const [data, setData] = useState<any>([])
  const getData = async () => {
    const response = await axios.get('/api/post')

    console.log(response)
    setData(response.data.reverse())
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='sm:p-10 p-5 bg-[#13131a] flex gap-3'>

      <div>
        <div className='sm:flex hidden absolute'>
          <Sidebar />
        </div>

        <div className='sm:px-20 '>
          <div>
            <h1 className='text-white sm:text-[25px] text-[20px]'>Hello, {session?.user?.name}.</h1>
          </div>


          <div className='grid grid-cols-1 gap-4 sm:grid-cols-4  mt-10 w-full'>
            {data.map((datas: Record<string, any>) => (
              <div className='data w-full'>
                <Card key={datas.id} {...datas} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
