import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import InquiryForm from "./components/InquiryForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.15),transparent_35%)]" />
      <div className="relative">
        <Hero />
        <Catalog />
        <InquiryForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
