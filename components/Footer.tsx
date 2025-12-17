import React from 'react';
import { Mail, User } from 'lucide-react';
import { SunBurst } from './Decorations';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-dalitBrown text-dalitCream py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <SunBurst className="w-[800px] h-[800px] absolute -bottom-1/2 -left-1/4 animate-spin-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <h2 className="font-display text-5xl md:text-7xl mb-6 text-dalitYellow uppercase">
              Join the <br/> Movement
            </h2>
            <p className="font-body text-xl max-w-md opacity-80 mb-8">
              Visit us, volunteer, or support our mission to spread knowledge and joy.
            </p>
          </div>

          <div className="bg-dalitCream text-dalitBrown p-8 rounded-3xl border-4 border-dalitYellow">
            <h3 className="font-syne font-bold text-2xl mb-6 uppercase border-b-2 border-dalitBrown pb-2 inline-block">Contact Us</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-dalitBlue flex items-center justify-center text-dalitYellow group-hover:bg-dalitRed transition-colors">
                  <User size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider opacity-60">Library Contact</p>
                  <p className="font-display text-2xl">Amit Gautam</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-dalitBlue flex items-center justify-center text-dalitYellow group-hover:bg-dalitRed transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider opacity-60">Email</p>
                  <a href="mailto:amitsureman70@gmail.com" className="font-display text-2xl hover:underline decoration-dalitRed decoration-2 underline-offset-4 break-all">
                    amitsureman70@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-sm opacity-60 font-syne">
           <p>© {new Date().getFullYear()} Savitribai Phule Village Library</p>
           <p>Designed with <span className="text-dalitRed text-lg">♥</span> for the Community</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;