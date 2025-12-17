import React from 'react';
import { MapPin } from 'lucide-react';
import { DalitFlower, SunBurst } from './Decorations';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex flex-col justify-center bg-dalitCream">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 translate-x-1/3 -translate-y-1/3 opacity-20">
        <SunBurst className="w-full h-full animate-spin-slow" />
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-80 md:h-80 -translate-x-1/4 translate-y-1/4">
        <DalitFlower className="w-full h-full" color="fill-dalitRed" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-12 gap-8 items-center">
        {/* Left Column: Vertical Text & Social Stats (Desktop) */}
        <div className="hidden md:flex md:col-span-1 flex-col items-center justify-center h-full gap-8 border-r-2 border-dalitBrown/20 py-12">
           <div className="text-vertical font-syne font-bold text-dalitBlue tracking-widest text-xs uppercase">
              Est. Prayagraj
           </div>
           <div className="h-24 w-0.5 bg-dalitBrown/20"></div>
           <div className="text-vertical font-syne font-bold text-dalitRed tracking-widest text-xs uppercase">
              Anti-Caste
           </div>
        </div>

        {/* Center: Main Content */}
        <div className="col-span-12 md:col-span-7 flex flex-col gap-6">
          <div className="inline-block bg-dalitBlue text-dalitYellow px-4 py-1 font-bold font-syne uppercase text-sm tracking-widest w-max transform -rotate-2">
            Led by Dalit Trans Women
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-dalitBrown uppercase">
            Savitribai <br/>
            <span className="text-dalitRed">Phule</span> <br/>
            Village <br/>
            <span className="text-dalitBlue outline-text">Library</span>
          </h1>

          <div className="w-24 h-4 bg-dalitYellow"></div>

          <p className="font-syne text-xl md:text-2xl text-dalitBrown max-w-xl font-bold">
            Anti-Caste Feminist Free Library & Resource Centre
          </p>
          
          <div className="flex items-center gap-2 text-dalitBrown/80 font-medium">
            <MapPin size={20} className="text-dalitRed" />
            <span>Khash Singhgarh, Prayagraj, Uttar Pradesh</span>
          </div>
        </div>

        {/* Right: Image/Visual */}
        <div className="col-span-12 md:col-span-4 relative">
          <div className="relative z-10 bg-dalitBeige rounded-tl-[4rem] rounded-br-[4rem] p-6 border-4 border-dalitBrown shadow-[8px_8px_0px_0px_rgba(74,55,40,1)]">
             <img 
               src="https://picsum.photos/seed/library/600/800" 
               alt="Library children reading" 
               className="w-full h-auto rounded-tl-[3rem] rounded-br-[3rem] filter grayscale hover:grayscale-0 transition-all duration-500 object-cover aspect-[3/4]"
             />
             <div className="mt-4 flex justify-between font-syne font-bold text-sm">
                <div className="flex flex-col">
                   <span className="text-2xl text-dalitRed">0</span>
                   <span className="uppercase text-xs">Posts</span>
                </div>
                <div className="flex flex-col">
                   <span className="text-2xl text-dalitBlue">42</span>
                   <span className="uppercase text-xs">Followers</span>
                </div>
                <div className="flex flex-col">
                   <span className="text-2xl text-dalitBrown">9</span>
                   <span className="uppercase text-xs">Following</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;