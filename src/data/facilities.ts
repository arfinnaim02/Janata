export interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const facilities: Facility[] = [
  {
    id: 'facility-1',
    title: 'Portable Gas Detectors',
    description: 'Safety equipment to monitor gas concentrations during repairs.',
    image: '/images/facilities/gas-detector.jpg',
  },
  {
    id: 'facility-2',
    title: 'Chain Blocks & Lever Hoists',
    description: 'Heavy‑duty lifting gear for safe handling of large components.',
    image: '/images/facilities/chain-blocks.jpg',
  },
  {
    id: 'facility-3',
    title: 'Hydraulic Torque Wrenches',
    description: 'High‑precision wrenches for controlled tightening of fasteners.',
    image: '/images/facilities/torque-wrench.jpg',
  },
  {
    id: 'facility-4',
    title: 'Bench & Magnetic Drills',
    description: 'Portable and fixed drilling equipment for on‑site fabrication.',
    image: '/images/facilities/drill.jpg',
  },
  {
    id: 'facility-5',
    title: 'Hydraulic Press',
    description: 'Large press for forming and testing hydraulic components.',
    image: '/images/facilities/press.jpg',
  },
  {
    id: 'facility-6',
    title: 'Lathe & Welding Machines',
    description: 'Precision machining and welding facilities for custom fabrication.',
    image: '/images/facilities/lathe-welding.jpg',
  },
  {
    id: 'facility-7',
    title: 'Pipe Bending Machines',
    description: 'Equipment for custom pipe fabrication in various alloys.',
    image: '/images/facilities/pipe-bender.jpg',
  },
  {
    id: 'facility-8',
    title: 'Pressure Testing Units',
    description: 'Units for hydrostatic and pneumatic testing of pipelines and vessels.',
    image: '/images/facilities/pressure-tester.jpg',
  },
  {
    id: 'facility-9',
    title: 'Electrical & Diagnostic Tools',
    description: 'Digital tachometers, insulation testers and calibration kits for accurate diagnostics.',
    image: '/images/facilities/electrical-tools.jpg',
  },
];