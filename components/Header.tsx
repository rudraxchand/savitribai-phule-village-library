import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Mission", href: "#mission" },
    { name: "Impact", href: "#impact" },
    { name: "Programs", href: "#programs" },
    { name: "Collection", href: "#collection" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-dalitCream border-b-4 border-dalitBlue">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-dalitBlue rounded-full flex items-center justify-center text-dalitYellow font-bold text-xl">SP</div>
          <span className="font-display text-2xl text-dalitBlue uppercase tracking-wide">Village Library</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-syne font-bold text-dalitBrown hover:text-dalitRed transition-colors uppercase tracking-wider text-sm"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-dalitBlue"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dalitBlue text-dalitCream absolute w-full border-b-4 border-dalitRed">
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-display text-2xl hover:text-dalitYellow uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;