'use client';
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Company Identity */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.jpeg" 
                alt="Munanka Groups Of Campanies" 
                className="h-12 w-12 rounded-full border-2 border-blue-500"
              />
              <span className="text-xl font-black tracking-tighter">MUNANKA <span className="text-blue-500">GROUP</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading the industry in premium melamine boards and professional hardware. Committed to precision, quality, and sustainable timber solutions.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-600 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-pink-600 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-blue-700 transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-blue-600 pl-3">Quick Navigation</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="/" className="hover:text-white flex items-center gap-2 transition-colors"><ChevronRight size={14}/> Home</a></li>
              <li><a href="/products" className="hover:text-white flex items-center gap-2 transition-colors"><ChevronRight size={14}/> Material Catalog</a></li>
              <li><a href="/contacts" className="hover:text-white flex items-center gap-2 transition-colors"><ChevronRight size={14}/> Contact Us</a></li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-blue-600 pl-3">Operational Hours</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span className="text-white font-medium">08:00 - 17:00</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span className="text-white font-medium">09:00 - 13:00</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span className="text-red-400 font-medium">Closed</span></li>
              <li className="mt-4 pt-4 border-t border-slate-800 italic text-xs">
                Emergency bulk orders available by appointment.
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-blue-600 pl-3">Contact Details</h4>
            <div className="space-y-4 text-slate-400 text-sm">
              <div className="flex gap-3">
                <MapPin className="text-blue-500 shrink-0" size={20} />
                <p>Kariakoo Nyamwezi/Mbaruku St. <br />Dar es Salaam, Tanzania</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-500 shrink-0" size={20} />
                <p>+255 673 124 187</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-500 shrink-0" size={20} />
                <p>youngmuna338@outlook.com</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-medium">
          <p>© {currentYear} Munanka Group of Companies. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;