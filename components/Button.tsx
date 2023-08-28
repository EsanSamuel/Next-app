import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"
import { toast } from 'react-hot-toast'

const Button = () => {
    const { data: session } = useSession()

    const SignIn =  () => {
         signIn()
        toast.success('Signed in')
    }

    if (session) {
        return (
            <div className="">
                <div className="flex gap-3">
                Signed in as {session?.user?.email} <br />
                <div>
                    <Image src={session?.user?.image} width={30}
                        height={30}  alt='hello' className="rounded-full"/>
                </div>
                </div><br/>
                <button onClick={() => signOut()} className='p-2 rounded border'>Sign out</button>
                
            </div>
        )
        }
    return (
        <>
            Not signed in <br />
            <button onClick={SignIn} className='p-2 rounded border'>Sign in</button>
        </>
    )
}

export default Button