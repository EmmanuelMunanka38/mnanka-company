'use client';
import React, { useState } from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";




const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Board Quote',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your feedback! Our team will contact you soon.');
    // Logic to send data to your backend would go here
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-blue-700 py-16 px-6 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-black mb-4">Get In Touch</h1>
        <p className="text-blue-100 max-w-xl mx-auto">
          Have a specific board measurement or need a bulk hardware quote? Send us a message or find us on social media.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: Contact Details & Socials */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-700">📍</div>
              <div>
                <h4 className="font-bold text-slate-900">Our Shop</h4>
                <p className="text-slate-600"> Dar-es-Salaam Tanzania<br />Kariakoo Nyamwezi/Mbaruku.ST</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-700">📞</div>
              <div>
                <h4 className="font-bold text-slate-900">Call Us</h4>
                <p className="text-slate-600">+255 673 124 187</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-700">✉️</div>
              <div>
                <h4 className="font-bold text-slate-900">Email</h4>
                <p className="text-slate-600">youngmuna338@outlook.com</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Follow Our Work</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/17G7pyRt9y/" className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-all">
                <FaFacebookSquare />
              </a>
              <a href="https://www.instagram.com/mmm_hardware_ltd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all">
                <FaSquareInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Feedback/Inquiry Form */}
        <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="John Doe"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="john@example.com"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all bg-white"
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              >
                <option>Board Quote</option>
                <option>Hardware Inquiry</option>
                <option>Bulk Order</option>
                <option>Feedback</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Message / Requirements</label>
              <textarea 
                rows={4}
                required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="Tell us about your project or board sizes..."
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-700 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition-all shadow-lg shadow-blue-200"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>

     {/* Services & Gallery Showcase (Replaces the Map) */}
      <div className="w-full bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side: Service details */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">More Than Just a Supplier</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-blue-500 font-bold text-xl">01.</div>
                  <div>
                    <h4 className="text-white font-bold">Precision CNC Cutting</h4>
                    <p className="text-slate-400 text-sm">Send us your cutting list and we’ll prepare your melamine boards with millimeter accuracy, ready for assembly.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-blue-500 font-bold text-xl">02.</div>
                  <div>
                    <h4 className="text-white font-bold">Professional Edge Banding</h4>
                    <p className="text-slate-400 text-sm">We provide high-quality PVC edging that matches your board texture perfectly for a seamless finish.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-blue-500 font-bold text-xl">03.</div>
                  <div>
                    <h4 className="text-white font-bold">Bulk Logistics</h4>
                    <p className="text-slate-400 text-sm">Our crane-trucks deliver directly to your workshop or construction site, ensuring no damage to the board faces.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Visual Gallery of finished projects */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=400&auto=format&fit=crop" 
                  className="rounded-2xl w-full h-40 object-cover" 
                  alt="Modern Kitchen" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=400&auto=format&fit=crop" 
                  className="rounded-2xl w-full h-60 object-cover" 
                  alt="Office Furniture" 
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=400&auto=format&fit=crop" 
                  className="rounded-2xl w-full h-60 object-cover" 
                  alt="Wardrobe Design" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=400&auto=format&fit=crop" 
                  className="rounded-2xl w-full h-40 object-cover" 
                  alt="Board Textures" 
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    
    </main>
  );
};

export default ContactPage;