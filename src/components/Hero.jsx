import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6 py-24 sm:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-300 ring-1 ring-inset ring-blue-500/30">Global Seafood Exporter</span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Premium Seafood, Delivered Worldwide
          </h1>
          <p className="mt-6 text-lg text-blue-200/90">
            We source, process, and export high-quality seafood from trusted fisheries across the globe. Fresh, frozen, and value-added products tailored to your market.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#catalog" className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-5 py-3 text-white font-semibold shadow hover:bg-blue-600 transition">Browse Catalog</a>
            <a href="#inquiry" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-white font-semibold ring-1 ring-white/20 hover:bg-white/20 transition">Request a Quote</a>
          </div>
        </div>
      </div>
    </section>
  );
}
