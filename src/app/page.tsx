"use client"

import Image from "next/image";
import BgVideo from "./bgvideo/page";
import Link from "next/link";
import { FaBars, FaBriefcase } from 'react-icons/fa'
import { useState } from "react";
import Footer from "./footer/page";


export default function Home() {

  const options = [
    { id: 1, title: 'The Label', url: '/thelabel' },
    { id: 2, title: 'The Artists', url: '/artists' },
    { id: 3, title: 'Music', url: '/artists' },
    { id: 4, title: 'Video', url: '/artists' },
    { id: 5, title: 'Tour', url: '/artists' },
    { id: 6, title: 'Shop', url: '/artists' },
    { id: 7, title: 'Verified Plutocanapist', url: '/artists' },

  ]

  const [isNavbarOpen, setIsNavbarOPen] = useState(false)

  const handleNavbar = () => {
    setIsNavbarOPen(true)
  }

  const handleClose = () => {
    setIsNavbarOPen(false)
  }

  return (
    <div className="">
      <p className="text-4xl px-4 py-4 " onClick={handleNavbar}><FaBars /></p>
      {isNavbarOpen && (

        <div>

          <div className="flex flex-wrap flex-col justify-around w-2/3 mx-auto text-center my-5 py-5 space-y-3 shadow-lg shadow-grat lg:flex-row justify-around slide-in">
            <button className="text-green-400 xl:hidden" onClick={handleClose}>Close</button>
            {options.map((option) => (

              <div key={option.id}>
                <Link href={option.url}><p className="yourClassname">{option.title}</p></Link>
              </div>


            ))}

          </div>

        </div>
      )}
      <p className="font-black text-center text-4xl text-green-600 mt-10 xl:text-6xl xl:tracking-widest">PLUTOMANIA RECORDS 🪐</p>
        <p className="text-center text-white text-xl mb-10 flex justify-center xl:text-2xl xl:tracking-widest">Family business <span className="text-center mx-4
        2 my-1"><FaBriefcase /></span> </p>


      <BgVideo />
      <Footer />
    </div>
  );
}
