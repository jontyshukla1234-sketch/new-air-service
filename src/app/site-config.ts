export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  image: string;
  features: string[];
  popularBadge?: string;
  startingPrice?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'repair' | 'service' | 'installation' | 'cleaning';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface WhyChooseUsItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlight: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  icon: string;
}

export interface ReviewItem {
  name: string;
  location: string;
  badge?: string;
  userStats?: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

export interface BusinessConfig {
  businessName: string;
  tagline: string;
  heroSubheading: string;
  phoneDisplay: string;
  phoneTel: string;
  phoneFormatted: string;
  whatsappNumber: string;
  whatsappDefaultMsg: string;
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    landmark: string;
    fullFormatted: string;
  };
  workingHours: {
    display: string;
    emergencyText: string;
    days: string;
  };
  rating: {
    score: number;
    totalReviews: number;
    platform: string;
    verified: boolean;
  };
  googleMaps: {
    directDirectionsUrl: string;
    embedUrl: string;
  };
  trustBadges: { title: string; subtitle: string; icon: string }[];
  serviceAreas: string[];
  supportedBrands: string[];
  services: ServiceItem[];
  whyChooseUs: WhyChooseUsItem[];
  processSteps: ProcessStep[];
  gallery: GalleryItem[];
  reviews: ReviewItem[];
  faqs: FaqItem[];
}

export const BUSINESS_CONFIG: BusinessConfig = {
  // Core Business Identity (From Google Business Profile)
  businessName: 'New Air Solution',
  tagline: 'Professional AC Repair & Service You Can Trust',
  heroSubheading: 'Fast, reliable and affordable AC repair, installation, cleaning, and maintenance services for homes and businesses across Gorakhpur.',
  
  // Contact & Location Information
  phoneDisplay: '0788 049 5627',
  phoneTel: '+917880495627',
  phoneFormatted: '+91 78804 95627',
  
  whatsappNumber: '917880495627',
  whatsappDefaultMsg: 'Hello New Air Solution, I need AC repair/service assistance at my address in Gorakhpur.',
  
  address: {
    street: 'Buxipur Rd, Ariya Poram Colony, Shahpur',
    city: 'Gorakhpur',
    state: 'Uttar Pradesh',
    pincode: '273001',
    landmark: 'Near Ariya Poram Colony, Shahpur / Buxipur Road',
    fullFormatted: 'Buxipur Rd, Ariya Poram Colony, Shahpur, Gorakhpur, Uttar Pradesh 273001'
  },
  
  workingHours: {
    display: 'Monday – Sunday: 8:00 AM – 9:00 PM',
    emergencyText: '24/7 Urgent Breakdown Support Available',
    days: '7 Days a Week'
  },
  
  rating: {
    score: 5.0,
    totalReviews: 10,
    platform: 'Google Reviews',
    verified: true
  },
  
  // Google Maps URL & Embed
  googleMaps: {
    directDirectionsUrl: 'https://www.google.com/maps/dir//New+Air+Solution,+Buxipur+Rd,+Ariya+Poram+Colony,+Shahpur,+Gorakhpur,+Uttar+Pradesh+273001/@26.7606,83.3732,15z',
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14251.29828859781!2d83.363200!3d26.760600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39914526b1cb1a1b%3A0x8670d8a5c1e7a52e!2sShahpur%2C%20Gorakhpur%2C%20Uttar%20Pradesh%20273001!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin'
  },
  
  // Key Highlights / Trust Badges
  trustBadges: [
    { title: 'Doorstep Service', subtitle: 'Same day arrival across Gorakhpur', icon: 'fa-solid fa-truck-fast' },
    { title: 'Experienced Techs', subtitle: 'Trained & certified AC engineers', icon: 'fa-solid fa-user-gear' },
    { title: 'Transparent Rates', subtitle: 'Upfront quotation, no hidden fee', icon: 'fa-solid fa-shield-check' },
    { title: '100% Genuine Parts', subtitle: 'Quality spare parts with warranty', icon: 'fa-solid fa-certificate' }
  ],

  // Service Areas in Gorakhpur
  serviceAreas: [
    'Shahpur',
    'Buxipur Road',
    'Ariya Poram Colony',
    'AD Mall Area',
    'Golghar',
    'Mohaddipur',
    'Betiahata',
    'Medical College Road',
    'Rustampur',
    'Taramandal',
    'Rapti Nagar',
    'Asuran Chowk',
    'Karamat Chowki',
    'Basharatpur',
    'Padri Bazar',
    'All Gorakhpur Localities'
  ],

  // Brands Serviced
  supportedBrands: [
    'Voltas', 'Daikin', 'LG', 'Samsung', 'Blue Star', 
    'Hitachi', 'Panasonic', 'Lloyd', 'Carrier', 'Godrej', 'Haier', 'Whirlpool'
  ],

  // Services Catalog
  services: [
    {
      id: 'ac-repair',
      name: 'AC Repair',
      shortDesc: 'Fast and reliable repair for all common AC problems, cooling faults, PCB issues, and breakdowns.',
      fullDesc: 'Expert diagnostics and repair for cooling issues, compressor tripping, PCB card faults, thermostat errors, noise, and vibration.',
      icon: 'fa-solid fa-screwdriver-wrench',
      image: '/images/ac-repair.jpg',
      popularBadge: 'Most Requested',
      features: ['Cooling Issue Diagnostics', 'PCB Circuit Repair', 'Motor & Fan Replacement', 'Thermostat Calibration']
    },
    {
      id: 'ac-servicing',
      name: 'AC Servicing',
      shortDesc: 'Complete AC servicing to keep your system running efficiently with deep jet-pressure foam wash.',
      fullDesc: 'Comprehensive servicing that cleans interior fins, checks gas levels, sanitizes filters, and improves energy efficiency.',
      icon: 'fa-solid fa-faucet-drip',
      image: '/images/ac-service.jpg',
      popularBadge: 'Seasonal Must-Have',
      features: ['High-Pressure Jet Wash', 'Filter & Coil Deep Cleaning', 'Drain Pipe Flush', 'Overall Performance Check']
    },
    {
      id: 'ac-installation',
      name: 'AC Installation',
      shortDesc: 'Professional split and window AC installation, uninstallation, and safe wall bracket mounting.',
      fullDesc: 'Safe, level mounting of indoor and outdoor units, precision copper pipe flare connections, vacuuming, and leak testing.',
      icon: 'fa-solid fa-wrench',
      image: '/images/ac-installation.jpg',
      features: ['Split & Window AC Fitting', 'Safe Heavy Wall Brackets', 'Copper Piping & Insulation', 'Post-Fitting Load Testing']
    },
    {
      id: 'ac-gas-filling',
      name: 'AC Gas Filling',
      shortDesc: 'AC gas checking and gas refilling services for R32, R410A, and R22 with high-precision leak detection.',
      fullDesc: 'Comprehensive leak detection via nitrogen pressure testing, flare nut tightening, vacuuming, and pure refrigerant gas refilling.',
      icon: 'fa-solid fa-gauge-high',
      image: '/images/ac-gas-refill.jpg',
      features: ['Nitrogen Leak Detection', 'R32 / R410A / R22 Refrigerant', 'Manifold Pressure Calibration', 'Cooling Test Guarantee']
    },
    {
      id: 'ac-cleaning',
      name: 'AC Deep Cleaning',
      shortDesc: 'Deep cleaning of AC indoor and outdoor units to eliminate mold, bacteria, foul odors, and dust.',
      fullDesc: 'Anti-bacterial foam cleaning of cooling coils, blower wheel, drain tray, and condenser fins for fresh allergen-free air.',
      icon: 'fa-solid fa-broom',
      image: '/images/ac-cleaning.jpg',
      features: ['Anti-Bacterial Foam Jet', 'Blower & Evaporator Wash', 'Odor & Mold Removal', 'Enhanced Airflow Efficiency']
    },
    {
      id: 'ac-maintenance',
      name: 'AC Maintenance',
      shortDesc: 'Regular maintenance to improve performance, save electricity bills, and extend AC life.',
      fullDesc: 'Preventive maintenance checkups to prevent sudden breakdowns during peak Gorakhpur summer heat.',
      icon: 'fa-solid fa-sliders',
      image: '/images/technician-tools.jpg',
      features: ['Power Consumption Check', 'Capacitor & Wiring Inspection', 'Vibration Dampening', 'Seasonal Preventive Tuning']
    },
    {
      id: 'split-ac-service',
      name: 'Split AC Service',
      shortDesc: 'Complete servicing and repair for all inverter & non-inverter split AC systems of all tonnages.',
      fullDesc: 'Specialized split AC care covering PCB sensors, brushless DC motors, copper line insulation, and outdoor condenser wash.',
      icon: 'fa-solid fa-snowflake',
      image: '/images/split-ac.jpg',
      features: ['Inverter & 5-Star Split ACs', 'Dual Jet Servicing System', 'Indoor Drain Leak Fix', 'Sensor & Remote Check']
    },
    {
      id: 'window-ac-service',
      name: 'Window AC Service',
      shortDesc: 'Reliable repair, coil cleaning, motor checkup, and maintenance for residential & commercial window ACs.',
      fullDesc: 'Deep dismantle wash, motor lubrication, grill cleaning, fan balance, and mounting vibration fix for window air conditioners.',
      icon: 'fa-solid fa-border-all',
      image: '/images/window-ac.jpg',
      features: ['Dismantle Deep Clean', 'Fan Motor Lubrication', 'Thermostat & Selector Check', 'Chassis Rust Protection']
    }
  ],

  // Why Choose Us
  whyChooseUs: [
    {
      id: '1',
      icon: 'fa-solid fa-user-shield',
      title: 'Experienced Technicians',
      description: 'Skilled and verified AC experts with in-depth knowledge of all major inverter and non-inverter cooling brands.',
      highlight: 'Certified AC Pros'
    },
    {
      id: '2',
      icon: 'fa-solid fa-bolt',
      title: 'Fast & Reliable Service',
      description: 'Quick doorstep arrival across Shahpur, Buxipur, and Gorakhpur to get your AC running cool in no time.',
      highlight: 'Same Day Doorstep'
    },
    {
      id: '3',
      icon: 'fa-solid fa-file-invoice-dollar',
      title: 'Transparent Pricing',
      description: 'No hidden charges or surprise costs. We inspect first, explain the issue clearly, and provide upfront affordable rates.',
      highlight: 'Zero Hidden Costs'
    },
    {
      id: '4',
      icon: 'fa-solid fa-face-smile',
      title: 'Customer Satisfaction',
      description: 'Rated 5.0 on Google with genuine local reviews. We stand behind our work with dedicated post-service assistance.',
      highlight: '5.0 ★ Google Rated'
    }
  ],

  // 4-Step Easy Service Process
  processSteps: [
    {
      stepNumber: '01',
      title: 'Contact Us',
      description: 'Call us at 0788 049 5627 or send a quick WhatsApp message with your AC issue and location.',
      icon: 'fa-solid fa-phone-volume'
    },
    {
      stepNumber: '02',
      title: 'Schedule Service',
      description: 'Pick a convenient same-day or planned time slot that fits your personal schedule.',
      icon: 'fa-solid fa-calendar-check'
    },
    {
      stepNumber: '03',
      title: 'Technician Visit',
      description: 'Our experienced AC technician visits your doorstep with professional diagnostic tools & parts.',
      icon: 'fa-solid fa-truck-pickup'
    },
    {
      stepNumber: '04',
      title: 'Problem Solved',
      description: 'Your AC is repaired, cleaned, and tested for peak cooling performance before service handover.',
      icon: 'fa-solid fa-circle-check'
    }
  ],

  // Real Gallery Items with Lightbox Details
  gallery: [
    {
      id: 'gal-1',
      title: 'Split AC Deep Jet Servicing',
      category: 'service',
      categoryLabel: 'AC Servicing',
      image: '/images/ac-service.jpg',
      description: 'High pressure jet spray foam servicing of indoor evaporator coil for maximum airflow and cooling.'
    },
    {
      id: 'gal-2',
      title: 'Precision AC Installation',
      category: 'installation',
      categoryLabel: 'AC Installation',
      image: '/images/ac-installation.jpg',
      description: 'Heavy duty bracket mounting with vibration dampening pads and airtight copper piping.'
    },
    {
      id: 'gal-3',
      title: 'Refrigerant Gas Pressure Refilling',
      category: 'repair',
      categoryLabel: 'AC Gas Filling',
      image: '/images/ac-gas-refill.jpg',
      description: 'Pressure testing with manifold gauges and refilling pure R32/R410A gas for instant ice-cold cooling.'
    },
    {
      id: 'gal-4',
      title: 'Outdoor Condenser Unit Maintenance',
      category: 'repair',
      categoryLabel: 'Outdoor Unit Repair',
      image: '/images/outdoor-unit.jpg',
      description: 'Deep cleaning and capacitor checkup for outdoor compressor units to avoid heat trip.'
    },
    {
      id: 'gal-5',
      title: 'Anti-Bacterial Coil Cleaning',
      category: 'cleaning',
      categoryLabel: 'Deep Cleaning',
      image: '/images/ac-cleaning.jpg',
      description: 'Removing stubborn dirt, fungus, and dust from AC cooling fins using eco-friendly cleaner.'
    },
    {
      id: 'gal-6',
      title: 'Technician Diagnostics & Electrical Fix',
      category: 'repair',
      categoryLabel: 'AC Repair',
      image: '/images/ac-repair.jpg',
      description: 'Troubleshooting inverter PCB boards, sensors, and compressor wiring issues.'
    },
    {
      id: 'gal-7',
      title: 'Modern Split AC Fitting & Testing',
      category: 'installation',
      categoryLabel: 'Split AC',
      image: '/images/split-ac.jpg',
      description: 'Seamless split AC setup for residential rooms with clean drain pipe routing.'
    },
    {
      id: 'gal-8',
      title: 'Window AC Overhaul & Motor Servicing',
      category: 'service',
      categoryLabel: 'Window AC Service',
      image: '/images/window-ac.jpg',
      description: 'Complete breakdown servicing of window air conditioners with fan motor oiling and filter wash.'
    }
  ],

  // Real Customer Reviews from Google Business Profile
  reviews: [
    {
      name: 'Fazal E Haq',
      location: 'Gorakhpur, Uttar Pradesh',
      badge: 'Local Guide',
      userStats: '93 reviews • 1,192 photos',
      rating: 5,
      comment: "Exceptional service from start to finish! It's hard to find reliable service providers these days, but New Air Solution nailed it. They arrived right on time, diagnosed the issue quickly, and fixed it perfectly. Super friendly staff and top-tier work! 5 stars all the way.",
      service: 'Complete AC Diagnostics & Repair',
      date: '17 weeks ago'
    },
    {
      name: 'Sahil Khan',
      location: 'Gorakhpur, Uttar Pradesh',
      badge: 'Local Guide',
      userStats: '7 reviews • 23 photos',
      rating: 5,
      comment: 'Best service and best quality all time provide for all AC.',
      service: 'AC Servicing & Maintenance',
      date: '15 weeks ago'
    },
    {
      name: 'SK SAMEER KiNG',
      location: 'Shahpur, Gorakhpur',
      userStats: '5 reviews',
      rating: 5,
      comment: 'Very professional and polite staff. They did a thorough cleaning of my AC and left the place clean after finishing the work. Great service at a reasonable price!',
      service: 'Deep Jet Foam Cleaning',
      date: '17 weeks ago'
    },
    {
      name: 'Zafar Nawab',
      location: 'Gorakhpur, Uttar Pradesh',
      userStats: 'Local Customer',
      rating: 5,
      comment: 'Excellent AC service! The technician arrived on time, diagnosed the issue quickly, and fixed it perfectly. Highly recommended in Gorakhpur!',
      service: 'AC Repair & Cooling Fix',
      date: '17 weeks ago'
    },
    {
      name: 'MD Arham',
      location: 'Buxipur, Gorakhpur',
      userStats: '4 reviews • 1 photo',
      rating: 5,
      comment: 'They provide good service and workers are experience.',
      service: 'Split AC Service',
      date: '17 weeks ago'
    },
    {
      name: 'Mohd Muzammil',
      location: 'Gorakhpur, Uttar Pradesh',
      userStats: '1 review • 1 photo',
      rating: 5,
      comment: 'Prompt doorstep service and genuine advice for AC cooling. Very reasonable rates.',
      service: 'Gas Refilling & Leak Test',
      date: '17 weeks ago'
    },
    {
      name: 'Nadeem Ahmad',
      location: 'Shahpur, Gorakhpur',
      userStats: 'Verified Customer',
      rating: 5,
      comment: 'Quick response and very professional technician. Sorted our AC cooling problem quickly and affordably.',
      service: 'Emergency AC Repair',
      date: '17 weeks ago'
    }
  ],

  // FAQs
  faqs: [
    {
      question: 'How quickly can your technician visit my location in Gorakhpur?',
      answer: 'We provide prompt same-day doorstep service across Shahpur, Buxipur, Golghar, and all areas of Gorakhpur. Usually, our technician arrives within 30 to 60 minutes after confirmation.'
    },
    {
      question: 'What are your charges for AC servicing and repair in Gorakhpur?',
      answer: 'Our inspection and service rates are extremely affordable and transparent. We first inspect the AC condition, provide an upfront estimate, and only proceed after your approval with no hidden fees.'
    },
    {
      question: 'Do you provide gas refilling for all types of ACs (R32, R410A, R22)?',
      answer: 'Yes, we provide 100% genuine refrigerant gas refilling for all AC models and refrigerants including R32, R410A, and R22. We also perform nitrogen leak testing before filling to ensure no gas leaks.'
    },
    {
      question: 'Which AC brands do you repair and service?',
      answer: 'We service and repair all major brands including Voltas, Daikin, LG, Samsung, Blue Star, Hitachi, Panasonic, Lloyd, Carrier, Godrej, Haier, Whirlpool, and O General for both Split and Window ACs.'
    },
    {
      question: 'How do I book an AC technician visit?',
      answer: 'You can directly call us on 0788 049 5627 or click the "WhatsApp Us" button on this website to instantly message us with your address and AC issue.'
    }
  ]
};
