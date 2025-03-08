import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative bg-[#1a1c20] mt-[100px] overflow-hidden"
      id="home"
    >
    
      <div className="relative max-w-[1200px] mx-auto flex flex-col md:flex-row items-center text-center md:text-left py-[15vh] px-6 md:px-8">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl leading-tight text-gray-500">
            <span className="text-white text-xl md:text-2xl block mb-3">
              Hi, I'm
            </span>
            Samuel <br />
            Martei
          </h1>
          <h2 className="text-lg md:text-2xl text-white leading-relaxed mt-3 md:mt-4 mb-6">
            A <strong className="text-white">web programmer and technical trainer</strong> dedicated to empowering individuals 
            and organizations with cutting-edge web solutions and technical expertise.
          </h2>
          <a
            href="#Projects"
            className="inline-block px-10 py-4 md:px-12 md:py-5 border-2 border-gray-500 text-white uppercase font-bold tracking-wider text-sm md:text-base hover:bg-gray-500 transition-all duration-300 rounded-full"
          >
            View Projects
          </a>
        </div>

        {/* Normal Image (Only for larger screens) */}
        <div className="hidden md:block flex-1 relative">
          <Image
            src="/Prof.jpg"
            width={600}
            height={600}
            alt="portrait"
            className="w-full max-w-[400px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
