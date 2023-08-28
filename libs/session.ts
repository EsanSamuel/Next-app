import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getServerSession(req, res, authOptions)

    const currentUser = session?.user?.email

    if (!currentUser) {
        throw new Error('Invalid')
    }

    return { currentUser }
}

export default serverAuth