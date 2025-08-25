"use client"
import { motion } from "motion/react"
import Link from "next/link"


//fonts
import {inter,pacifico} from '@/fonts/font'
import { ModeToggle } from "./Modetoggle"
import { redirect } from "next/navigation"

const Navbar = () => {
    
    
      return (
    <div>
        <div className="flex justify-between px-40 py-7 items-center">
            <div className={"logo text-2xl  " + pacifico.className}>SNAPSCOUT</div>
            <div className={"links flex gap-10 font-[Poppins] text-gray-500 dark:text-white transition-all duration-200"}>
                <Link href={"/models"}>Find Models</Link>
                <Link href={"/models"}>Browse Jobs</Link>
                <Link href={"/models"}>Agencies</Link>
            </div>
                
            <div className="signup-buttons flex gap-5 items-center font-[Poppins]">
                
                <motion.button  whileTap={{scale:1.1}} className= "text-white bg-black dark:text-black dark:bg-white px-7 py-2 rounded-xl hover:cursor-pointer  ">
                    <Link href={"/auth/signin"}>Get Started</Link>
                </motion.button>
                
                <div>
                    <ModeToggle/>
                </div>

            </div>
            
        </div>
    </div>
  )
}
export default Navbar