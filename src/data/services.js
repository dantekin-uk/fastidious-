// Import Life Product Images from assets
import life1 from '../../assets/serviceslife/life1.jpg'
import life2 from '../../assets/serviceslife/life2.jpg'
import life3 from '../../assets/serviceslife/life3.jpg'
import life4 from '../../assets/serviceslife/life4.jpg'
import life5 from '../../assets/serviceslife/life5.jpg'

// personal1.jpg is missing from the assets folder, using a placeholder to fix the resolution error
const personal1 = 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80'
import personal2 from '../../assets/servicespersonal/personal2.jpg'
import personal3 from '../../assets/servicespersonal/personal3.jpg'
import personal4 from '../../assets/servicespersonal/personal4.jpg'

import commercial1 from '../../assets/servicescommercial/commercial1.jpg'
import commercial2 from '../../assets/servicescommercial/commercial2.jpg'
import commercial3 from '../../assets/servicescommercial/commercial3.jpg'
import commercial4 from '../../assets/servicescommercial/commercial4.jpg'
import commercial5 from '../../assets/servicescommercial/commercial5.jpg'

// Centralized services data with full details for all service offerings
export const servicesData = [
  // LIFE PRODUCTS
  {
    id: 'group-life',
    name: 'Group Life Insurance',
    category: 'Life Products',
    image: life1,
    description: 'Comprehensive group life insurance coverage designed for organizations seeking to provide financial protection for their employees and their families.',
    fullDescription: 'Our Group Life Insurance provides essential financial protection for your workforce. This coverage ensures that in the event of an employee\'s death, their beneficiaries receive substantial financial support, providing peace of mind to both employees and employers. The benefits include competitive premiums, flexible coverage options, and comprehensive underwriting support.',
    benefits: [
      'Competitive premium rates for groups',
      'Flexible coverage amounts',
      'Easy enrollment process',
      'Optional riders available',
      'Family protection coverage'
    ]
  },
  {
    id: 'group-funeral-expense',
    name: 'Group Funeral Expense',
    category: 'Life Products',
    image: life2,
    description: 'Dignified funeral and burial expense coverage that ensures your loved ones are protected from unexpected costs during difficult times.',
    fullDescription: 'Group Funeral Expense insurance covers all essential funeral and burial costs, ensuring that your family members don\'t face financial hardship during grief. This coverage includes coffin costs, transportation, and other funeral arrangements, making it easier for families to focus on saying goodbye without worrying about expenses.',
    benefits: [
      'Full funeral arrangement coverage',
      'Immediate claim processing',
      'No age limit for claims',
      'Flexible payout options',
      'Family protection at low cost'
    ]
  },
  {
    id: 'retirement-solutions',
    name: 'Retirement Solutions',
    category: 'Life Products',
    image: life3,
    description: 'Build a secure financial future with our comprehensive retirement planning and savings solutions.',
    fullDescription: 'Plan for a comfortable retirement with our tailored retirement solutions. We offer flexible contribution options, competitive returns, and professional investment management to help you achieve your retirement goals. Our plans are designed to grow your wealth systematically over time.',
    benefits: [
      'Flexible contribution schedules',
      'Competitive investment returns',
      'Tax-efficient savings',
      'Professional fund management',
      'Retirement income options'
    ]
  },
  {
    id: 'individual-pension-plans',
    name: 'Individual Pension Plans',
    category: 'Life Products',
    image: life4,
    description: 'Personalized pension plans that secure your financial independence and ensure a stable income stream in retirement.',
    fullDescription: 'Individual Pension Plans are custom-tailored to your unique retirement needs. Whether you\'re self-employed or looking for additional retirement savings, our plans offer flexibility in contributions and withdrawals while maximizing tax benefits.',
    benefits: [
      'Flexible contribution amounts',
      'Customizable payout options',
      'Tax relief on contributions',
      'Professional investment management',
      'Lifetime income security'
    ]
  },
  {
    id: 'savings',
    name: 'Savings Solution',
    category: 'Life Products',
    image: life5,
    description: 'Secure savings products that combine protection with steady growth for your financial goals.',
    fullDescription: 'Our Savings Solutions help you build wealth gradually while maintaining guaranteed returns. These products are ideal for those seeking security alongside growth, with added life insurance coverage.',
    benefits: [
      'Guaranteed returns on investment',
      'Added life insurance protection',
      'Flexible withdrawal terms',
      'Regular bonus payments',
      'Capital safety assurance'
    ]
  },

  // PERSONAL INSURANCE
  {
    id: 'comprehensive-motor-policies',
    name: 'Comprehensive Motor Policies',
    category: 'Personal Insurance',
    image: personal1,
    description: 'Complete vehicle protection covering accidental damage, theft, and third-party liabilities with extensive benefits.',
    fullDescription: 'Our Comprehensive Motor Policies provide complete protection for your vehicle against all risks including accidental damage, theft, vandalism, and natural disasters. Coverage includes third-party liability, passenger protection, and optional add-ons for enhanced security.',
    benefits: [
      'Coverage for accidental damage',
      'Theft and vandalism protection',
      'Third-party liability included',
      ' 24/7 roadside assistance',
      'Quick claim settlement',
      'Cashless repairs at network centers'
    ]
  },
  {
    id: 'home-business-insurance',
    name: 'Home/Business Insurance',
    category: 'Personal Insurance',
    image: personal2,
    description: 'Protect your home and small business assets with comprehensive coverage against various risks.',
    fullDescription: 'Whether protecting your home or small business, our Home/Business Insurance covers property damage, theft, liability, and business interruption. Customize your coverage to match your specific needs and assets.',
    benefits: [
      'Property damage protection',
      'Theft and burglary coverage',
      'Liability protection',
      'Business interruption coverage',
      'Contents coverage included',
      'Optional equipment protection'
    ]
  },
  {
    id: 'travel-insurance',
    name: 'Travel Insurance',
    category: 'Personal Insurance',
    image: personal3,
    description: 'Travel worry-free with comprehensive protection against unexpected incidents during your journeys.',
    fullDescription: 'Our Travel Insurance ensures you\'re protected against medical emergencies, trip cancellations, lost luggage, and other unforeseen events while traveling. Coverage is available for domestic and international trips with flexible policy periods.',
    benefits: [
      'Medical emergency coverage',
      'Trip cancellation protection',
      'Lost baggage coverage',
      'Travel delay benefits',
      'Personal liability protection',
      'Emergency evacuation coverage'
    ]
  },
  {
    id: 'pet-insurance',
    name: 'Pet Insurance',
    category: 'Personal Insurance',
    image: personal4,
    description: 'Care for your beloved pets with comprehensive health insurance coverage for veterinary expenses.',
    fullDescription: 'Pet Insurance provides financial protection for unexpected veterinary expenses for your dogs, cats, and other pets. Our plans cover accidents, illnesses, and preventive care, ensuring your pets receive the best medical treatment without financial strain.',
    benefits: [
      'Comprehensive health coverage',
      'Accident and illness protection',
      'Preventive care included',
      'Direct payment to vets',
      'No exclusions for hereditary conditions',
      'Lifetime coverage available'
    ]
  },

  // COMMERCIAL INSURANCE
  {
    id: 'indemnity',
    name: 'Professional Indemnity',
    category: 'Commercial Insurance',
    image: commercial1,
    description: 'Protect your professional practice with comprehensive indemnity coverage against claims and litigation.',
    fullDescription: 'Professional Indemnity Insurance is essential for professionals including doctors, engineers, accountants, consultants, and architects. It covers legal fees, damages, and compensation claims arising from professional negligence or errors in service delivery.',
    benefits: [
      'Legal defense coverage',
      'Damage compensation protection',
      'Professional reputation protection',
      'Regulatory compliance support',
      'Run-off cover available',
      'Competitive premium rates'
    ]
  },
  {
    id: 'bonds-guarantees',
    name: 'Bonds and Guarantees',
    category: 'Commercial Insurance',
    image: commercial2,
    description: 'Secure your business transactions and projects with comprehensive guarantee and performance bond coverage.',
    fullDescription: 'Our Bonds and Guarantees products provide financial security for major transactions and projects. These include bid bonds, performance bonds, and payment guarantees that protect you and your stakeholders throughout contract execution.',
    benefits: [
      'Project security assurance',
      'Payment guarantee protection',
      'Bid bond issuance',
      'Performance bond coverage',
      'Fast approval process',
      'Flexible payment terms'
    ]
  },
  {
    id: 'engineering',
    name: 'Engineering Insurance',
    category: 'Commercial Insurance',
    image: commercial3,
    description: 'Comprehensive protection for engineering projects and construction activities against operational and financial risks.',
    fullDescription: 'Engineering Insurance covers construction projects, machinery breakdowns, and operational disruptions. Our policies protect against property damage, liability claims, and business interruption losses arising from engineering operations.',
    benefits: [
      'Construction project coverage',
      'Machinery breakdown protection',
      'Liability coverage included',
      'Business interruption protection',
      'Equipment coverage',
      'Professional indemnity included'
    ]
  },
  {
    id: 'cargo-transit',
    name: 'Cargo and Transit Insurance',
    category: 'Commercial Insurance',
    image: commercial4,
    description: 'Protect your goods in transit with comprehensive coverage against loss, damage, and theft during transportation.',
    fullDescription: 'Cargo and Transit Insurance covers goods during movement by road, rail, sea, or air. Protection includes coverage against theft, damage, accidents, and natural disasters, ensuring your shipments reach their destination safely.',
    benefits: [
      'Full goods coverage',
      'Theft protection',
      'Damage coverage',
      'Multiple transport mode coverage',
      'Quick claim processing',
      'Warehouse coverage included'
    ]
  },
  {
    id: 'corporate-travel',
    name: 'Corporate Travel',
    category: 'Commercial Insurance',
    image: commercial5,
    description: 'Comprehensive travel protection for your employees during business trips with extensive medical and emergency coverage.',
    fullDescription: 'Corporate Travel Insurance protects your traveling employees with comprehensive medical coverage, evacuation services, and business continuity protection. Annual policies provide cost-effective coverage for frequent business travelers.',
    benefits: [
      'Employee medical coverage',
      'Emergency evacuation services',
      'Trip cancellation protection',
      'Business equipment coverage',
      'Annual policy available',
      'Global coverage support'
    ]
  }
];

// Get service by ID
export const getServiceById = (id) => {
  return servicesData.find(service => service.id === id);
};

// Get all services in a category
export const getServicesByCategory = (category) => {
  return servicesData.filter(service => service.category === category);
};

// Get all unique categories
export const getCategories = () => {
  return [...new Set(servicesData.map(service => service.category))];
};

// Get related services (services from other categories)
export const getRelatedServices = (currentServiceId, limit = 4) => {
  const currentService = getServiceById(currentServiceId);
  if (!currentService) return [];
  
  return servicesData
    .filter(service => service.id !== currentServiceId && service.category !== currentService.category)
    .slice(0, limit);
};
