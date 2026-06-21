export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Main Engine Overhaul – BFDC Vessel',
    client: 'Bangladesh Fisheries Development Corporation',
    category: 'Mechanical',
    description:
      'Comprehensive overhaul of a main engine including dismantling, inspection, component replacement, reassembly, testing and commissioning.',
    image: '/images/projects/engine-overhaul.jpg',
    beforeImage: '/images/projects/engine-before.jpg',
    afterImage: '/images/projects/engine-after.jpg',
  },
  {
    id: 'project-2',
    title: 'Pipeline Renewal – Chittagong Port',
    client: 'Chittagong Port Authority',
    category: 'Pipeline',
    description:
      'Renewal of cu‑ni and stainless steel pipelines for seawater and fireline services on a bulk carrier at Chittagong Port including fabrication and pressure testing.',
    image: '/images/projects/pipeline-renewal.jpg',
    beforeImage: '/images/projects/pipeline-before.jpg',
    afterImage: '/images/projects/pipeline-after.jpg',
  },
  {
    id: 'project-3',
    title: 'Turbocharger Overhaul – Bengal Shipping',
    client: 'Bengal Shipping',
    category: 'Mechanical',
    description:
      'Balanced and overhauled turbochargers on a series of vessels, including bearing replacement, rotor balancing and performance testing.',
    image: '/images/projects/turbo-overhaul.jpg',
  },
  {
    id: 'project-4',
    title: 'CPP System Maintenance – Continental Liner',
    client: 'Continental Liner',
    category: 'Propulsion',
    description:
      'Maintenance of controllable pitch propeller (CPP) systems including hydraulic overhaul, blade inspection and operational testing.',
    image: '/images/projects/cpp-maintenance.jpg',
  },
  {
    id: 'project-5',
    title: 'Fishing Vessel Fleet Maintenance',
    client: 'General Fleet',
    category: 'Mixed',
    description:
      'Ongoing maintenance and overhaul services for a fleet of fishing vessels including engines, pipelines, hydraulics and electrical systems.',
    image: '/images/projects/fleet-maintenance.jpg',
  },
];