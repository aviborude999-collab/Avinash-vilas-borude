import React from 'react';
import { Factory, CheckCircle2, Phone, ArrowRight, Settings, Users, Droplets, CheckSquare } from 'lucide-react';
import { INDUSTRIAL_PROCESS, INDUSTRIAL_SPECS, COLORS } from '../constants';

export const IndustrialPage = () => {
  return (
    <div className="w-full font-sans">
      {/* Industrial Hero */}
      <section className="relative h-[500px] flex items-center bg-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1565514020125-9a4f475a805a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Industrial RO Plant Factory" 
            className="w-full h-full object-cover opacity-20"
          />
           <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
           <span className="bg-brand-red text-white px-4 py-1.5 rounded text-xs font-bold tracking-widest uppercase mb-6 inline-block">
             B2B Solutions
           </span>
           <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
             Industrial & Commercial <br/>RO Plant Manufacturers
           </h1>
           <p className="text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
             Custom designed water treatment plants for Offices, Schools, Factories, and Housing Societies. 
             Capacities ranging from <span className="text-white font-bold">50 LPH to 5000 LPH</span>.
           </p>
           <a href="#enquire" className="bg-brand-blue text-white px-10 py-4 rounded-lg font-bold hover:bg-blue-700 transition inline-flex items-center gap-3 shadow-xl text-lg">
             Request Quotation <ArrowRight size={20} />
           </a>
        </div>
      </section>

      {/* Capacities Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Choose Your Capacity</h2>
            <p className="text-gray-500 mt-4 text-lg">Engineered for high durability, low wastage, and minimal maintenance.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIAL_SPECS.map((spec, idx) => (
              <div key={idx} className="border border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 text-center group bg-gray-50 hover:bg-white hover:-translate-y-1">
                 <div className="w-16 h-16 bg-white text-brand-blue rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-colors">
                   <Factory size={32} />
                 </div>
                 <h3 className="text-2xl font-black text-gray-900 mb-2">{spec.capacity}</h3>
                 <div className="text-xs text-brand-red font-bold mb-3 uppercase tracking-wider">Best Application</div>
                 <p className="text-gray-800 font-semibold mb-1 text-lg">{spec.users}</p>
                 <p className="text-sm text-gray-500">{spec.idealFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us (Benefits) */}
      <section className="py-20 bg-brand-blue text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
               <h2 className="text-3xl md:text-4xl font-black mb-6">Built to Last. <br/>Designed for Savings.</h2>
               <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                 We don't just sell machines; we provide complete water solutions. Our plants use 30% less electricity and recover up to 50% more water than standard assemblers.
               </p>
               <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckSquare className="mt-1 text-brand-red shrink-0" />
                    <span className="font-semibold">SS 304 Grade Skids</span>
                  </div>
                   <div className="flex items-start gap-3">
                    <CheckSquare className="mt-1 text-brand-red shrink-0" />
                    <span className="font-semibold">Dow/Vontron Membranes</span>
                  </div>
                   <div className="flex items-start gap-3">
                    <CheckSquare className="mt-1 text-brand-red shrink-0" />
                    <span className="font-semibold">Fully Automatic Panel</span>
                  </div>
                   <div className="flex items-start gap-3">
                    <CheckSquare className="mt-1 text-brand-red shrink-0" />
                    <span className="font-semibold">24hr Breakdown Support</span>
                  </div>
               </div>
             </div>
             <div className="bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-sm">
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 bg-white text-brand-blue rounded-full flex items-center justify-center font-bold text-xl">1</div>
                 <p className="font-bold text-lg">We visit your site & test water.</p>
               </div>
               <div className="flex items-center gap-4 mb-6">
                 <div className="w-12 h-12 bg-white text-brand-blue rounded-full flex items-center justify-center font-bold text-xl">2</div>
                 <p className="font-bold text-lg">We design the exact capacity needed.</p>
               </div>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-white text-brand-blue rounded-full flex items-center justify-center font-bold text-xl">3</div>
                 <p className="font-bold text-lg">Installation & Handover in 7 days.</p>
               </div>
             </div>
           </div>
         </div>
      </section>

      {/* Our Process & Form */}
      <section className="py-24 bg-gray-50" id="enquire">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
             <div>
                <span className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-2 block">Our Workflow</span>
                <h2 className="text-3xl font-black text-gray-900 mb-8">6-Step Execution Process</h2>
                <div className="space-y-8 relative before:absolute before:left-[23px] before:top-4 before:h-full before:w-0.5 before:bg-gray-200">
                  {INDUSTRIAL_PROCESS.map((step, idx) => (
                    <div key={idx} className="flex gap-6 relative z-10">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-brand-red text-brand-red flex items-center justify-center font-bold text-lg shadow-sm">
                        {step.step}
                      </div>
                      <div className="pt-2">
                        <h4 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-gray-600 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
             
             <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 sticky top-24">
               <h3 className="text-2xl font-black text-gray-900 mb-2">Request Site Survey</h3>
               <p className="text-gray-500 mb-8 text-sm">Fill this form to get a technical consultant call back.</p>
               
               <form className="space-y-5">
                 <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Company / Society Name</label>
                    <input type="text" placeholder="e.g. Blue Ridge Society" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-brand-blue outline-none transition" />
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4">
                   <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Contact Person</label>
                      <input type="text" placeholder="Name" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-brand-blue outline-none transition" />
                   </div>
                   <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Mobile</label>
                      <input type="tel" placeholder="98765..." className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-brand-blue outline-none transition" />
                   </div>
                 </div>

                 <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Daily Usage (Approx)</label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 focus:ring-2 focus:ring-brand-blue outline-none text-gray-600 transition">
                      <option>Select Capacity Required</option>
                      <option>50 - 100 Liters (Small Office)</option>
                      <option>250 - 500 Liters (School/Hostel)</option>
                      <option>1000+ Liters (Factory/Society)</option>
                      <option>Not Sure (Need Advice)</option>
                    </select>
                 </div>

                 <button className="w-full bg-brand-red text-white font-bold py-4 rounded-lg hover:bg-red-700 transition uppercase tracking-wide shadow-lg mt-4">
                   Submit Enquiry
                 </button>
               </form>
             </div>
          </div>
        </div>
      </section>

      {/* Technical Table */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-center mb-10">Technical Specifications</h3>
          <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-5 text-left font-bold text-gray-800 text-sm uppercase tracking-wider">Feature</th>
                  <th className="p-5 text-left font-bold text-gray-800 text-sm uppercase tracking-wider">Standard Plant</th>
                  <th className="p-5 text-left font-bold text-brand-blue text-sm uppercase tracking-wider bg-blue-50">Premium Plant</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="p-5 text-sm font-bold text-gray-700">Membrane Type</td>
                  <td className="p-5 text-sm text-gray-600">CSM / Vontron</td>
                  <td className="p-5 text-sm text-gray-800 font-bold bg-blue-50/30">Dow Filmtec (USA)</td>
                </tr>
                <tr>
                  <td className="p-5 text-sm font-bold text-gray-700">Pump Brand</td>
                  <td className="p-5 text-sm text-gray-600">Kemflo / Grand Forest</td>
                  <td className="p-5 text-sm text-gray-800 font-bold bg-blue-50/30">CRI / Lubi Vertical</td>
                </tr>
                <tr>
                  <td className="p-5 text-sm font-bold text-gray-700">Skid Material</td>
                  <td className="p-5 text-sm text-gray-600">Powder Coated MS</td>
                  <td className="p-5 text-sm text-gray-800 font-bold bg-blue-50/30">Stainless Steel (SS 304)</td>
                </tr>
                 <tr>
                  <td className="p-5 text-sm font-bold text-gray-700">Automation</td>
                  <td className="p-5 text-sm text-gray-600">Semi-Automatic</td>
                  <td className="p-5 text-sm text-gray-800 font-bold bg-blue-50/30">Fully Automatic (PLC)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};