import Button from '@/components/Button'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import axios from 'axios'

const index = () => {
  const { data: session } = useSession()
  const [image, setImage] = useState('')
  const [email, setEmail] = useState('s')
  const [name, setName] = useState('s')
  const [details, setDetails] = useState('')
  const [Price, setPrice] = useState('')
  const [postedAt, setPostedAt] = useState('now')
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<any>([])


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

      setImage('image')
    }
  }

  const submit = async () => {
    setIsLoading(true)

    try {
      const response = await axios.post('/api/post', { name, email, details, Price, postedAt })
      console.log(response)
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



  return (
    <div className='p-5'>
      <Button />


{data.map((datas: Record<string, any>) => (
          <div key={datas.id}>
            kk{datas.details}
          </div>
        ))}

      <div className='w-full'>
        <input type='file' onChange={handleImageChange} />
        <div className='p-20 h-auto'>
          {image && <Image src={image} alt='image' width={400} height={400} />}
        </div>

        <div className='px-20 space-y-5'>
          <input className='w-full h-[40px] border border-[#5f5f5f] p-3 pb-5 rounded' placeholder='Enter Hostel details'
            onChange={(e) => setDetails(e.target.value)}
            value={details} />
          <input className='w-full h-[40px] border border-[#5f5f5f] p-3 rounded' placeholder='Enter Hostel details' onChange={(e) => setPrice(e.target.value)}
            value={Price} />

          {!isLoading && <button onClick={submit}>Post</button>}
          {isLoading && <button >Posting...</button>}
        </div>

        

      </div>
    </div>
  )
}

export default index