import { Metadata } from 'next';
import { projects } from '@/data/projects';
import ProjectGrid from '@/components/sections/ProjectGrid';
import SectionHeading from '@/components/ui/SectionHeading';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Projects – Janata Electric & Engineering Workshop',
  description:
    'Explore our marine engineering project portfolio showcasing engine overhauls, pipeline renewals, CPP maintenance and more.',
};

export default function ProjectsPage() {
  return (
    <div>
      <section className="relative h-60 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary">Our Projects</h1>
      </section>
      <section className="py-12 bg-light">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Proven Experience. Trusted Results."
            subtitle="A selection of recent marine engineering projects delivered for clients across Bangladesh and beyond."
            align="left"
          />
        </div>
        <ProjectGrid projects={projects} />
      </section>
      <CTA
        heading="Have a similar requirement?"
        subheading="Tell us about your project and we\'ll provide a tailored solution."
        primaryLabel="Request Quote"
        primaryHref="/contact"
        secondaryLabel="Call Us"
        secondaryHref="tel:+8801919319350"
      />
    </div>
  );
}