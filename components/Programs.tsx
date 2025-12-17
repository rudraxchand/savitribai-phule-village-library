import React from 'react';
import { READING_PROGRAMS, OTHER_PROGRAMS, BOOK_COLLECTIONS } from '../constants';
import { BookOpen, Sparkles, Book } from 'lucide-react';
import { WavyLine, DalitFlower } from './Decorations';

const ProgramList: React.FC<{ title: string; items: string[]; color: string; icon: React.ReactNode }> = ({ title, items, color, icon }) => (
  <div className={`relative p-8 rounded-t-[3rem] rounded-b-xl border-4 border-dalitBrown ${color} text-dalitCream shadow-lg h-full`}>
    <div className="absolute -top-6 left-8 bg-dalitBrown p-3 rounded-full border-4 border-white text-dalitYellow">
        {icon}
    </div>
    <h3 className="font-display text-3xl md:text-4xl mt-6 mb-6 uppercase">{title}</h3>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-3 font-syne font-bold text-lg md:text-xl">
          <span className="mt-1.5 w-2 h-2 bg-dalitYellow rounded-full flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-20 relative bg-dalitCream">
      <WavyLine className="absolute top-0 left-0 w-full text-dalitBlue opacity-20" />
      
      <div className="container mx-auto px-4">
        {/* Programs Header */}
        <div className="text-center mb-16 relative">
          <h2 className="font-display text-6xl md:text-8xl text-dalitRed inline-block relative z-10">
            Programs
          </h2>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-12 bg-dalitYellow/50 -rotate-2 z-0 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto mb-24">
          <ProgramList 
            title={READING_PROGRAMS.title} 
            items={READING_PROGRAMS.items} 
            color="bg-dalitBlue" 
            icon={<BookOpen size={24} />}
          />
          <div className="transform md:translate-y-12">
            <ProgramList 
                title={OTHER_PROGRAMS.title} 
                items={OTHER_PROGRAMS.items} 
                color="bg-dalitRed" 
                icon={<Sparkles size={24} />}
            />
          </div>
        </div>

        {/* Book Collection */}
        <div id="collection" className="bg-dalitBeige rounded-[3rem] p-8 md:p-16 relative overflow-hidden border-4 border-dalitBrown">
            <div className="absolute -right-16 -top-16 opacity-10">
                <DalitFlower className="w-64 h-64" color="fill-dalitBrown" />
            </div>

            <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-12">
                    <div className="bg-dalitYellow p-4 rounded-2xl border-2 border-dalitBrown rotate-3">
                        <Book size={48} className="text-dalitBrown" />
                    </div>
                    <div>
                        <h2 className="font-display text-4xl md:text-5xl text-dalitBrown uppercase">The Collection</h2>
                        <p className="font-syne font-bold text-dalitRed">Curated for liberation & joy</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4">
                    {BOOK_COLLECTIONS.map((book, idx) => (
                        <div 
                            key={idx} 
                            className="bg-white px-6 py-4 rounded-full border-2 border-dalitBrown shadow-[4px_4px_0px_0px_rgba(220,20,60,1)] hover:shadow-[2px_2px_0px_0px_rgba(220,20,60,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-default"
                        >
                            <span className="font-syne font-bold text-lg text-dalitBlue">{book.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;