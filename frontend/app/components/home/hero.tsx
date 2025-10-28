import { Application } from "@/app/config/constants";

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center flex flex-col gap-5">
        <h1 className="text-5xl lg:text-7xl font-bold bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          {Application.name}
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {Application.description}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-20">

      </div>
    </div>
  )
}

export default Hero;