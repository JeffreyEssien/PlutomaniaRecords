"use client"

import YouTube from "react-youtube"
import BackButton from "../backbutton/page";
import Footer from "../footer/page";

export default function Video() {

    const opts = {
        height: '300',
        width: '400',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            controls: 1,
            rel: 0, // Hide related videos
        },
    };

    const videoId = [
        {id: 'OVCvXFDQdVc' , name: 'Obapluto'},
        {id: 'Ir7mWbkHu4w' , name: 'Asap'},
        {id: 'VO34dLaPrM8' , name: 'Wet On Me'},
        {id: '5IGh09-DPX4' , name: 'Oscroh'},
        {id: 'dGUPKXtNJ8Y' , name: 'Things on things'},
        {id: '546V71zODtk' , name: 'Elon Musk'}
    ]

    return (
        <div>
            <BackButton />
            <p className="text-5xl px-8 py-8 text-green-400 font-bold">Videos</p>
            {/* <iframe src="https://youtu.be/OVCvXFDQdVc" width={500} height={500} allowFullScreen /> */}

            <div className="xl:grid xl:grid-cols-3 flex flex-col my-10 px-4 mx-auto">
                {videoId.map((video) => (
                    <div key={video.id}>
                <YouTube videoId={video.id} opts={opts}/>
                <p className="text-2xl">{video.name}</p>
                </div>
             ))}
            </div>

          <Footer />   
        </div>
    )
}