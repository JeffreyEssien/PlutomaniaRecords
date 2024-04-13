'use client'

import { useRouter } from "next/navigation"
import { FaAngleLeft } from 'react-icons/fa'

export default function BackButton() {

    const router = useRouter();


    const handleGoBack = () => {
        router.back();
      };

    return(
        <div>
            <button onClick={handleGoBack} className="text-5xl px-4 py-4"><FaAngleLeft /></button>
        </div>
    )
}