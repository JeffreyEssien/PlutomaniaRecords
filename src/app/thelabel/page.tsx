import BackButton from "../backbutton/page";
import Footer from "../footer/page";
import image1 from '../images/logonobgwhite.png'
import Image from "next/image";


export default function TheLabel() {

    return (
        <div>
            <BackButton />

            <p className="text-4xl font-bold px-5 text-green-400 xl:text-7xl">The Label</p>

                <div className="flex flex-col xl:flex-row ">

                <div className="xl:w-[75%] ">
            <p className="text-2xl px-4 my-8 xl:text-4xl xl:px-8 xl:font-bold">Plutomania Records: A Rising Star in Afrobeat </p>
                
                <p className="text-lg px-8 xl:w-[90%] xl:px-10 xl:text-xl xl:font-medium">
                Founded in October 2023 by Nigerian music sensation <span className="text-green-400">Shallipopi</span>, Plutomania Records is a fresh face in the Afrobeat scene. Building on <span className="text-green-400">Shallipopi's</span> own success with his "Planet Pluto" EP and hit singles, the label is quickly gaining recognition.
                </p>
                <p className="text-lg px-8 my-3 xl:w-[90%] xl:px-10 xl:text-xl xl:font-medium mb-10">
                Focused on Afrobeat and related genres, Plutomania Records has already signed four additional artists, <span className="text-green-400">ZerryDL</span>, <span className="text-green-400">Tega Boi</span>, <span className="text-green-400">Reeha</span>, <span className="text-green-400">Jeneral</span>, hinting at a growing roster. Shallipopi's prior experience in the music industry likely contributes to the label's early traction.</p>
                </div>

                <div className="xl:w-[25%] px-4 mx-auto">
                    <Image src={image1} alt='image' width={700} className="xl:w-[90%]"/>
                </div>

                </div>
                <Footer />
        </div>
    )
}