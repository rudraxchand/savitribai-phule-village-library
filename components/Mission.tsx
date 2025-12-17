import React from 'react';
import { Quote } from 'lucide-react';
import { OrganicBlob } from './Decorations';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="relative py-20 bg-dalitBeige overflow-hidden">
      <OrganicBlob className="absolute top-0 right-0 w-96 h-96 opacity-30 text-dalitYellow fill-current translate-x-1/2" />
      <OrganicBlob className="absolute bottom-0 left-0 w-96 h-96 opacity-30 text-white fill-current -translate-x-1/2 rotate-180" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Quote size={64} className="mx-auto text-dalitBlue mb-6 fill-dalitBlue/20" />
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-dalitBrown leading-tight mb-8">
            Cultivating an <span className="text-dalitRed underline decoration-wavy decoration-dalitYellow decoration-4 underline-offset-8">anti-caste ethos</span> of inclusivity, equality, and justice.
          </h2>
          
          <p className="font-body text-xl md:text-2xl leading-relaxed text-dalitBrown/90">
            Our mission is to create a welcoming space that enables children and youth from historically oppressed backgrounds to not only access knowledge but also to actively engage in the joy of learning and reading.
          </p>

          <div className="mt-12 flex justify-center gap-4">
             <div className="w-3 h-3 rounded-full bg-dalitBlue"></div>
             <div className="w-3 h-3 rounded-full bg-dalitRed"></div>
             <div className="w-3 h-3 rounded-full bg-dalitYellow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;