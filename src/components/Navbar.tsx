"use client"
import { motion } from "motion/react"
import Link from "next/link"

//fonts
import {inter,pacifico} from '@/fonts/font'
const Navbar = () => {
    
  return (
    <div>
        <div className="flex justify-between px-40 py-7 items-center">
            <div className={"logo text-2xl " + pacifico.className}>SNAPSCOUT</div>
            <div className={"links flex gap-10 font-[Poppins]"}>
                <Link href={"/models"}>Find Models</Link>
                <Link href={"/models"}>Browse Jobs</Link>
                <Link href={"/models"}>Agencies</Link>
            </div>
            
            <div className="signup-buttons flex gap-5 font-[Poppins]">
                <motion.button whileTap={{scale:1.1}} className="text-black bg-white px-7 py-2 rounded-xl hover:cursor-pointer">Signup</motion.button>
                <motion.button whileTap={{scale:1.1}} className="text-black bg-white px-7 py-2 rounded-xl hover:cursor-pointer">Login</motion.button>

            </div>
            
        </div>
    </div>
  )
}
export default Navbar