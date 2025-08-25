"use client"
import { roboto } from "@/fonts/font"
import { motion } from "motion/react"

const Hero = () => {
  return (
    <div className="h-full flex flex-col ">
        
        {/* <div className=" text-lg  text-center mt-30">
            Connecting Top Talent with the Best Gigs in Fashion & Media
        </div> */}
        <div className={"font-semibold tracking-tighter leading-25 text-8xl mt-30"   }>
            <h1 className="text-center mt-3  mx-auto ">Connecting Talent </h1>
        <h1 className=" mx-auto text-center mt-1 ">with <span className="dark:text-pink-400 text-pink-600">Gigs</span></h1>
        </div>
        <div className={"tracking-tight font-light w-200 mx-auto text-xl mt-10 " + roboto.className}>
        <div className=" text-center  mx-auto ">Whether you're a model looking for your next big break or an agency scouting top talent </div>
        <div className=" text-center  mx-auto ">   you've come to the right place. </div>
        </div>

        <div className="buttons mx-auto mt-10 w-100 flex justify-center gap-7">
            <motion.button whileTap={{scale:1.1}} className= "text-white bg-black dark:text-black dark:bg-white px-7 py-3 rounded-xl hover:cursor-pointer  ">Create Profile</motion.button>
            <motion.button whileTap={{scale:1.1}} className= "text-black bg-gray-100  dark:text-white dark:bg-black px-7 py-3 rounded-xl  border-1 border-gray-800/30 dark:border-white hover:cursor-pointer">Post Job</motion.button>
        </div>
    </div>
  )
}
export default Hero