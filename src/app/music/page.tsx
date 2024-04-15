"use client"

import BackButton from "../backbutton/page"
import Image from "next/image"
import Link from "next/link"
import Footer from "../footer/page"

export default function Music() {

    const songs = [
        {id: 1 , name: 'Obapluto' , url: 'https://open.spotify.com/track/0L6QKYIe8SebHLBk0YFaGP?si=92d3a418fc354bd7' , image: '/obapluto.jpeg'},
        {id: 2 , name: 'Oscroh' , url: 'https://open.spotify.com/track/5Trqt6aqWnhqAcWS4Zto7v?si=4ef7e2c7d8604767' , image: '/oscroh.jpeg'},
        {id: 3 , name: 'Things on things' , url: 'https://open.spotify.com/track/2pIQ4AKOtPukeUltnNsTWZ?si=004cef2e0de246ab' , image: '/thingsonthings.jpeg'},
        {id: 4 , name: 'Wet on me' , url: 'https://open.spotify.com/track/1V0fn2z6DXgpCAeyC0qd9k?si=273b7ea7b7eb46e7' , image: '/wet on me.jpeg'},
        {id: 5 , name: 'Childs play' , url: 'https://open.spotify.com/track/7nr3wqDwJkiSDbcbct67Um?si=bc0b2956dd9b460a' , image: '/childsplay.jpeg'},
        {id: 6 , name: 'Ex-convict' , url: 'https://open.spotify.com/track/5O7fTE396BVFRTkQv5ENSo?si=7f52a9530763499a' , image: '/exconvict.jpeg'},
        {id: 7 , name: 'Evil Recieve' , url: 'https://open.spotify.com/track/487d7D0DF6hPsXQmW5g8pn?si=f993614a9aff464b' , image: '/evil recieve.jpeg'},
        {id: 8 , name: 'Billion' , url: 'https://open.spotify.com/track/3dWsXUC1wvR66VwBQx3xCd?si=899e53c60d05474e' , image: '/billion.jpeg'},
        {id: 9 , name: 'Puff & Pass' , url: 'https://open.spotify.com/track/7CIhImlbs2RtT58oKnvROT?si=ea907c84711943f0' , image: '/puffpuffpass.jpeg'},

    ] 
    
    return(
        <div>
            <BackButton />
            
            <p className="text-green-400 text-3xl text-center font-bold mx-auto xl:w-[40%] mb-20 w-[80%] px-3 py-3 border-white border-2 hover:transform hover:scale-110 hover:text-white">LISTEN NOW</p>

            <div className="grid grid-cols-2 mt-10">
                {songs.map((song) => (
                   <Link href={song.url} key={song.id}>  <div >
                        <Image src={song.image} alt="image" width={400} height={400} className="w-[60%] mx-auto"/>
                        <p className="px-10 xl:text-center pb-10 text-xl font-medium">{song.name}</p>
                    </div>
                    </Link>
                ))}
            </div>
            <Footer />
        </div>
    )
}