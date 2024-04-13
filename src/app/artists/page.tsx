"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FaAngleLeft } from 'react-icons/fa'
import Footer from "../footer/page"

export default function Artists() {

    const router = useRouter();


    const handleGoBack = () => {
        router.back();
      };

    const artists = [
        {id: 1, name: 'Shallipopi' , image: '/shallipopi.jpg' , url: '/artists/shallipopi' },
        {id: 2, name: 'ZerryDl' , image: '/zerrydl.jpg' , url: '/artists/zerrydl' },
        {id: 3, name: 'Tega Boi Dc' , image: '/tegaboidc.png' , url: '/artists/tegaboidc'},
        {id: 4, name: 'Reehaa' , image: '/reeha.jpg' , url: '/artists/reeha'},
        {id: 5, name: 'Jeneral' , image: '/shallipopi.jpg' , url: '/artists/jeneral'},
    ]

    return(
        <div>
            <button onClick={handleGoBack} className="text-5xl px-4 py-4"><FaAngleLeft /></button>
            <p className="text-center text-5xl py-20 font-bold mb-5 text-green-500">PLUTOMANIA ARTISTS</p>
 
                <div className="text-center flex flex-col xl:grid-cols-3 xl:grid xl:col-span-2 items-center justify-around space-y-4">   
            {artists.map((artist) => (
               <Link href={artist.url}  key={artist.id}><div>
                    <Image src={artist.image} alt="image" width={690} height={100} className="w-[80%] h-[40%] mx-auto"/>
                    <p className="artistDiv"> {artist.name}</p>
                </div>
                </Link>
            ))}
            </div>
            <Footer />
        </div>
    )
}