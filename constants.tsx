import { ServiceType } from './types';
import { Settings, Wrench, Droplets, Factory, ShieldCheck, MapPin, Phone, MessageCircle, Calendar, ShoppingCart, User, Users } from 'lucide-react';
import React from 'react';

// Brand Colors
export const COLORS = {
  BLUE: '#004a99',
  RED: '#e31e24',
  WHITE: '#ffffff',
  GRAY_BG: '#f8fafc',
  DARK: '#0f172a',
};

// Assets
export const ASSETS = {
  LOGO: "/logo.png", // Replace with your uploaded logo file path
  HERO_TECHNICIAN: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop", 
  HERO_FAMILY: "https://images.unsplash.com/photo-1609252924194-b1523490918e?q=80&w=2070&auto=format&fit=crop",
};

// SEO & Contact Info
export const CONTACT_INFO = {
  PHONE: '+91 83294 61507',
  WHATSAPP: '+91 83294 61507',
  EMAIL: 'admin@filterwallah.com',
  ADDRESS_LINE_1: 'Near Royal Astoria, In front of Hotel Backyard Palm',
  ADDRESS_LINE_2: 'Aundh–Ravet BRT Road, Ravet, Pune – 412101, Maharashtra',
  HOURS: '9:00 AM – 9:00 PM (Mon–Sun)',
  MAP_EMBED_URL: "https://www.google.com/maps?q=Royal+Astoria+Ravet+Pune&output=embed"
};

// Navigation
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Industrial RO', path: '/industrial' },
  { name: 'Services', path: '/#services' },
  { name: 'Reviews', path: '/#trust' },
  { name: 'Contact', path: '/#contact' },
];

// Content: Hero
export const HERO_CONTENT = {
  headline: "Pune’s Most Trusted Water Purifier Service & Sales",
  sublineMarathi: "पुण्याची सर्वात विश्वासार्ह RO सर्विस आणि सेल्स",
  trustLine: "14+ Years | 1000+ Families | Genuine Parts Only",
  primaryBtn: "BOOK SERVICE @ ₹199",
  secondaryBtn: "BUY NEW PURIFIER",
};

// Content: Shop Categories
export const SHOP_CATEGORIES = [
  {
    title: "Domestic RO & Purifiers",
    desc: "RO, UV, UF, Alkaline purifiers for flats, bungalows & housing societies in Pune & PCMC.",
    action: "View domestic models",
    icon: <Droplets />
  },
  {
    title: "Industrial & Commercial RO",
    desc: "100–4000 LPH RO plants for factories, schools, hotels, canteens & hospitals.",
    action: "Explore industrial plants",
    icon: <Factory />
  },
  {
    title: "Spare Parts & Filters",
    desc: "Membranes, cartridges, pumps, housings & accessories at wholesale pricing.",
    action: "Shop spare parts",
    icon: <ShoppingCart />
  },
  {
    title: "AMC & Service Plans",
    desc: "Yearly RO maintenance plans for homes, offices, societies and industries.",
    action: "View AMC options",
    icon: <ShieldCheck />
  }
];

// Content: Team
export const TEAM_MEMBERS = [
  {
    name: "Pratik Shivaji Lokare",
    role: "RO Technician",
    desc: "Pratik is committed to providing tailored water solutions and precise on-site service, ensuring every client’s RO system runs smoothly."
  },
  {
    name: "Avinash Borude",
    role: "B.E. Mechanical • Founder & CEO",
    desc: "With 14+ years of experience in the RO industry, Avinash oversees design, implementation and long-term performance of all filtration solutions."
  },
  {
    name: "Prashant Sant",
    role: "Gurukrupa Buildcon",
    desc: "Prashant develops affordable, scalable water projects so that clean water becomes accessible without putting pressure on your budget."
  }
];

// Content: Trust/Testimonials
export const TESTIMONIALS = [
  {
    name: "Sandeep Patil",
    location: "Ravet, Pune",
    rating: 5,
    text: "FilterWallah technician reached within 2 hours. He showed me the TDS levels before and after service. Very transparent and professional.",
    date: "2 days ago"
  },
  {
    name: "Anjali Deshpande",
    location: "Wakad, Pune",
    rating: 5,
    text: "We installed a 100 LPH plant for our society in Wakad. The installation quality is premium and their AMC service is very prompt.",
    date: "1 week ago"
  },
  {
    name: "Rahul Mehta",
    location: "Hinjewadi Phase 1",
    rating: 5,
    text: "My Aquaguard was beeping constantly. Other mechanics suggested expensive board replacement, but FilterWallah fixed it in ₹350. Honest work.",
    date: "3 weeks ago"
  }
];

export const TRUSTED_SOCIETIES = [
  "Pebbles Society", "Blue Ridge", "Life Republic", "Ravet Heights", "Kolte Patil",
  "NB Bhondave", "Lodha", "Mystic Society", "Vision Aristo"
];

export const TRUSTED_COMPANIES = [
  "Paras Company", "Indian Army Canteen", "East of Oxford",
  "The Royal Engineers", "Hotel Surmai", "Lunch Box", "And Many More..."
];

// Content: Industrial
export const INDUSTRIAL_SPECS = [
  { capacity: "50 - 100 LPH", users: "Small Offices / Clinics", idealFor: "20-100 People" },
  { capacity: "250 LPH", users: "Schools / Hostels", idealFor: "100-300 People" },
  { capacity: "500 LPH", users: "Housing Societies", idealFor: "50-100 Flats" },
  { capacity: "1000+ LPH", users: "Large Factories", idealFor: "500+ Staff" },
];

export const INDUSTRIAL_PROCESS = [
  { step: 1, title: "Survey", desc: "Site visit & water analysis" },
  { step: 2, title: "Testing", desc: "Lab testing of water samples" },
  { step: 3, title: "Design", desc: "Custom plant configuration" },
  { step: 4, title: "Installation", desc: "Professional setup & plumbing" },
  { step: 5, title: "Training", desc: "Usage guide for your staff" },
  { step: 6, title: "AMC", desc: "Quarterly maintenance & support" },
];

export const SEO_KEYWORDS = [
  "All Pune & PCMC",
  "Rest of Maharashtra (Industrial Projects)",
  "RO Service Pune",
  "Water Purifier Repair Ravet",
  "Industrial RO Plant Manufacturer",
  "RO AMC Wakad",
  "Best RO Technician Hinjewadi",
  "Commercial RO Plant Price",
  "Aquaguard Service Center Pune",
  "Kent RO Repair Near Me"
];