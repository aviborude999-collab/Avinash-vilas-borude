import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Clock, MapPin, ChevronRight, Building2, Briefcase, Phone, Mail } from 'lucide-react';
import { HERO_CONTENT, SHOP_CATEGORIES, TEAM_MEMBERS, TESTIMONIALS, CONTACT_INFO, SEO_KEYWORDS, TRUSTED_SOCIETIES, TRUSTED_COMPANIES, ASSETS } from '../constants';

// --- Hero Slider ---
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: ASSETS.HERO_TECHNICIAN,
      alt: "FilterWallah Expert RO Technician Pune"
    },
    {
      id: 2,
      image: ASSETS.HERO_FAMILY,
      alt: "Happy Indian Family Drinking Pure Water"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center bg-brand-dark overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/60 to-transparent"></div>
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-xs md:text-sm font-bold mb-8 uppercase tracking-wider shadow-lg">
            <ShieldCheck size={16} className="text-brand-red" />
            {HERO_CONTENT.trustLine}
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-2 drop-shadow-xl tracking-tight">
             <span className="text-brand-blue bg-white/10 px-2 rounded -ml-2 inline-block mb-2">FilterWallah®</span> <br/>
             Your Water, Our Care
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 font-serif italic tracking-wide mt-4">
            {HERO_CONTENT.sublineMarathi}
          </h2>
          
           <p className="text-lg text-gray-300 mb-8 max-w-xl border-l-4 border-brand-red pl-4">
            {HERO_CONTENT.headline}. Same-day service across Pune & PCMC.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#book" className="flex items-center justify-center gap-3 bg-brand-red text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition shadow-xl transform hover:-translate-y-1">
              {HERO_CONTENT.primaryBtn} <ArrowRight size={20} />
            </a>
            <Link to="/industrial" className="flex items-center justify-center gap-2 border-2 border-brand-blue text-brand-blue bg-white/90 backdrop-blur-sm px-8 py-4 rounded-lg font-bold text-lg hover:bg-white transition hover:text-brand-blue">
              {HERO_CONTENT.secondaryBtn}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Shop By Category ---
const CategorySection = () => (
  <section id="services" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-gray-900 mb-4">Shop by Category</h2>
        <p className="text-gray-600">Choose the right water purification solution for your home, office or industry.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SHOP_CATEGORIES.map((cat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 group flex flex-col h-full">
            <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
              {React.cloneElement(cat.icon as React.ReactElement<any>, { size: 24 })}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{cat.title}</h3>
            <p className="text-sm text-gray-500 mb-6 flex-grow">{cat.desc}</p>
            <div className="mt-auto pt-4 border-t border-gray-50">
              <Link to={cat.title.includes("Industrial") ? "/industrial" : "/#"} className="text-sm font-bold text-brand-blue flex items-center gap-1 group-hover:gap-2 transition-all">
                {cat.action} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Booking Form Section ---
const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    area: '',
    issue: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hi FilterWallah, I want to book a visit.%0AName: ${formData.name}%0AMobile: ${formData.mobile}%0AArea: ${formData.area}%0AIssue: ${formData.issue}`;
    window.location.href = `https://wa.me/${CONTACT_INFO.WHATSAPP.replace(/\D/g, '')}?text=${whatsappMsg}`;
  };

  return (
    <section id="book" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Quick RO Service / Repair Booking</h2>
          <p className="text-brand-blue font-medium">Same-day visit available in Ravet, Dehu Road, Punawale, Wakad, Hinjewadi & PCMC.</p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
          {/* Form Side */}
          <div className="md:col-span-3 p-8 md:p-12 bg-gray-50">
             <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your name" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue outline-none"
                    value={formData.name} onChange={handleChange} required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Mobile Number</label>
                  <input 
                    type="tel" 
                    name="mobile" 
                    placeholder="98xxxxxx07" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue outline-none"
                    value={formData.mobile} onChange={handleChange} required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Area / Location</label>
                  <input 
                    type="text" 
                    name="area" 
                    placeholder="Ravet, Punawale, Wakad, PCMC…" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue outline-none"
                    value={formData.area} onChange={handleChange} required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Issue Type</label>
                  <select 
                    name="issue" 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-blue outline-none bg-white"
                    value={formData.issue} onChange={handleChange}
                  >
                    <option value="">Select issue</option>
                    <option value="Filter Change">Filter change / servicing</option>
                    <option value="Leakage">Leakage problem</option>
                    <option value="Low Flow">Low water flow</option>
                    <option value="Motor Issue">Motor / pump issue</option>
                    <option value="Installation">New RO installation</option>
                    <option value="Industrial">Industrial plant support</option>
                  </select>
                </div>

                <button type="submit" className="w-full bg-brand-red text-white font-bold py-4 rounded-lg hover:bg-red-700 transition uppercase shadow-lg mt-2">
                  Book Technician Visit
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Or WhatsApp directly: <a href={`https://wa.me/${CONTACT_INFO.WHATSAPP.replace(/\D/g, '')}`} className="text-brand-blue font-bold hover:underline">Chat on WhatsApp</a>
                </p>
             </form>
          </div>

          {/* Info Side */}
          <div className="md:col-span-2 p-8 md:p-12 bg-brand-blue text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Why Choose FilterWallah®?</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <ShieldCheck className="shrink-0 mt-1" size={20} />
                <span className="text-blue-100 text-sm leading-relaxed">Same-day RO service in key Pune & PCMC areas.</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="shrink-0 mt-1" size={20} />
                <span className="text-blue-100 text-sm leading-relaxed">Technical guidance based on your TDS, usage & water source.</span>
              </li>
              <li className="flex items-start gap-3">
                <Building2 className="shrink-0 mt-1" size={20} />
                <span className="text-blue-100 text-sm leading-relaxed">Support for domestic, commercial & industrial RO plants.</span>
              </li>
              <li className="flex items-start gap-3">
                <Star className="shrink-0 mt-1" size={20} />
                <span className="text-blue-100 text-sm leading-relaxed">Transparent pricing & genuine spare parts only.</span>
              </li>
            </ul>
            <div className="mt-auto border-t border-blue-400/30 pt-6">
              <p className="flex items-center gap-2 font-bold text-lg mb-2">
                <Phone size={20} /> {CONTACT_INFO.PHONE}
              </p>
              <p className="text-blue-200 text-sm leading-relaxed flex items-start gap-2">
                <MapPin size={16} className="mt-1 shrink-0" /> 
                Aundh–Ravet BRT Road, Near Royal Astoria, Ravet, Pune – 412101
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- SEO Text Block ---
const SEOBlock = () => (
  <section className="py-16 bg-white border-t border-gray-100">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">RO Water Purifier Service & Industrial RO in Pune</h2>
      <p className="text-brand-blue font-semibold mb-6">Local expert for water purification, softeners and RO plants.</p>
      <div className="text-gray-600 leading-relaxed space-y-4 text-justify md:text-center">
        <p>
          FilterWallah® provides complete water purification solutions in Pune and PCMC – from domestic RO water purifiers for families, to large industrial RO plants for factories, canteens, schools and commercial projects.
        </p>
        <p>
          Our team handles installation, repair, annual maintenance (AMC) and upgradation of RO, UV, UF, softeners and complete water treatment systems. If you are looking for a reliable RO service in Ravet, Punawale, Wakad, Hinjewadi or nearby areas, FilterWallah® offers doorstep service, genuine parts and honest suggestions so that your family, customers and staff always get safe, clean drinking water.
        </p>
      </div>
    </div>
  </section>
);

// --- Team Section ---
const TeamSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-black text-gray-900 mb-4">Meet Our Expert Team</h2>
        <p className="text-gray-600">Experienced professionals behind every FilterWallah® project.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TEAM_MEMBERS.map((member, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow">
            <div className="w-20 h-20 bg-brand-light rounded-full mx-auto mb-6 flex items-center justify-center text-brand-blue font-black text-2xl border-2 border-white shadow-sm">
              {member.name.charAt(0)}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
            <p className="text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">{member.role}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{member.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Contact Section with Map ---
const ContactSection = () => (
  <section id="contact" className="py-20 bg-white border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-gray-900 mb-2">Contact FilterWallah® Enterprises</h2>
        <p className="text-gray-500">Water purifier sales, RO service & industrial RO plants in Pune.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        {/* Contact Details Card */}
        <div className="bg-white p-10 rounded-3xl border border-gray-200 shadow-lg flex flex-col justify-center text-center lg:text-left">
          <h3 className="text-2xl font-bold text-brand-dark mb-1">FilterWallah® – Your Water, Our Care</h3>
          <p className="text-gray-500 mb-8 text-sm">Pune's Premium Water Solution Provider</p>
          
          <div className="space-y-6">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
              <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center text-brand-red shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="font-medium text-gray-900">{CONTACT_INFO.ADDRESS_LINE_1}</p>
                <p className="text-gray-600 text-sm">{CONTACT_INFO.ADDRESS_LINE_2}</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
              <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center text-brand-red shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <a href={`tel:${CONTACT_INFO.PHONE}`} className="font-bold text-gray-900 hover:text-brand-blue text-lg block">{CONTACT_INFO.PHONE}</a>
                <p className="text-xs text-green-600 font-bold mt-1">Available on WhatsApp</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
              <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center text-brand-red shrink-0">
                <Mail size={20} />
              </div>
              <a href={`mailto:${CONTACT_INFO.EMAIL}`} className="font-medium text-gray-900 hover:text-brand-blue">{CONTACT_INFO.EMAIL}</a>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
              <div className="w-10 h-10 bg-brand-light rounded-full flex items-center justify-center text-brand-red shrink-0">
                <Clock size={20} />
              </div>
              <p className="font-medium text-gray-900">{CONTACT_INFO.HOURS}</p>
            </div>
          </div>
          
          <p className="mt-8 text-sm text-gray-500 border-t border-gray-100 pt-6">
            For RO installation, repair, AMC or industrial RO requirements, call or WhatsApp and our team will guide you to the right solution based on your water quality and usage.
          </p>
        </div>

        {/* Map Card */}
        <div className="h-[400px] lg:h-auto rounded-3xl overflow-hidden border border-gray-200 shadow-lg relative bg-gray-100">
           <iframe 
             src={CONTACT_INFO.MAP_EMBED_URL}
             width="100%" 
             height="100%" 
             style={{border:0}} 
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             title="FilterWallah Location Map"
             className="absolute inset-0"
           ></iframe>
        </div>
      </div>
    </div>
  </section>
);

// --- Trust Section (Existing) ---
const TrustSection = () => (
  <section id="trust" className="py-24 bg-brand-light relative overflow-hidden">
    <div className="absolute top-0 left-0 w-64 h-64 bg-brand-blue/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <span className="text-brand-red font-bold uppercase tracking-widest text-xs mb-2 block">Testimonials</span>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6">Why Pune Trusts <span className="text-brand-blue">FilterWallah</span></h2>
        <div className="w-24 h-1.5 bg-brand-red mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {TESTIMONIALS.map((review, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex gap-1 mb-6 text-yellow-400">
              {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" strokeWidth={0} />)}
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">"{review.text}"</p>
            <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
              <div className="w-10 h-10 bg-brand-dark text-white rounded-full flex items-center justify-center font-bold text-sm">
                {review.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                <div className="flex items-center gap-1 text-xs text-brand-blue font-medium">
                  <MapPin size={10} /> {review.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
           <div className="flex items-center gap-3 mb-6">
              <Building2 className="text-brand-red" size={24} />
              <h3 className="text-lg font-black uppercase text-gray-900 tracking-wide">Trusted Societies</h3>
           </div>
           <div className="flex flex-wrap gap-3">
             {TRUSTED_SOCIETIES.map((client) => (
               <span key={client} className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-xs font-bold border border-gray-100 hover:border-brand-blue transition cursor-default">
                 {client}
               </span>
             ))}
           </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
           <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-brand-blue" size={24} />
              <h3 className="text-lg font-black uppercase text-gray-900 tracking-wide">Corporate & Industrial</h3>
           </div>
           <div className="flex flex-wrap gap-3">
             {TRUSTED_COMPANIES.map((client) => (
               <span key={client} className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-xs font-bold border border-gray-100 hover:border-brand-red transition cursor-default">
                 {client}
               </span>
             ))}
           </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Main Home Page ---
export const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <CategorySection />
      <BookingSection />
      <TrustSection />
      <SEOBlock />
      <TeamSection />
      <ContactSection />

      {/* SEO Local Content Block Footer */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Local Areas We Serve</h3>
           <div className="flex flex-wrap gap-3">
             {SEO_KEYWORDS.map((keyword, idx) => (
                <span key={idx} className="bg-white border border-gray-200 rounded-full px-4 py-2 text-xs text-gray-600 hover:border-brand-blue hover:text-brand-blue transition cursor-pointer">
                  {keyword}
                </span>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};