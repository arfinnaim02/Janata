import { Metadata } from 'next';
import { facilities } from '@/data/facilities';
import FacilityGrid from '@/components/sections/FacilityGrid';
import SectionHeading from '@/components/ui/SectionHeading';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Facilities – Janata Electric & Engineering Workshop',
  description:
    'Take a look at our workshop facilities and equipment enabling precision fabrication, testing and repair of marine components.',
};

export default function FacilitiesPage() {
  return (
    <div>
      <section className="relative h-60 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
          Workshop Facilities
        </h1>
      </section>
      <section className="py-12 bg-light">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Equipped for Precision Engineering"
            subtitle="Our workshop houses an extensive range of fabrication and testing equipment to support complex marine repairs."
            align="left"
          />
        </div>
        <FacilityGrid facilities={facilities} />
      </section>
      <CTA
        heading="Need on‑site support?"
        subheading="Our mobile repair teams can come to your vessel."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Call Us"
        secondaryHref="tel:+8801919319350"
      />
    </div>
  );
}