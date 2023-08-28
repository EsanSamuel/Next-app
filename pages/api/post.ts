import connectDB from "@/libs/mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary } from 'cloudinary'
import Post from "@/models/post";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST' && req.method !== 'GET') {
        return res.status(405).end()
    }

    cloudinary.config({
        cloud_name: 'dirm0bwdw',
        api_key: '244737511899697',
        api_secret: 'LBf0Bay00WC4w1bonkdeapChUO4',
    })

    try {
        if (req.method === 'POST') {
            connectDB()

            const {  name, postedAt, details, email, Price } = req.body
            

            const options = {
                use_filename: true,
                unique_filename: false,
                overwrite: true,
                transformation: [{ width: 1000, height: 752, crop: "scale" }],
            };

            //const PhotoUrl = await cloudinary.uploader.upload(image, options)

            const posts = await Post.create({
                //image: PhotoUrl.url,
                name,
                postedAt,
                details,
                email,
                Price
            })

            return res.status(201).json(posts)
        }

        if (req.method === 'GET') {
            connectDB()
            const posts = await Post.find()

            return res.status(201).json(posts)
        }
    } catch (error) {
        console.log(error)
        return res.status(405).end()
    }
}