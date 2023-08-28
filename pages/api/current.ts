import serverAuth from "@/libs/session";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(400).end()
    }

    try {
        const { currentUser } = await serverAuth(req, res)

        return res.status(200).json(currentUser)
    } catch (error) {
        console.log(error)
        return res.status(400).end()
    }

}