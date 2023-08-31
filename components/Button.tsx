import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { toast } from 'react-hot-toast'

const Button = () => {
    const [modal, setModal] = useState(false)
    const { data: session } = useSession()

    const SignIn = () => {
        signIn()
        toast.success('Signed in')
    }

    if (session) {
        return (
            <div className="xl:flex hidden">
                <div className="flex gap-3">
                    {/*<h1 className="mt-2">Signed in as {session?.user?.email}</h1> <br />*/}
                    <div className='flex gap-3'>
                        <Link href='/create-post'> <button className="p-2 rounded  float-right text-white  bg-purple-500">Create Post</button></Link>
                        {!modal && <Image src={session?.user?.image} width={40}
                            height={40} alt='hello' className="rounded-full" onClick={() => setModal(true)} />}
                        {modal && <Image src={session?.user?.image} width={40}
                            height={40} alt='hello' className="rounded-full" onClick={() => setModal(false)} />}
                    </div>
                </div>
                <div className="p-3">
                    {modal && <button onClick={() => signOut()} className='p-2 rounded  float-right text-white  bg-purple-500'>Sign out</button>}
                </div>
            </div>
        )
    }
    return (
        <div className="flex gap-4">
            <h1 className="float-right mt-2">Not signed in</h1> <br />
            <button onClick={SignIn} className='p-2 rounded  bg-purple-500 text-white'>Sign in</button>
        </div>
    )
}

export default Button