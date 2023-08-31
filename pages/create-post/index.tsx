
import Button from '@/components/Button'
import React, { ChangeEvent, ReactNode, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'


const index = () => {
  const { data: session } = useSession()
  const [image, setImage] = useState('')
  const [email, setEmail] = useState('esansamuel555@gmail.com')
  const [name, setName] = useState('Samuel Esan')
  const [details, setDetails] = useState('')
  const [Price, setPrice] = useState('')
  const [postedAt, setPostedAt] = useState('now')
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<any>([])
  const router = useRouter()


  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    const file = e.target.files?.[0]

    if (!file) return

    if (!file.type.includes('image')) {
      alert('Please upload an image')

      return
    }

    const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = () => {
      const result = reader.result as string

      setImage(result)
    }
  }

  const submit = async () => {
    setIsLoading(true)

    try {
      const response = await axios.post('/api/post', { name, email, details, Price, postedAt, image })
      console.log(response)

      router.push('/')
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const getData = async () => {
    const response = await axios.get('/api/post')

    console.log(response)
    setData(response.data)
  }

  useEffect(() => {
    getData()
  }, [])

  const Delete = async (_id: string) => {
    await axios.delete(`/api/post/${_id}`)
  }

  return (
    <div className='sm:px-20 bg-[#13131a] text-white p-5 pt-10  h-auto '>
      <div className='min-h-[100vh]'>


        {/*{data.reverse().map((datas: Record<string, any>) => (
        <div key={datas.id}>
          {datas.details}
          <Link href='/home' ><Image src={datas.image} alt='image' width={100} height={100} /></Link>
          <h1 onClick={Delete}>delete</h1>
        </div>
      ))}*/}





        {!image && <div className='w-full  p-10 rounded text-center h-[250px] border border-[#5f5f5f] '>
          <div>
            <input type='file' onChange={handleImageChange} className='w-full h-full opacity-0 pb-3' /></div>
          <h1 className='font-bold'>Select Image</h1>

        </div>}

        {image && <div className='p-20 h-auto border rounded flex items-center justify-center border-[#5f5f5f] '>
          {image && <Image src={image} alt='image' width={400} height={400} />}
        </div>}

        <div className='w-full h-[150px] bg-purple-500 mt-10 p-10 rounded text-center'>Post your hostel for people to see and purchase</div>

        <div className=' space-y-5 pt-10 w-full'>
          <div className='sm:flex justify-between gap-3'>

            <input className='w-full h-[40px] p-3 pb-5 rounded border bg-transparent border-[#5f5f5f] ' placeholder='Enter Hostel name'
              onChange={(e) => setDetails(e.target.value)}
              value={details} />


            <input className='w-full h-[40px]  p-3 rounded border bg-transparent border-[#5f5f5f] ' placeholder='Enter Hostel Price' onChange={(e) => setPrice(e.target.value)}
              value={Price} />

          </div>

          <div className='sm:flex justify-between gap-3'>

            <input className='w-full h-[40px]  p-3 pb-5 rounded border border-[#5f5f5f]  bg-transparent' placeholder='Enter Hostel details'
              onChange={(e) => setEmail(e.target.value)}
              value={session?.user?.email} />


            <input className='w-full h-[40px]  p-3 rounded border border-[#5f5f5f]  bg-transparent' placeholder='Enter Hostel details' onChange={(e) => setName(e.target.value)}
              value={session?.user?.name} />

          </div>


          <textarea className='border w-full rounded min-h-[200px]  border-[#5f5f5f] p-5 bg-transparent' placeholder='Enter Details'></textarea>

          <div>
            {!isLoading && <button onClick={submit} className='bg-green-500 px-5 py-2 rounded text-white'>Post</button>}
            {isLoading && <button className='bg-green-500 px-5 py-2 rounded text-white'>Posting...</button>}
          </div>
        </div>



      </div>
    </div>

  )
}

export default index