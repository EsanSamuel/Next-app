import Image from 'next/image'
import React from 'react'
import axios from 'axios'

interface Props {
    _id: string
    name: string
    details: string
    image: string
    Price: string
    postedAt: string
    email: string


}

const Card = ({ _id, name, details, image, Price, postedAt, email }: Props) => {

    const Delete = async () => {
        await axios.delete(`/api/post`)
    }
    return (
        <div className='text-[#eaeaea]  border-[#5f5f5f] rounded w-full box h-auto min-h-[20px]'>

            <Image src={image} alt={name} width={100} height={100} className='w-full h-[250px] rounded-[10px]' />
            <div className=' p-5 space-y-2 w-full'>
                <div className='flex justify-between'>
                    <h1>{details}</h1>
                    <p>{Price}</p>
                </div>
                <p className='text-[#5f5f5f] text-[12px]'>Stay with {name}</p>
                <button className='w-full bg-green-500 rounded p-2'>Price</button>


            </div>
        </div>
    )
}

export default Card