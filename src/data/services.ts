export interface ServiceItem {
  name: string;
  description?: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  description: string;
  items: ServiceItem[];
  heroImage: string;
  benefits: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'mechanical',
    title: 'Mechanical & Engine Services',
    description:
      'Precision overhaul and maintenance services for main engines, auxiliary engines and related mechanical systems to maximise performance and lifespan.',
    items: [
      { name: 'Main engine overhauling' },
      { name: 'Auxiliary engine / generator overhauling' },
      { name: 'Turbocharger overhauling' },
      { name: 'Governor overhauling' },
      { name: 'Gearbox overhauling' },
      { name: 'Pump & cooler overhauling' },
      { name: 'Valve overhauling' },
      { name: 'Compressor overhauling' },
    ],
    heroImage: '/images/hero-mechanical.jpg',
    benefits: [
      'Reduced downtime through expert diagnostics and maintenance',
      'OEM‑quality parts and precision machining ensure reliability',
      'Comprehensive testing and commissioning on completion',
    ],
  },
  {
    slug: 'pipeline',
    title: 'Pipeline Renewal & Fabrication',
    description:
      'Specialised fabrication and replacement of marine pipelines using copper, stainless steel, Cu‑Ni and other alloys for seawater, freshwater, fuel and hydraulic systems.',
    items: [
      { name: 'Seawater pipeline renewal' },
      { name: 'Freshwater pipeline renewal' },
      { name: 'Fireline renewal' },
      { name: 'Lube oil pipeline renewal' },
      { name: 'Fuel oil pipeline renewal' },
      { name: 'Hydraulic pipeline renewal' },
      { name: 'Cu‑Ni pipeline renewal' },
      { name: 'Stainless steel pipeline renewal' },
      { name: 'Cast iron pipeline renewal' },
      { name: 'Copper pipeline renewal' },
      { name: 'Sea chest strainer renewal' },
      { name: 'Dredge suction & discharge pipe renewal' },
    ],
    heroImage: '/images/hero-pipeline.jpg',
    benefits: [
      'Marine‑grade materials ensure long‑term durability',
      'Custom fabrication meets precise vessel specifications',
      'Pressure testing and quality control on all installations',
    ],
  },
  {
    slug: 'electrical',
    title: 'Electrical & Automation',
    description:
      'Advanced electrical and automation services including PLC programming, sensor integration, switchboard repairs and navigation equipment installation.',
    items: [
      { name: 'PLC systems for industrial and marine automation' },
      { name: 'Engine sensors & alarm systems' },
      { name: 'Fire alarm & smoke detection systems' },
      { name: 'Main & auxiliary engine switchboard repairs' },
      { name: 'Motor controller & inverter drives' },
      { name: 'Motor repairs & rewinding' },
      { name: 'Radar & gyro installation' },
      { name: 'Tank ullage equipment electrical repairs' },
    ],
    heroImage: '/images/hero-electrical.jpg',
    benefits: [
      'Enhanced operational safety through advanced automation',
      'Rapid troubleshooting and fault rectification',
      'Integration of systems for seamless vessel operations',
    ],
  },
  {
    slug: 'hydraulic',
    title: 'Hydraulic Systems',
    description:
      'Comprehensive repair and overhaul of hydraulic pumps, valves, rams and related systems including controllable pitch propeller (CPP) hydraulics.',
    items: [
      { name: 'Hydraulic pumps' },
      { name: 'Hydraulic valves' },
      { name: 'Hydraulic rams' },
      { name: 'Hydraulic drums' },
      { name: 'Hydraulic grab overhauling' },
      { name: 'Hydraulic system repairs & troubleshooting' },
    ],
    heroImage: '/images/hero-hydraulic.jpg',
    benefits: [
      'Factory‑trained technicians ensure accurate repairs',
      'Use of genuine parts and calibrated tools',
      'Load and pressure testing before recommissioning',
    ],
  },
  {
    slug: 'propulsion',
    title: 'Propulsion & Steering',
    description:
      'Maintenance and repair services for critical propulsion and steering components including propellers, shafts, rudders and bow thrusters.',
    items: [
      { name: 'Controllable pitch propeller maintenance' },
      { name: 'Propeller & shaft overhauling' },
      { name: 'Rudder, bush & bearing repair' },
      { name: 'Steering gear repair & control systems' },
      { name: 'Bow thruster control & motor maintenance' },
      { name: 'Tailstock repair' },
    ],
    heroImage: '/images/hero-propulsion.jpg',
    benefits: [
      'Optimised efficiency and fuel performance',
      'Balancing and alignment for reduced vibration',
      'Expert diagnostics on steering and control systems',
    ],
  },
  {
    slug: 'boiler',
    title: 'Boiler & Heat Transfer',
    description:
      'Repair, replacement and maintenance services for marine boilers, condensers, heat exchangers and radiators to maintain optimal thermal performance.',
    items: [
      { name: 'Boiler repair & maintenance' },
      { name: 'Boiler tube replacement' },
      { name: 'Condenser repair & fabrication' },
      { name: 'Heat exchanger repair' },
      { name: 'Radiator repair' },
    ],
    heroImage: '/images/hero-boiler.jpg',
    benefits: [
      'Improved thermal efficiency and safety',
      'Use of certified materials and welding procedures',
      'Comprehensive inspection and pressure testing',
    ],
  },
];