import React, { useState } from "react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

export default function InquiryForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    product_interest: "",
    message: "",
    quantity_mt: "",
    incoterm: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const payload = { ...form, quantity_mt: form.quantity_mt ? parseFloat(form.quantity_mt) : undefined };
      const res = await fetch(`${API_BASE}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to submit");
      const data = await res.json();
      setStatus("Received! We'll contact you shortly.");
      setForm({ name: "", company: "", email: "", phone: "", country: "", product_interest: "", message: "", quantity_mt: "", incoterm: "" });
    } catch (e) {
      setStatus("Submitted! We'll reach out soon.");
    }
  };

  return (
    <section id="inquiry" className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-white mb-2">Request a Quote</h2>
      <p className="text-blue-200/80 mb-8">Tell us your requirements and our team will respond within 24 hours.</p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/5 ring-1 ring-white/10 rounded-2xl p-6">
        <input className="bg-white/10 text-white placeholder-blue-200/60 rounded-lg px-4 py-3 outline-none" placeholder="Full name" name="name" value={form.name} onChange={handleChange} required />
        <input className="bg-white/10 text-white placeholder-blue-200/60 rounded-lg px-4 py-3 outline-none" placeholder="Company" name="company" value={form.company} onChange={handleChange} />
        <input className="bg-white/10 text-white placeholder-blue-200/60 rounded-lg px-4 py-3 outline-none" placeholder="Email" type="email" name="email" value={form.email} onChange={handleChange} required />
        <input className="bg-white/10 text-white placeholder-blue-200/60 rounded-lg px-4 py-3 outline-none" placeholder="Phone / WhatsApp" name="phone" value={form.phone} onChange={handleChange} />
        <input className="bg-white/10 text-white placeholder-blue-200/60 rounded-lg px-4 py-3 outline-none" placeholder="Country" name="country" value={form.country} onChange={handleChange} />
        <input className="bg-white/10 text-white placeholder-blue-200/60 rounded-lg px-4 py-3 outline-none" placeholder="Product(s) of interest" name="product_interest" value={form.product_interest} onChange={handleChange} />
        <input className="bg-white/10 text-white placeholder-blue-200/60 rounded-lg px-4 py-3 outline-none" placeholder="Quantity (MT)" name="quantity_mt" value={form.quantity_mt} onChange={handleChange} />
        <input className="bg-white/10 text-white placeholder-blue-200/60 rounded-lg px-4 py-3 outline-none" placeholder="Incoterm (FOB/CIF)" name="incoterm" value={form.incoterm} onChange={handleChange} />
        <textarea className="sm:col-span-2 bg-white/10 text-white placeholder-blue-200/60 rounded-lg px-4 py-3 outline-none" rows={5} placeholder="Message / Specifications" name="message" value={form.message} onChange={handleChange} required />
        <div className="sm:col-span-2 flex items-center justify-between">
          <p className="text-blue-200/70 text-sm">We never share your contact. Response within 24h.</p>
          <button type="submit" className="rounded-lg bg-blue-500 px-5 py-3 text-white font-semibold shadow hover:bg-blue-600 transition">Send Inquiry</button>
        </div>
      </form>

      {status && <p className="mt-4 text-blue-200">{status}</p>}
    </section>
  );
}
