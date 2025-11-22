import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-blue-200/70 text-sm">
          © {new Date().getFullYear()} OceanVista Exports. All rights reserved.
        </div>
        <div className="flex gap-4 text-blue-200/70 text-sm">
          <a href="#catalog" className="hover:text-white">Catalog</a>
          <a href="#inquiry" className="hover:text-white">Request a Quote</a>
          <a href="#" className="hover:text-white">Email: sales@oceanvista.example</a>
        </div>
      </div>
    </footer>
  );
}
