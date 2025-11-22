import React, { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const url = `${API_BASE}/api/products${category ? `?category=${encodeURIComponent(category)}` : ""}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to load products");
        const data = await res.json();
        setProducts(data);
      } catch (e) {
        setError("Unable to load products right now.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  const categories = ["All", "Shrimp", "Fish", "Crab", "Lobster"];

  return (
    <section id="catalog" className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white">Product Catalog</h2>
          <p className="text-blue-200/80">Selected products we export regularly</p>
        </div>
        <div className="flex gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c === "All" ? "" : c)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ring-1 ring-white/10 ${
                (c === "All" && !category) || category === c
                  ? "bg-blue-500 text-white"
                  : "bg-white/5 text-blue-100 hover:bg-white/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-blue-200">Loading products…</div>
      ) : error ? (
        <div className="text-red-300">{error}</div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, idx) => (
            <div key={idx} className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/10 transition">
              <div className="aspect-[4/3] w-full rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/10 flex items-center justify-center text-blue-200 text-sm">
                {p.category}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{p.name}</h3>
              <p className="text-sm text-blue-200/80">
                {p.origin ? `${p.origin} • ` : ""}
                {p.processing || "Various processing"}
              </p>
              {p.sizes?.length ? (
                <p className="mt-2 text-sm text-blue-200/70">Sizes: {p.sizes.join(", ")}</p>
              ) : null}
              {p.packaging ? (
                <p className="text-sm text-blue-200/70">Packaging: {p.packaging}</p>
              ) : null}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
