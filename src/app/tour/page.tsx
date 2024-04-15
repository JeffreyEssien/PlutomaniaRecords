"use client"

import BackButton from "../backbutton/page"
import { useState } from "react"

export default function Tour() {

    const [upcoming, setUpcoming] = useState(false)

    const handleUpcoming = () => {
        setUpcoming(true)
    }

    return(
        <div>
            <BackButton />
            <p className="text-5xl text-green-400 font-black text-center py-5">Tour</p>

            <div className="flex justify-around">
                <button className="text-2xl font-medium" onClick={handleUpcoming}>Upcoming</button>
                <button className="text-2xl font-medium">Past Dates</button>
            </div>

            {upcoming && (
            <div>
                
                <div className="slide-in">
                    <p className="text-3xl text-center py-10 font-bold">Shallipopi</p>
                    <div className="flex flex-row mx-auto w-[90%] my-5">
                        <div className="flex flex-col bg-green-500 px-2 mx-2 w-[15%] text-center rounded-xl">
                            <h3>Apr</h3>
                            <h4>19</h4>
                        </div>
                        <div className="flex flex-col mx-2">
                            <h3 className="text-xl font-medium">Manchester, UK</h3>
                            <h4>Bowlers Exhibition Centre</h4>
                        </div>
                        <div className="mx-2">
                            <button className="text-xl py-2 px-2">Tickets</button>
                        </div>
                    </div>

                    <div className="flex flex-row mx-auto w-[90%] my-5">
                        <div className="flex flex-col bg-green-500 px-2 mx-2 w-[15%] text-center rounded-xl">
                            <h3>Apr</h3>
                            <h4>20</h4>
                        </div>
                        <div className="flex flex-col mx-2">
                            <h3 className="text-xl font-medium">Glasgow, UK</h3>
                            <h4>SWG3</h4>
                        </div>
                        <div className="mx-2">
                            <button className="text-xl py-2 px-2">Tickets</button>
                        </div>
                    </div>
                </div>
               

                <div className="flex flex-row mx-auto w-[90%] my-5">
                        <div className="flex flex-col bg-green-500 px-2 mx-2 w-[15%] text-center rounded-xl">
                            <h3>Apr</h3>
                            <h4>27</h4>
                        </div>
                        <div className="flex flex-col mx-2">
                            <h3 className="text-xl font-medium">Minneapolis, MN, US</h3>
                            <h4>Uptown Theatre</h4>
                        </div>
                        <div className="mx-2">
                            <button className="text-xl py-2 px-2">Tickets</button>
                        </div>
                    </div>

                    <div className="flex flex-row mx-auto w-[90%] my-5">
                        <div className="flex flex-col bg-green-500 px-2 mx-2 w-[15%] text-center rounded-xl">
                            <h3>May</h3>
                            <h4>2</h4>
                        </div>
                        <div className="flex flex-col mx-2">
                            <h3 className="text-xl font-medium">Boston, MA, US</h3>
                            <h4>Big Night Live</h4>
                        </div>
                        <div className="mx-2">
                            <button className="text-xl py-2 px-2">Tickets</button>
                        </div>
                    </div>

                <div>
                    <p className="text-3xl text-center py-10 font-bold">Zerrydl</p>
                    <p className="text-center">No Dates Yet</p>
                </div>

                <div>
                    <p className="text-3xl text-center py-10 font-bold">Tega Boi Dc</p>
                    <p className="text-center">No Dates Yet</p>
                </div>

                <div>
                    <p className="text-3xl text-center py-10 font-bold">Jeneral</p>
                    <p className="text-center">No Dates Yet</p>
                </div>

                <div>
                    <p className="text-3xl text-center py-10 font-bold">Reehaa</p>
                    
                    <p className="text-center">No Dates Yet</p>

                </div>
                
            </div>
             )}
        
        </div>
    )
}