export interface Industry {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export const industries: Industry[] = [
  {
    id: 'industry-1',
    name: 'Bulk Carrier',
    description: 'Experience servicing bulk carriers with comprehensive mechanical and pipeline solutions.',
  },
  {
    id: 'industry-2',
    name: 'Container Vessel',
    description: 'Support for container ship operations including engine overhauls and automation.',
  },
  {
    id: 'industry-3',
    name: 'Tanker',
    description: 'Maintenance services for oil and chemical tankers with strict safety compliance.',
  },
  {
    id: 'industry-4',
    name: 'Tug Boat',
    description: 'Reliable repairs and overhauls for harbour and seagoing tugs.',
  },
  {
    id: 'industry-5',
    name: 'Dredger',
    description: 'Specialised services for dredge pumps, suction and discharge lines.',
  },
  {
    id: 'industry-6',
    name: 'Fishing Vessel',
    description: 'Fleet maintenance programmes for commercial fishing vessels.',
  },
  {
    id: 'industry-7',
    name: 'Offshore Vessel',
    description: 'Support for offshore supply vessels including hydraulic and automation services.',
  },
  {
    id: 'industry-8',
    name: 'Government Marine Fleet',
    description: 'Trusted partner for government vessels requiring reliable engineering support.',
  },
  {
    id: 'industry-9',
    name: 'Industrial Plants',
    description: 'Industrial maintenance services for plants with large mechanical and electrical equipment.',
  },
];