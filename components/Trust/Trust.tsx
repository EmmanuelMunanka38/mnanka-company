'use client';
import { Award, Users, Package, Clock } from 'lucide-react';

const TrustSection = () => {
  // Update these paths to the actual images in your public folder (e.g., "/logo1.png")
  const companies = [
    { name: 'Quality Boards', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=200&auto=format&fit=crop' },
    { name: 'Industrial Hardware', image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=200&auto=format&fit=crop' },
    { name: 'Premium Melamine', image: 'https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?q=80&w=200&auto=format&fit=crop' },
    { name: 'Timber Logistics', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=200&auto=format&fit=crop' },
  ];

  const stats = [
    { label: 'Years Experience', value: '15+', icon: <Clock className="w-6 h-6" /> },
    { label: 'Boards Delivered', value: '50k+', icon: <Package className="w-6 h-6" /> },
    { label: 'Happy Clients', value: '1.2k', icon: <Users className="w-6 h-6" /> },
    { label: 'Quality Awards', value: '08', icon: <Award className="w-6 h-6" /> },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="text-blue-700 mb-3 bg-blue-100 p-3 rounded-full">
                {stat.icon}
              </div>
              <span className="text-3xl font-black text-slate-900">{stat.value}</span>
              <span className="text-sm text-slate-500 font-bold uppercase tracking-widest text-center mt-1">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Partners / Companies Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">Our Subsidiaries & Partners</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-xl mx-auto font-medium">
            Managed under the Munanka Group of Companies umbrella, ensuring quality at every step.
          </p>
        </div>

        {/* Brand/Company Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          {companies.map((item, index) => (
            <div key={index} className="group relative flex flex-col items-center bg-white border border-slate-100 p-8 rounded-3xl hover:bg-slate-50 transition-all shadow-sm hover:shadow-md">
              <div className="h-20 w-20 mb-4 overflow-hidden rounded-xl bg-slate-100">
                <img 
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <span className="text-sm font-black text-slate-800 uppercase tracking-wide group-hover:text-blue-700 transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-t border-slate-100 pt-16">
          <div className="space-y-6">
            <h3 className="text-4xl font-black text-slate-900 leading-tight">Professional Standards in <span className="text-blue-700">Timber Supply</span></h3>
            <p className="text-slate-600 leading-relaxed text-lg">
              We understand that for carpentry and interior design, <strong>precision is non-negotiable</strong>. Chipped edges can ruin a luxury project. 
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our quality control team inspects every melamine sheet for surface consistency and edge strength before delivery.
            </p>
          </div>
          <div className="bg-blue-700 rounded-[2.5rem] p-10 text-white relative shadow-2xl shadow-blue-200 overflow-hidden">
             <div className="relative z-10">
               <div className="text-5xl text-blue-300 mb-4 font-serif">“</div>
               <p className="text-2xl font-medium leading-snug mb-8">
                 The Munanka Group provides the cleanest melamine edges in the market. Their consistency helps us meet our tight project deadlines.
               </p>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white text-blue-700 rounded-full flex items-center justify-center font-black">M</div>
                 <div>
                   <p className="font-black uppercase text-sm tracking-widest">Mark Musiba</p>
                   <p className="text-blue-200 text-xs font-bold uppercase">Executive Contractor</p>
                 </div>
               </div>
             </div>
             {/* Abstract circle decoration */}
             <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-600/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;