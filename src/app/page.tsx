import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"

const page = () => {
  return (
    <div>
      <div className=" h-screen">
        <Navbar/>
        <div className="hero-section">
          <Hero/>
        </div>

      </div>
      
    </div>
  )
}
export default page