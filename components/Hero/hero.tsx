'use client';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();

  


  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop" 
          alt="Premium Melamine Boards"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Premium <span className="text-blue-500">Hardware</span> & High-Gloss <span className="text-blue-500">Melamine</span> Boards
        </h1>
        
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Elevate your interior projects with our durable, scratch-resistant melamine boards and professional-grade hardware solutions. Built for craftsmen, by craftsmen.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
           onClick={() => router.push('/products')}
            className="px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg transition-all shadow-lg"
          >
            Browse Inventory
          </button>
          <button 
            onClick={() => router.push('/contacts')}
            className="px-8 py-3 bg-white hover:bg-gray-100 text-blue-900 font-bold rounded-lg transition-all shadow-lg"
          >
            Get a Quote
          </button>
        </div>
      </div>

      {/* Subtle Bottom Fade */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white to-transparent dark:from-gray-900"></div>
      <div>

      </div>
    </section>
  
  );
};

export default Hero;  