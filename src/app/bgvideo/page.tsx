import NextVideo from "next-video"

export default function BgVideo() {



    return(
        <div className="flex justify-center pb-10 h-[700px]">
            <video autoPlay loop muted className="absolute w-[95%] h-2/3 object-cover " src="/plutoVid.mp4" />
                 
        </div>
    )
}