import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Instagram, Facebook, Mail, MapPin, CheckCircle2, MessageCircle, CalendarCheck } from 'lucide-react';
import { COLORS, CONTACT_INFO, NAV_LINKS, ASSETS } from '../constants';

// --- Navbar ---
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Logo Image */}
            <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
               <img 
                 src={ASSETS.LOGO} 
                 alt="FilterWallah Logo" 
                 className="w-full h-full object-contain"
                 onError={(e) => {
                   // Fallback if image fails to load
                   e.currentTarget.style.display = 'none';
                 }}
               />
            </div>
            
            {/* Logo Text */}
            <div className="flex flex-col items-start">
              <span className="text-2xl md:text-3xl font-black italic tracking-tighter text-brand-blue group-hover:opacity-90 transition leading-none">
                FILTER<span className="text-brand-red">WALLAH</span>®
              </span>
              <span className="text-[10px] md:text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em] mt-0.5">
                Your Water, Our Care
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-wide hover:text-brand-red transition-colors ${
                  location.pathname === link.path ? 'text-brand-blue' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${CONTACT_INFO.PHONE}`}
              className="bg-brand-red text-white px-6 py-2.5 rounded-lg font-bold hover:bg-red-700 transition shadow-md flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Phone size={18} fill="currentColor" />
              <span>{CONTACT_INFO.PHONE}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-dark p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-2xl z-50">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 text-base font-bold text-gray-800 border-b border-gray-50 active:bg-gray-50"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Footer ---
export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-32 md:pb-16 border-t-4 border-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-4">
               <img src={ASSETS.LOGO} alt="FilterWallah" className="w-10 h-10 object-contain bg-white rounded p-1" />
               <span className="text-2xl font-black italic tracking-tighter text-white">
                FILTER<span className="text-brand-red">WALLAH</span>®
              </span>
             </div>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Pune's most trusted water purifier experts. We provide domestic repairs, industrial plant setup, and genuine spare parts since 2010.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-blue transition cursor-pointer text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-pink-600 transition cursor-pointer text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-red uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2 hover:text-white cursor-pointer"><CheckCircle2 size={14} className="text-brand-blue"/> RO Repair & Service</li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer"><CheckCircle2 size={14} className="text-brand-blue"/> Installation / Re-installation</li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer"><CheckCircle2 size={14} className="text-brand-blue"/> Annual Maintenance (AMC)</li>
              <li className="flex items-center gap-2 hover:text-white cursor-pointer"><CheckCircle2 size={14} className="text-brand-blue"/> Industrial RO Plants</li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-red uppercase tracking-wider">Service Areas</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer font-semibold text-white">All Pune & PCMC</li>
              <li className="hover:text-white cursor-pointer font-semibold text-white">Rest of Maharashtra (Industrial)</li>
              <li className="hover:text-white cursor-pointer pt-2">Ravet / Kiwale / Punawale</li>
              <li className="hover:text-white cursor-pointer">Wakad / Pimple Saudagar</li>
              <li className="hover:text-white cursor-pointer">Hinjewadi (Ph 1, 2, 3)</li>
              <li className="hover:text-white cursor-pointer">Nigdi / Pradhikaran</li>
              <li className="hover:text-white cursor-pointer">Baner / Balewadi</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-brand-red uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="text-brand-red shrink-0 mt-1" size={18} />
                <div className="flex flex-col">
                  <span>{CONTACT_INFO.ADDRESS_LINE_1}</span>
                  <span>{CONTACT_INFO.ADDRESS_LINE_2}</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-brand-red shrink-0" size={18} />
                <a href={`tel:${CONTACT_INFO.PHONE}`} className="hover:text-white font-bold">{CONTACT_INFO.PHONE}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-brand-red shrink-0" size={18} />
                <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="hover:text-white">{CONTACT_INFO.EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} FilterWallah Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Sticky Mobile Bottom Bar ---
export const StickyMobileBar: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.WHATSAPP.replace(/\D/g, '')}?text=Hi FilterWallah, I need RO service.`;
  
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.1)] z-50 flex md:hidden h-[70px] border-t border-gray-200">
      {/* Call Button */}
      <a 
        href={`tel:${CONTACT_INFO.PHONE}`} 
        className="flex-1 flex flex-col items-center justify-center text-gray-700 bg-white active:bg-gray-100 transition border-r border-gray-100"
      >
        <Phone size={22} className="text-brand-blue mb-1" />
        <span className="text-[10px] font-bold uppercase tracking-wide">Call</span>
      </a>

      {/* WhatsApp Button */}
      <a 
        href={whatsappUrl}
        className="flex-1 flex flex-col items-center justify-center text-gray-700 bg-white active:bg-gray-100 transition border-r border-gray-100"
      >
        <MessageCircle size={22} className="text-green-600 mb-1" />
        <span className="text-[10px] font-bold uppercase tracking-wide">WhatsApp</span>
      </a>

      {/* Book Now Button (Prominent) */}
      <a 
        href="#book" 
        className="flex-[1.4] bg-brand-red text-white flex flex-col items-center justify-center active:bg-red-800 transition"
      >
        <CalendarCheck size={22} className="mb-0.5" />
        <span className="text-xs font-black uppercase tracking-wider">BOOK @ ₹199</span>
      </a>
    </div>
  );
};