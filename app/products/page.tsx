'use client';
import React, { useState } from 'react';

const PRODUCTS = [
  {
    id: 1,
    name: 'White High-Gloss Melamine',
    category: 'Boards',
    price: 'Contact for Bulk',
    image: 'https://images.unsplash.com/photo-1626885930974-4b69aa21bbf9?q=80&w=600&auto=format&fit=crop',
    description: 'Ultra-smooth reflective finish, perfect for modern kitchen cabinetry and retail fixtures.'
  },
  {
    id: 2,
    name: 'Natural Oak Textured Board',
    category: 'Boards',
    price: 'Contact for Bulk',
    image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=600&auto=format&fit=crop',
    description: 'Realistic wood grain texture with the durability of melamine. Scratch and heat resistant.'
  },
  {
    id: 3,
    name: 'Dark Anthracite Matte',
    category: 'Boards',
    price: 'Contact for Bulk',
    image: 'https://images.unsplash.com/photo-1505338664035-da7362ed23f7?q=80&w=600&auto=format&fit=crop',
    description: 'Sophisticated matte finish that resists fingerprints. Ideal for office furniture.'
  },
  {
    id: 4,
    name: 'Industrial Plywood Core',
    category: 'Boards',
    price: 'Contact for Bulk',
    image: 'https://images.unsplash.com/photo-1530124560676-587cad321376?q=80&w=600&auto=format&fit=crop',
    description: 'High-strength multi-layer core with a clean melamine face for structural integrity.'
  },
  {
    id: 5,
    name: 'Soft-Close Concealed Hinges',
    category: 'Hardware',
    price: '$4.50/pc',
    image: 'https://images.unsplash.com/photo-1517646331032-9e8563c520a1?q=80&w=600&auto=format&fit=crop',
    description: 'Hydraulic soft-close mechanism for silent cabinet operation.'
  },
  {
    id: 6,
    name: 'Brushed Gold T-Bar Handles',
    category: 'Hardware',
    price: '$8.20/pc',
    image: 'https://images.unsplash.com/photo-1610505466102-732387a32997?q=80&w=600&auto=format&fit=crop',
    description: 'Premium hardware to complement high-end melamine board finishes.'
  },
];

const ProductsPage = () => {
  const [filter, setFilter] = useState('All');

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header section with specialized subtitle */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Our Material <span className="text-blue-700">Catalog</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">
            Sourcing the finest melamine finishes and durable hardware for your next architectural project.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['All', 'Boards', 'Hardware'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-2 rounded-md font-bold transition-all duration-300 transform active:scale-95 ${
                filter === cat 
                ? 'bg-blue-700 text-white shadow-lg shadow-blue-200' 
                : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-700 hover:text-blue-700'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              {/* Product Image with Zoom Effect */}
              <div className="relative h-72 overflow-hidden bg-slate-200">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-[10px] font-black uppercase tracking-widest text-blue-800 shadow-sm">
                  {product.category}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Estimated Price</span>
                    <span className="text-xl font-black text-slate-900">{product.price}</span>
                  </div>
                  <button className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-xs font-bold hover:bg-blue-700 transition-all shadow-md active:ring-2 active:ring-blue-400">
                    REQUEST QUOTE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;