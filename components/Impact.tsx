import React from 'react';
import { STATS, IMPACT_DETAILS } from '../constants';

const StatCard: React.FC<{ label: string; value: string; sublabel?: string; index: number }> = ({ label, value, sublabel, index }) => {
  const rotation = index % 2 === 0 ? 'rotate-1' : '-rotate-1';
  const bgColor = index % 3 === 0 ? 'bg-dalitBlue text-dalitYellow' : (index % 3 === 1 ? 'bg-dalitRed text-dalitCream' : 'bg-dalitYellow text-dalitBlue');
  
  return (
    <div className={`p-6 md:p-8 rounded-3xl border-4 border-dalitBrown shadow-[6px_6px_0px_0px_rgba(74,55,40,1)] ${bgColor} transform ${rotation} hover:rotate-0 transition-transform`}>
      <h3 className="font-syne text-sm uppercase tracking-widest mb-2 opacity-90">{label}</h3>
      <p className="font-display text-5xl md:text-6xl mb-1">{value}</p>
      {sublabel && <p className="font-body text-sm font-medium">{sublabel}</p>}
    </div>
  );
};

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-20 bg-dalitCream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="font-display text-6xl md:text-8xl text-dalitBlue uppercase">
              Our <br/> Impact
            </h2>
            <p className="font-body text-xl text-dalitBrown max-w-md pb-2 border-b-4 border-dalitRed">
              Empowering the community through access, education, and representation.
            </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {STATS.map((stat, idx) => (
            <StatCard key={idx} {...stat} index={idx} />
          ))}
        </div>

        {/* Detailed Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border-2 border-dalitBrown lg:col-span-2">
                <h3 className="font-display text-3xl mb-6 text-dalitBrown">Demographics & Reach</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                   {IMPACT_DETAILS.map((item, idx) => (
                       <div key={idx} className="border-l-4 border-dalitYellow pl-4">
                           <p className="text-4xl font-bold font-syne text-dalitBlue">{item.value}</p>
                           <p className="font-bold text-dalitBrown">{item.label}</p>
                           <p className="text-sm text-gray-500">{item.sublabel}</p>
                       </div>
                   ))}
                </div>
            </div>
            
             <div className="bg-dalitBrown rounded-3xl p-8 text-dalitCream flex flex-col justify-center items-center text-center">
                <p className="font-syne font-bold text-xl mb-2 text-dalitYellow">Daily Footfalls</p>
                <p className="font-display text-7xl">130+</p>
                <p className="font-body opacity-80 mt-2">Children & Youth active daily</p>
             </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;